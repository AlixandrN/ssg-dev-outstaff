export default async function ItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: id } = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Страница товара: {id}</h1>
    </div>
  );
}
