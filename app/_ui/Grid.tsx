export default function Grid({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${className}`}
            // className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 *:duration-300 *:border *:dark:border-neutral-900/50 *:dark:hover:border-neutral-800 *:rounded-xl *:p-4 ${className}`}
        >
            {children}
        </div>
    );
}
