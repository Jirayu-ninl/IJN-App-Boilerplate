import * as Sentry from '@sentry/nextjs'
import { app } from './app/config'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  release: app.VERSION,
  tracesSampleRate: 1.0,
})
