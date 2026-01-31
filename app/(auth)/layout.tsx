import "@/app/globals.css";
import Footer from "@/app/_ui/Footer";

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-dvh font-(family-name:--font-geist-sans) bg-background">
            <main className="py-4 px-8 flex flex-col gap-y-8 items-center">
                <div className="px-8 sm:px-12 py-2">
                    <div className="text-[50px] leading-0 text-muted">budu</div>
                    <div className="font-bold tracking-wider text-[150px] leading-37.5">tasks</div>
                </div>
                {children}
            </main>
            <Footer />
        </div>
    );
}
