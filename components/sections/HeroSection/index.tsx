import Image from "next/image";

interface HeroSection {
  title: string;
  additionalTitle?: string;
  description: string;
  mode: "about" | "services";
  bage: string;
}

export const HeroSection = ({
  title,
  additionalTitle,
  description,
  mode,
  bage,
}: HeroSection) => {
  return (
    <section
      className="container mx-auto px-6 pt-6 pb-16 lg:pt-12 lg:pb-24"
      aria-labelledby="about-hero-title"
    >
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            {bage}
          </span>

          <h1
            id="about-hero-title"
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            {title}
            {additionalTitle && (
              <span className="block text-blue-600">{additionalTitle}</span>
            )}
          </h1>

          {description && (
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute -inset-8 rounded-full bg-blue-100 blur-3xl opacity-50" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src={`/images/${mode}.webp`}
              alt={bage}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
