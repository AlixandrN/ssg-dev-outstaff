"use client";
import { useTranslation } from "@/hooks/useTranslation";

export const IDESection = () => {
  const { t: tCommon } = useTranslation("COMMON");

  return (
    <div className="mockup-code mx-auto w-1/2 h-50">
      <pre data-prefix="$">
        <code>{tCommon("hello")}</code>
      </pre>
    </div>
  );
};
