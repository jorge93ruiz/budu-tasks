import Footer from "@/app/_ui/Footer";
import Header from "@/app/_ui/Header";
import "@/app/globals.css";

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh font-(family-name:--font-geist-sans)">
            <Header className="container mx-auto" />
            <main className="py-8 px-4 sm:px-8 container mx-auto">{children}</main>
            <Footer className="row-start-3 container mx-auto" />
        </div>
    );
}
