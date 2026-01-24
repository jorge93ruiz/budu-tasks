export default function Checkbox({ id, label, ...props }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center gap-2" htmlFor={id}>
            <input id={id} type="checkbox" {...props} className="hidden peer" />
            <span className="flex justify-center items-center w-5 h-5 border border-solid dark:border-neutral-800 rounded peer-focus:ring-4 peer-focus:dark:ring-neutral-800 peer-checked:after:content-[''] peer-checked:after:bg-foreground peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:rounded-xs "></span>
            <span className="text font-medium dark:text-neutral-600 text-neutral-800 peer-checked:dark:text-neutral-500 peer-checked:text-neutral-900">
                {label}
            </span>
        </label>
    );
}
