import Image from "next/image";

export default function Footer({ className = "" }: { className?: string }) {
    return (
        <footer className={"flex gap-6 flex-wrap items-center justify-center py-1 text-xs font-bold " + className}>
            budu tasks
        </footer>
    );
}
