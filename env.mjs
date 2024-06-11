import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production'], {
      default: 'development',
    }),
    STRIPE_SECRET_API_KEY: z.string().min(1).optional(),
    STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
    RESEND_USERNAME: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_EMAIL_SERVER_USER: z.string().min(1),
    RESEND_EMAIL_SERVER_HOST: z.string().min(1),
    RESEND_EMAIL_SERVER_PORT: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_ANALITYCS_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_APP_URL: z.string().min(1).optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_ANALITYCS_ID: process.env.NEXT_PUBLIC_ANALITYCS_ID,
    // Resend
    RESEND_USERNAME: process.env.RESEND_USERNAME,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_EMAIL_SERVER_USER: process.env.RESEND_EMAIL_SERVER_USER,
    RESEND_EMAIL_SERVER_HOST: process.env.RESEND_EMAIL_SERVER_HOST,
    RESEND_EMAIL_SERVER_PORT: process.env.RESEND_EMAIL_SERVER_PORT,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  },
})
