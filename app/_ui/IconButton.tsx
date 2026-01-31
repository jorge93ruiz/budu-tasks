import Link from "next/link";

export default function IconButton({
    className = "",
    isLoading = false,
    icon,
    ...props
}: {
    className?: string;
    isLoading?: boolean;
    icon: React.ReactNode;
    [key: string]: any;
}) {
    const Component = props.href ? Link : "button";

    return (
        <Component
            className={`cursor-pointer rounded-full border border-solid transition-colors flex items-center justify-center h-9 w-9 border-border hover:border-foreground disabled:opacity-50 ${className}`}
            {...props}
            {...(props.href && { href: props.href })}
            disabled={isLoading}
        >
            {icon}
        </Component>
    );
}
