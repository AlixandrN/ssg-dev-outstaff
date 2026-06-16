export const H2Title = ({
  id,
  title,
  centered = false,
  lightMode = false,
}: {
  id: string;
  title: string;
  centered?: boolean;
  lightMode?: boolean;
}) => {
  return (
    <h2
      id={id}
      className={`text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent mb-4
         ${centered ? "text-center" : ""}
         bg-size-[200%_auto] animate-[wave_6s_ease_infinite]
         ${
           lightMode
             ? "bg-linear-to-r from-blue-100 via-(--brand-blue) to-blue-100"
             : "bg-linear-to-r from-slate-900 via-(--brand-blue-hover) to-slate-900"
         }
      `}
      itemProp="name"
    >
      {title}
    </h2>
  );
};
