"use client";
import { useTranslations } from "next-intl";

export default function HowItWorksSection() {
  const t = useTranslations("LandingPage.HowItWorksSection");

  const steps = [
    { 
      icon: "🚗", 
      title: t("step1.title"), 
      desc: t("step1.description") 
    },
    { 
      icon: "📅", 
      title: t("step2.title"), 
      desc: t("step2.description") 
    },
    { 
      icon: "🤖", 
      title: t("step3.title"), 
      desc: t("step3.description") 
    },
    { 
      icon: "📊", 
      title: t("step4.title"), 
      desc: t("step4.description") 
    },
  ];

  return (
    <section className="py-20 bg-(--background) text-(--foreground)">
      <h2 className="text-3xl font-bold text-center mb-12">{t("title")}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-[#1b1b1b] rounded-xl shadow-md text-center hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}