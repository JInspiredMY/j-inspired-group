import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Fast-path redirect for unauthenticated /admin requests. This is
// defense-in-depth alongside (not instead of) the session + role check in
// app/admin/layout.tsx once that lands — see R1 in the design brief.
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
