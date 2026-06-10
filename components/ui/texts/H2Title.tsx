export const H2Title = ({
  id,
  title,
  centered = false,
}: {
  id: string;
  title: string;
  centered?: boolean;
}) => {
  return (
    <h2
      id={id}
      className={`text-3xl md:text-5xl font-extrabold bg-linear-to-r 
         from-slate-900 to-(--brand-blue-hover) bg-clip-text
         text-transparent mb-4 ${centered ? "text-center" : ""}`}
      itemProp="name"
    >
      {title}
    </h2>
  );
};
