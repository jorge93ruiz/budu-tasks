import Link from "next/link";

export default function TextButton({
    className = "",
    isLoading = false,
    children,
    ...props
}: {
    className?: string;
    isLoading?: boolean;
    children: React.ReactNode;
    [key: string]: any;
}) {
    const Component = props.href ? Link : "button";

    return (
        <Component
            className={`cursor-pointer transition-colors text-muted hover:text-foreground disabled:opacity-50 ${className}`}
            {...props}
            {...(props.href && { href: props.href })}
            disabled={isLoading}
        >
            {children}
        </Component>
    );
}
