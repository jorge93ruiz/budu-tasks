import Link from "next/link";

export default function SecondaryButton({
    children,
    className = "",
    isLoading = false,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    [key: string]: any;
}) {
    const Component = props.href ? Link : "button";

    return (
        <Component
            className={`cursor-pointer rounded-xl border border-solid transition-colors flex items-center justify-center gap-2 font-medium h-9 px-4 sm:px-5 sm:w-auto border-border hover:bg-secondary-hover ${className}`}
            {...props}
            {...(props.href && { href: props.href })}
            disabled={isLoading}
        >
            {children}
        </Component>
    );
}
