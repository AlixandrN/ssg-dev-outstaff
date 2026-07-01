import { Metadata } from "next";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { IData } from "@/lib/types";
import { ServiceCart } from "./ServiceCart";
import { serviceIconById } from "@/lib/data-utils/serviceIconById";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import {
  BASE_URL,
  EPhrases,
  EPublicRoutes,
  LOGO,
  ROUTE_LABELS,
} from "@/lib/constants";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = `${EPhrases.SERVICES_WEB_STUDIO} | ${EPhrases.SEO_NEXTJS} | ${LOGO}`;
  const description = EPhrases.SEO_SERVICES;
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/services`,
    },
    openGraph: {
      // link on social networks (tg)
      title,
      description,
      url: `${BASE_URL}/services`,
      siteName: `${LOGO}`,
      images: [
        {
          url: `${BASE_URL}/images/services.webp`,
          width: 1200,
          height: 630,
          alt: `${EPhrases.SERVICES_WEB_STUDIO} ${LOGO}`,
        },
      ],
      locale: "ru_BY",
      type: "website",
    },
  };
};

const ServicesPage = async () => {
  const { OUR_SERVICES, CTA } = await getLocalData<IData>("app-data");
  const { title, description, SERVICES } = OUR_SERVICES;

  return (
    <div
      className="bg-white"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      {OUR_SERVICES && (
        <HeroSection
          title={title}
          description={description}
          mode="services"
          bage={`${ROUTE_LABELS[EPublicRoutes.SERVICES]} ${LOGO}`}
        />
      )}

      <section
        className="container mx-auto px-6 pb-24"
        aria-labelledby="reasons-title"
      >
        {/* SEO */}
        <h2 id="reasons-title" className="sr-only">
          {EPhrases.SERVICES_WEB_STUDIO}
        </h2>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {SERVICES.map(({ id, title, description }, index) => (
            <ScrollAnimationBox
              key={id}
              triggerOnce={true}
              rootMargin="50px"
              animationType="zoom"
              delay={index * 80}
            >
              <div
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                <ServiceCart
                  title={title}
                  description={description}
                  icon={serviceIconById[id]}
                />
                <meta itemProp="position" content={String(index + 1)} />
              </div>
            </ScrollAnimationBox>
          ))}
        </ul>
      </section>

      <ScrollAnimationBox
        key={"id"}
        triggerOnce={true}
        rootMargin="50px"
        animationType="slide-left"
        delay={500}
      >
        {CTA && <CTASection cTAData={CTA} />}
      </ScrollAnimationBox>
    </div>
  );
};

export default ServicesPage;
