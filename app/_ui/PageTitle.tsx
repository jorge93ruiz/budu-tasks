export default function PageTitle({ title }: { title: string }) {
    return (
        <>
            <title>{title}</title>
            <h1 className="text-2xl font-bold">{title}</h1>
        </>
    );
}
