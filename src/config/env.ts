import { z } from 'zod';
import { createLogger } from './logger-config';

const logger = createLogger({
  where: 'env.ts',
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_API_KEY: z.string().min(1),
});

const serverEnvSchema = z.object({
  AUTH_SECRET: z.string().min(1),
  AUTH_GOOGLE_ID: z.string().min(1),
  AUTH_GOOGLE_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
});

export type clientEnv = z.infer<typeof clientEnvSchema>;
export type serverEnv = z.infer<typeof serverEnvSchema>;

const mergedEnvSchema = clientEnvSchema.merge(serverEnvSchema);
const parsed = mergedEnvSchema.safeParse(process.env);

if (!parsed.success) {
  logger.error('❌ Invalid environment variables:\n', parsed.error.flatten());
  throw new Error('Invalid environment variables');
}
export const env = parsed.data;

export const serverEnv = {
  AUTH_SECRET: env.AUTH_SECRET,
  AUTH_GOOGLE_ID: env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: env.AUTH_GOOGLE_SECRET,
  DATABASE_URL: env.DATABASE_URL,
};

export const clientEnv = {
  NEXT_PUBLIC_API_URL: env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_SUPABASE_URL: env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_API_KEY: env.NEXT_PUBLIC_SUPABASE_API_KEY,
};
