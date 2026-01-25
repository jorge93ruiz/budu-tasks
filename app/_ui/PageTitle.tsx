export default function PageTitle({ title, onlyMeta }: { title: string; onlyMeta?: boolean }) {
    return (
        <>
            <title>budu | {title}</title>
            {!onlyMeta && <h1 className="text-2xl font-bold">{title}</h1>}
        </>
    );
}
