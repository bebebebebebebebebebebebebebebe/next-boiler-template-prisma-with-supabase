import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { Adapter } from 'next-auth/adapters';

export const customPrismaAdapter = (prisma: PrismaClient): Adapter => {
  return {
    createUser: async (data) => {
      const tempUsername = `user_${data.email.split('@')[0]}_${crypto.randomUUID().substring(0, 8)}`;
      const user = await prisma.user.create({
        data: {
          email: data.email,
          username: tempUsername,
          full_name: data.name ?? '',
          profile_image_url: data.image,
          is_verified: data.emailVerified ? true : false,
        },
      });

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.full_name,
        image: user.profile_image_url,
        emailVerified: user.is_verified ? new Date() : null,
      };
    },

    getUser: async (id) => {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
      if (!user) return null;

      return {
        id: user.id.toString(),
        email: user.email,
        name: user.full_name,
        image: user.profile_image_url,
        emailVerified: user.is_verified ? new Date() : null,
      };
    },

    getUserByEmail: async (email) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) return null;

      return {
        id: user.id.toString(),
        email: user.email,
        emailVerified: user.is_verified ? new Date() : null,
        name: user.full_name,
        image: user.profile_image_url,
      };
    },

    getUserByAccount: async ({ provider, providerAccountId }) => {
      const socialAccount = await prisma.socialAccount.findUnique({
        where: {
          provider_provider_user_id: {
            provider,
            provider_user_id: providerAccountId,
          },
        },
        include: { user: true },
      });

      if (!socialAccount) return null;

      const user = socialAccount.user;
      return {
        id: user.id.toString(),
        email: user.email,
        emailVerified: user.is_verified ? new Date() : null,
        name: user.full_name,
        image: user.profile_image_url,
      };
    },

    linkAccount: async (data) => {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(data.userId) },
      });
      const providerEmail = user?.email || '';
      await prisma.socialAccount.create({
        data: {
          user_id: parseInt(data.userId),
          provider: data.provider,
          provider_user_id: data.providerAccountId,
          provider_email: providerEmail,
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          token_expiry: data.expires_at ? new Date(data.expires_at * 1000) : null,
        },
      });
      return data;
    },

    createSession: async (data) => {
      const session = await prisma.session.create({
        data: {
          userId: parseInt(data.userId),
          sessionToken: data.sessionToken,
          expires: data.expires,
        },
      });
      return {
        id: session.id,
        userId: session.userId.toString(),
        sessionToken: session.sessionToken,
        expires: session.expires,
      };
    },

    getSessionAndUser: async (sessionToken) => {
      const session = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });

      if (!session) return null;

      const user = session.user;
      return {
        session: {
          id: session.id,
          userId: session.userId.toString(),
          sessionToken: session.sessionToken,
          expires: session.expires,
        },
        user: {
          id: user.id.toString(),
          email: user.email,
          emailVerified: user.is_verified ? new Date() : null,
          name: user.full_name,
          image: user.profile_image_url,
        },
      };
    },

    updateSession: async (data) => {
      const session = await prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data: {
          expires: data.expires,
        },
      });
      return {
        id: session.id,
        userId: session.userId.toString(),
        sessionToken: session.sessionToken,
        expires: session.expires,
      };
    },

    deleteSession: async (sessionToken) => {
      await prisma.session.delete({
        where: { sessionToken },
      });
    },

    updateUser: async (data) => {
      const user = await prisma.user.update({
        where: { id: parseInt(data.id as string) },
        data: {
          email: data.email,
          full_name: data.name ?? '',
          profile_image_url: data.image,
          is_verified: data.emailVerified ? true : false,
        },
      });

      return {
        id: user.id.toString(),
        email: user.email,
        emailVerified: user.is_verified ? new Date() : null,
        name: user.full_name,
        image: user.profile_image_url,
      };
    },

    createVerificationToken: async (data) => {
      const token = await prisma.verificationToken.create({
        data,
      });
      return token;
    },

    useVerificationToken: async (params) => {
      try {
        const token = await prisma.verificationToken.delete({
          where: {
            identifier_token: {
              identifier: params.identifier,
              token: params.token,
            },
          },
        });
        return token;
      } catch (error) {
        return null;
      }
    },
  };
};
