// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// グローバル変数として宣言し、開発環境でのホットリロード時に
// 複数のPrismaClientインスタンスが作成されることを防止
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 単一のPrismaClientインスタンスをエクスポート
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// 開発環境以外でグローバル変数にPrismaClientインスタンスを保存
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
