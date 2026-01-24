export default function TextInput({
    label,
    type = "text",
    onChange,
    ...props
}: {
    label: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium dark:text-neutral-700 text-neutral-800">{label}</label>
            <input
                type={type}
                onChange={onChange}
                className="border rounded-xl focus:outline-none focus:ring-4 dark:focus:ring-neutral-800 dark:border-neutral-800 focus:dark:border-neutral-600 dark:hover:bg-neutral-900 px-4 py-3 h-9"
                {...props}
            />
        </div>
    );
}
