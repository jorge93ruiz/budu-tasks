"use client";

import PageTitle from "@/app/_ui/PageTitle";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageTitle title="Dashboard" />
            <p className="dark:text-neutral-700 text-neutral-800">Welcome to your dashboard!</p>
            <p className="dark:text-neutral-700 text-neutral-800">This is a protected route.</p>
        </div>
    );
}
