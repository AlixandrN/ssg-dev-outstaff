"use client";

import { CustomerForm } from "@/components/forms/CustomerForm";
import { useTranslation } from "@/hooks/useTranslation";

export const GetInTouchSection = () => {
  const { t: tHome } = useTranslation("HOME");

  return (
    <section className="section-style justify-around">
      <h1 className="text-3xl font-bold">{tHome("GET_IN_TOUCH")}</h1>
      <CustomerForm />
    </section>
  );
};
