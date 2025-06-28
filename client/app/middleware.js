import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_ROUTES = [
  "/",
  "/About",
  "/privacy",
  "/sign-in",
  "/sign-up",
  "/contact",
  "/posts",
  "/[year]",
  "/category",
  "/Couch",
  "/Events",
  "/programs",
  "/project-fair",
  "/form",
  "/firstlego",
  "/api/webhooks",
  "/api/public",
];

const ROLE_DASHBOARDS = {
  admin: "/admincodeboard/overview",
  viewer: "/",
};

const PROTECTED_PATHS = {
  "/admincodeboard": "admin",
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route)
  );

  try {
    const token = await getToken({ req, secret: process.env.API_SECRET });

    // 1. Not logged in & not on a public route → redirect
    if (!token && !isPublicRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // 2. Logged in but no role info
    if (token && !token.role) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // 3. Redirect /board to appropriate dashboard
    if (token && pathname === "/board") {
      const target = ROLE_DASHBOARDS[token.role] || "/";
      return NextResponse.redirect(new URL(target, req.url));
    }

    // 4. Prevent logged-in users from visiting sign-in or sign-up
    if (
      token &&
      ["/sign-in", "/sign-up"].includes(pathname)
    ) {
      const target = ROLE_DASHBOARDS[token.role] || "/";
      return NextResponse.redirect(new URL(target, req.url));
    }

    // 5. Check role-based route protections
    for (const protectedPath in PROTECTED_PATHS) {
      if (
        pathname.startsWith(protectedPath) &&
        token?.role !== PROTECTED_PATHS[protectedPath]
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(css|js|png|jpg|jpeg|svg|woff|woff2|ttf|eot)).*)",
  ],
};
