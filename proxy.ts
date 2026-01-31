import { NextResponse, NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const isLoginRoute = request.nextUrl.pathname === "/login";
    const isAuth = request.cookies.get("is_authenticated");

    if (!isLoginRoute && !isAuth) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (isLoginRoute && isAuth) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Exclude API routes, static files, image optimizations, and .png files
        "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    ],
};
