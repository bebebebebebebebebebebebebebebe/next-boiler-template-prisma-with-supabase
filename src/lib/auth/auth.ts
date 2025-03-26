import { env } from '@/config/env';
import NextAuth, { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { customPrismaAdapter } from './custom-prisma-adapter';
import { prisma } from '../prisma/prisma-client';

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  });

const nextAuthConfig: NextAuthConfig = {
  adapter: customPrismaAdapter(prisma),
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET || 'next-auth-secret',
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
  ],
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }
      return token;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(nextAuthConfig);
