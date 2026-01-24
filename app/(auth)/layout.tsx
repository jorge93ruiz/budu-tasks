import "@/app/globals.css";
import Footer from "@/app/_ui/Footer";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-dvh font-[family-name:var(--font-geist-sans)]">
            <main className="py-4 px-8">{children}</main>
            <Footer />
        </div>
    );
}
