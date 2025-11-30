"use client";
import { useTranslations } from "next-intl";

export default function ExampleOutputSection() {
  const t = useTranslations("LandingPage.ExampleOutputSection");

  return (
    <section className="py-20 bg-(--background) text-(--foreground) text-center px-6">
      <h2 className="text-3xl font-bold mb-10">{t("title")}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        {t("subtitle")}
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-full md:w-1/2 bg-gray-50 dark:bg-[#1b1b1b] p-6 rounded-xl shadow-md">
          <div className="text-gray-400">{t("chartPlaceholder")}</div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-50 dark:bg-[#1b1b1b] p-6 rounded-xl shadow-md">
          <div className="text-gray-400">{t("tablePlaceholder")}</div>
        </div>
      </div>
    </section>
  );
}