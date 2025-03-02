import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["user-info"];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.includes(route));
  //   console.log("is Protected", isProtected);

  if (isProtected && !session?.user) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl));
  }

  return NextResponse.next();
}
