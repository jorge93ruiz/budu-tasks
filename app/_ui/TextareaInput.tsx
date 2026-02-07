import InputError from "./InputError";

export default function TextareaInput({
    label,
    error = "",
    ...props
}: {
    label: string;
    error?: string | string[];
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-label" htmlFor={props.id}>
                {label}
            </label>
            <textarea
                className={
                    "border rounded-xl focus:outline-none focus:ring-4 focus:ring-ring-focus focus:border-border-focus hover:bg-input-hover px-4 py-3 min-h-9" +
                    (error ? " border-danger" : " border-border")
                }
                {...props}
            ></textarea>
            <InputError message={error} />
        </div>
    );
}
