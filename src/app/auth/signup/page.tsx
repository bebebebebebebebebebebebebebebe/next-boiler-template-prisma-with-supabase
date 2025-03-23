import SignUpForm from '@/features/auth/components/signup/signup-form';
import { clientEnv } from '@/config/env';
import { createLogger } from '@/config/logger-config';

const logger = createLogger({
  where: 'signup/page.tsx',
});
export default function SignUpPage() {
  logger.info(clientEnv.NEXT_PUBLIC_API_URL);
  return <SignUpForm />;
}
