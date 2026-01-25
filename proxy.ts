import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);
    const isProtectedRoute = protectedRoutes.includes(path);

    const isAuthenticated = (await cookies()).get("is_authenticated")?.value;

    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (isPublicRoute && isAuthenticated && !request.nextUrl.pathname.startsWith("/dashboard")) {
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
