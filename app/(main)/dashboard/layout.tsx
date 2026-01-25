import { Metadata } from "next";

export const metadata: Metadata = {
    title: "budu | Tasks | Dashboard",
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
