export default function DateInput({
    label,
    ...props
}: {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-label" htmlFor={props.id}>
                {label}
            </label>
            <input
                type="date"
                className="border rounded-xl focus:outline-none focus:ring-4 focus:ring-ring-focus border-border focus:border-border-focus hover:bg-input-hover px-4 py-3 h-9"
                {...props}
            />
        </div>
    );
}
