import Link from "next/link";

export default function PrimaryButton({
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
            className={`cursor-pointer rounded-xl border border-solid transition-colors flex items-center justify-center gap-2 font-medium h-9 px-4 sm:px-5 sm:w-auto border-transparent bg-foreground text-background hover:bg-primary-hover ${className}`}
            {...props}
            {...(props.href && { href: props.href })}
            disabled={isLoading}
        >
            {children}
        </Component>
    );
}
