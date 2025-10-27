import { clerkMiddleware, createRouteMatcher, getAuth } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware(routing);

const isPublicRoute = createRouteMatcher([
  "/(ar|en)/sign-in(.*)", 
  "/(ar|en)/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
 
  const response = intlMiddleware(req);

  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  return response;
});

export const config = {
  matcher: ["/", "/(ar|en)", "/(ar|en)/:path*"],
};
