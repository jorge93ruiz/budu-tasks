import Link from "next/link";
import Spinner from "./Spinner";

export default function Button({
    href = null,
    children,
    hierarchy = "quaternary",
    className = "",
    isLoading = false,
    ...props
}: {
    href?: string | null;
    children: React.ReactNode;
    hierarchy?: "primary" | "secondary" | "tertiary" | "quaternary";
    className?: string;
    isLoading?: boolean;
    [key: string]: any;
}) {
    const primarySecondaryAndTertiaryBaseClasses =
        "cursor-pointer rounded-xl border border-solid transition-colors flex items-center justify-center gap-2 font-medium h-9 px-4 sm:px-5 sm:w-auto";
    const quaternaryBaseClasses = "cursor-pointer transition-colors font-medium text-sm sm:text-base";

    const styleClasses =
        hierarchy === "primary"
            ? primarySecondaryAndTertiaryBaseClasses +
              " border-transparent bg-foreground text-background hover:bg-neutral-600 dark:hover:bg-neutral-400"
            : hierarchy === "secondary"
              ? primarySecondaryAndTertiaryBaseClasses +
                " border-neutral-800 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-transparent"
              : hierarchy === "tertiary"
                ? primarySecondaryAndTertiaryBaseClasses +
                  " border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900"
                : quaternaryBaseClasses;

    return href ? (
        <Link href={href} className={`${styleClasses} ${className}`} {...props}>
            {children}
        </Link>
    ) : (
        <button className={`${styleClasses} ${className}`} {...props} disabled={isLoading}>
            {isLoading ? (
                <Spinner className={hierarchy === "primary" ? "border-background" : "border-foreground"} />
            ) : (
                children
            )}
        </button>
    );
}
