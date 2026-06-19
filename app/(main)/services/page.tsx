import { Metadata } from "next";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { IData } from "@/lib/types";
import { ServiceCart } from "./ServiceCart";
import { serviceIconById } from "@/lib/data-utils/serviceIconById";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { CustomerForm } from "@/components/forms/CustomerForm";
import { BASE_URL, LOGO } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const title = `Услуги веб-студии | Разработка сайтов на заказ | ${LOGO}`;
  const description =
    "Разработка сайтов любой сложности: лендинги, интернет-магазины, корпоративные порталы. Полный цикл под ключ с SEO оптимизацией и техподдержкой.";
  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/services`,
    },
    openGraph: {
      // link on social networks (tg)
      title: title,
      description: description,
      url: `${BASE_URL}/services`,
      siteName: `${LOGO}`,
      images: [
        {
          url: `${BASE_URL}/images/about-team.webp`,
          width: 1200,
          height: 630,
          alt: `Услуги веб-студии`,
        },
      ],
      locale: "ru_BY",
      type: "website",
    },
  };
}

const ServicesPage = async () => {
  const { OUR_SERVICES, MODALS } = await getLocalData<IData>("app-data");
  const { TITLE, SUBTITLE, SERVICES } = OUR_SERVICES;
  const { GET_IN_TOUCH_SUCCESS, GET_IN_TOUCH_ERROR } = MODALS;

  return (
    <div
      className="py-20 bg-gray-50"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
            itemProp="headline"
          >
            {TITLE}
          </h1>
          <h2 className="sr-only">Наши услуги по разработке сайтов</h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            itemProp="description"
          >
            {SUBTITLE}
          </p>

          <div
            className="w-24 h-1 bg-(--brand-blue) mx-auto mt-6 rounded-full"
            aria-hidden="true"
          ></div>
        </div>

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
              delay={index * 100}
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
      </div>

      <div className="container mx-auto px-4 max-w-8xl flex justify-center mt-8">
        <CustomerForm
          successModalData={GET_IN_TOUCH_SUCCESS}
          errorModalData={GET_IN_TOUCH_ERROR}
        />
      </div>
    </div>
  );
};

export default ServicesPage;
