import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/chats", "/chats/:path*"];
const publicRoutes = ["/sign-in", "/sign-up", "/"];

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("userId")?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  if (isPublicRoute && cookie && !req.nextUrl.pathname.startsWith("/chats")) {
    return NextResponse.redirect(new URL("/chats", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
