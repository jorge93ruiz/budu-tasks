"use client";
import { usePathname, useRouter } from "next/navigation";
import { ApiResponse } from "../_lib/types";
import { logout } from "../_lib/auth";
import Link from "next/link";

export default function Header({ className = "" }: { className?: string }) {
    const router = useRouter();

    return (
        <header className="sticky top-0 bg-background border-b border-border/25">
            <div className={"w-full flex items-center justify-between gap-x-6 px-4 sm:px-8 " + className}>
                <div className="flex gap-x-6">
                    <Tab href="/dashboard">Dashboard</Tab>
                    <Tab href="/tasks">Tasks</Tab>
                </div>

                <button
                    type="button"
                    className="cursor-pointer py-2 sm:py-3"
                    onClick={async () => {
                        const res: ApiResponse = await logout();

                        if (res.success) {
                            router.push("/login");
                        } else {
                            console.error("Logout failed:", res.message);
                        }
                    }}
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

const Tab = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={
                "border-b-2 py-3 sm:py-4 duration-300 " +
                (pathname == href
                    ? "border-b-foreground"
                    : "border-b-transparent text-foreground/50 hover:text-foreground")
            }
        >
            {children}
        </Link>
    );
};
