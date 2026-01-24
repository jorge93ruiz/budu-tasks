export default function Spinner({ className = "" }: { className?: string }) {
    return <span className={"w-5 h-5 border-2 rounded-full border-y-transparent! animate-spin " + className}></span>;
}
