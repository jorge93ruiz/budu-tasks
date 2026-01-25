export default function Checkbox({
    id,
    label,
    ...props
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center gap-2" htmlFor={id}>
            <input id={id} type="checkbox" {...props} className="hidden peer" />
            <span className="flex justify-center items-center w-5 h-5 border border-solid border-border rounded-md peer-focus:ring-4 peer-focus:ring-ring-focus peer-checked:after:content-[''] peer-checked:after:bg-foreground peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:rounded-sm"></span>
            <span className="text font-medium text-border peer-checked:text-label">{label}</span>
        </label>
    );
}
