import { Metadata } from "next";

export const metadata: Metadata = {
    title: "budu | Dashboard",
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
