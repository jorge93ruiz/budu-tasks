import { Metadata } from "next";

export const metadata: Metadata = {
    title: "budu tasks | Login",
};

export default async function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
