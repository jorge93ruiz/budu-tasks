import { NextResponse, NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost/api/tasks/"}user`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (res.ok) {
            const response = await res.json();

            if (response.status === 200) {
                const isPublicRoute = publicRoutes.includes(path);

                if (isPublicRoute) {
                    return NextResponse.redirect(new URL("/dashboard", request.url));
                } else {
                    return NextResponse.next();
                }
            }
        } else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: [
        // Exclude API routes, static files, image optimizations, and .png files
        "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    ],
};
