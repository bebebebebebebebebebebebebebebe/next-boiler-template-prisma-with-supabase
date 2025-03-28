import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { env } from './config/env';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: env.AUTH_SECRET });
  console.log(`token: ${JSON.stringify(token)}`);

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
