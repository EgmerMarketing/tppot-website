export default function ReaderContent({ title }: { title: string }) {
  return (
    <article className="sr-only">
      <h1>{title}</h1>
    </article>
  );
}
