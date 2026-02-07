export default function InputError({ message }: { message: string | string[] }) {
    if (!message) return null;

    return <div className="text-danger">{Array.isArray(message) ? message.join(", ") : message}</div>;
}
