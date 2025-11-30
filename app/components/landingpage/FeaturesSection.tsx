"use client";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("LandingPage.FeaturesSection");

  const features = [
    { 
      icon: "🇩🇪", 
      title: t("feature1.title"), 
      desc: t("feature1.description") 
    },
    { 
      icon: "🤖", 
      title: t("feature2.title"), 
      desc: t("feature2.description") 
    },
    { 
      icon: "📈", 
      title: t("feature3.title"), 
      desc: t("feature3.description") 
    },
    { 
      icon: "💡", 
      title: t("feature4.title"), 
      desc: t("feature4.description") 
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-brand-neutral mb-10">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white dark:bg-[#1b1b1b] rounded-xl text-center shadow-md">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}