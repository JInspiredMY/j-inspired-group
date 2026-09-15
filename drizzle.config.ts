import { defineConfig } from 'drizzle-kit'

// Migrations run against the DIRECT connection (port 5432) — the pooled
// connection (DATABASE_URL, used by db/index.ts at runtime) is
// transaction-mode and doesn't support the session-level features
// migrations need.
export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DIRECT_URL ?? '',
  },
})
