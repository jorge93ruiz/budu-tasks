"use client";
import Footer from "@/app/_ui/Footer";
import { useMounted } from "../_contexts/MountedProvider";
import { CollapsibleSidebar, FullSidebar } from "../_ui/Sidebar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { mounted, loggedInUser } = useMounted();

    return mounted ? (
        <main className="grid lg:grid-cols-[auto_1fr] font-(family-name:--font-geist-sans)">
            <FullSidebar className="hidden lg:block" />
            <CollapsibleSidebar className="block lg:hidden" />
            <section className="grid grid-rows-[1fr_auto] min-h-dvh">
                <section className="py-8 px-4 sm:px-8 container mx-auto">{children}</section>
                <Footer className="row-start-3 container mx-auto" />
            </section>
        </main>
    ) : (
        <div>Loading...</div>
    );
}
