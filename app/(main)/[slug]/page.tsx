import { currency, EPhrases } from "@/lib/constants";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { EButtonLabel, TProduct } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Metadata for Google and Яндекс
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: id } = await params;
  try {
    const products = await getLocalData<TProduct[]>("products");
    const product = products.find((p) => p.id === id);

    if (!product) return {};

    return {
      title: `${product.title} — Заказать под ключ`,
      description: product.description.slice(0, 160), // Trim the SEO description to the recommended length
    };
  } catch {
    return { title: "Страница услуги" };
  }
}

const ItemPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug: id } = await params;

  const PRODUCTS = await getLocalData<TProduct[]>("products");
  const product = PRODUCTS.find((product) => product.id === id);
  if (!product) {
    notFound();
  }

  return (
    <main
      itemScope
      itemType="https://schema.org"
      className="min-h-screen bg-slate-50/50 py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              <Image
                src={`/products/${id}.webp`}
                alt={product.title}
                fill
                priority
                itemProp="image"
                className="object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {EPhrases.ABOUT_PRODUCT}
                </h2>
                <p
                  itemProp="description"
                  className="text-slate-600 leading-relaxed text-base md:text-lg"
                >
                  {product.description}
                </p>
              </div>

              {product.extendedDescription.map((section, index) => (
                <div key={index} className="border-t border-slate-100 pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {section.subtitle}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <h1
                  itemProp="name"
                  className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
                >
                  {product.title}
                </h1>

                <div
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org"
                  className="inline-flex items-baseline gap-2 bg-slate-50 px-4 py-2 rounded-2xl mb-6"
                >
                  <meta itemProp="priceCurrency" content={currency} />
                  <meta itemProp="availability" content="https://schema.org" />
                  <span
                    itemProp="price"
                    content={product.price.toString()}
                    className="text-3xl font-black text-slate-900 tracking-tight"
                  >
                    {product.price}
                  </span>
                  <span className="text-lg font-bold text-slate-500">
                    {currency}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {EPhrases.WHAT_IS_INCLUDED}:
                  </h3>
                  <ul className="space-y-3">
                    {product.advantages.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base text-slate-700"
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-(--brand-blue) text-xs font-bold mt-0.5"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/order?product=${id}`}
                aria-label={`Заказать услугу: ${product.title}`}
                className="btn-link-primary btn-lg"
              >
                {EButtonLabel.ORDER_DEVELOPMENT}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemPage;

// Next.js will pre-compile the HTML for all IDs JSON.
export async function generateStaticParams() {
  const products = await getLocalData<TProduct[]>("products");

  return products.map((product) => ({
    slug: product.id,
  }));
}
