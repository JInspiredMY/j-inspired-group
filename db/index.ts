import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Pooled connection (Supabase Supavisor, transaction mode) for application
// runtime queries from Vercel serverless functions. Migrations use the
// separate DIRECT_URL instead — see drizzle.config.ts.
//
// Transaction-mode pooling doesn't support prepared statements, so they're
// disabled here rather than per-query.
const client = postgres(requireEnv('DATABASE_URL'), { prepare: false })

export const db = drizzle(client, { schema })

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}
