/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't let `next dev` write/re-add its agent-rules block to CLAUDE.md.
  agentRules: false,
  // Pin the workspace root. A stray package.json/package-lock.json in a parent
  // directory (e.g. the home folder) otherwise makes Turbopack infer the wrong
  // root and hang while tracing it.
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
