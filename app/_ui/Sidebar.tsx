"use client";
import { usePathname, useRouter } from "next/navigation";
import { ApiResponse } from "../_lib/types";
import { logout } from "../_lib/auth";
import Link from "next/link";
import { useState } from "react";

const ROUTES = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/tasks", label: "Tasks" },
];

function FullSidebar({ className = "" }: { className?: string }) {
    return (
        <aside className={"border-r border-border " + className}>
            <div className="sticky top-0 h-dvh grid grid-rows-[auto_1fr_auto] space-y-2 py-8 min-w-xs">
                <SidebarLogo />

                <div className="space-y-2 overflow-y-auto px-4 sm:px-8">
                    {ROUTES.map((route) => (
                        <Tab key={route.href} href={route.href}>
                            {route.label}
                        </Tab>
                    ))}
                </div>

                <div className="px-4 sm:px-8">
                    <LogoutButton />
                </div>
            </div>
        </aside>
    );
}

function CollapsibleSidebar({ className = "" }: { className?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className={
                    "fixed top-4 right-4 z-50 duration-200 text-lg rounded-full flex justify-center items-center cursor-pointer bg-background border border-border hover:border-foreground p-2 w-9 h-9 " +
                    className
                }
                onClick={() => setOpen(!open)}
            >
                <div className="relative w-4 h-0.5 *:duration-300">
                    <div
                        className={"bg-foreground h-0.5 w-4 absolute left-0 " + (open ? "top-0 rotate-45" : "-top-1.5")}
                    ></div>
                    <div
                        className={
                            (open ? "opacity-0" : "opacity-100") + " bg-foreground h-0.5 w-4 absolute left-0 top-0"
                        }
                    ></div>
                    <div
                        className={"bg-foreground h-0.5 w-4 absolute left-0 " + (open ? "top-0 -rotate-45" : "top-1.5")}
                    ></div>
                </div>
            </button>

            <aside
                className={
                    "bg-background fixed border-r border-r-border duration-300 " +
                    (open ? "left-0" : "-left-full") +
                    (className ? " " + className : "")
                }
            >
                <div className="top-0 h-dvh grid grid-rows-[auto_1fr_auto] space-y-2 py-8 min-w-xs">
                    <SidebarLogo />

                    <div className="space-y-2 overflow-y-auto px-4 sm:px-8">
                        {ROUTES.map((route) => (
                            <Tab key={route.href} href={route.href} onClick={() => setOpen(false)}>
                                {route.label}
                            </Tab>
                        ))}
                    </div>

                    <div className="px-4 sm:px-8">
                        <LogoutButton onClick={() => setOpen(false)} />
                    </div>
                </div>
            </aside>
        </>
    );
}

function Tab({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={
                "block px-4 py-2 duration-300 rounded-lg " +
                (pathname == href ? "bg-input-hover" : "text-muted hover:text-foreground active:bg-input-hover")
            }
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

function SidebarLogo() {
    return (
        <div className="px-8 sm:px-12 py-2">
            <div className="text-xs leading-0 text-muted">budu</div>
            <div className="font-bold tracking-wider text-2xl">tasks</div>
        </div>
    );
}

function LogoutButton({ onClick }: { onClick?: () => void }) {
    const router = useRouter();

    return (
        <button
            type="button"
            className="w-full text-start cursor-pointer block px-4 py-2 duration-300 rounded-lg text-muted hover:text-foreground active:bg-input-hover"
            onClick={async () => {
                if (onClick) onClick();

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
    );
}

export { FullSidebar, CollapsibleSidebar };
