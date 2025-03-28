import { createDatetime } from '@/utils/datetime-config';
import pino from 'pino';

type LoggerOptions = {
  where?: string;
  context?: Record<string, any>;
};

export const createLogger = ({ where, context = {} }: LoggerOptions = {}) => {
  const logger = pino({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    formatters: {
      level: (label: string) => ({ level: label }),
    },
    timestamp: () => `,"timestamp":"${createDatetime()}"`,
    // base: {
    //   pid: process.pid,
    // },
  });

  return logger.child({
    where,
    ...context,
  });
};
