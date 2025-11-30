"use client";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("LandingPage.TestimonialsSection");

  const testimonials = [
    { 
      quote: t("testimonial1.quote"), 
      name: t("testimonial1.name"), 
      role: t("testimonial1.role") 
    },
    { 
      quote: t("testimonial2.quote"), 
      name: t("testimonial2.name"), 
      role: t("testimonial2.role") 
    },
    { 
      quote: t("testimonial3.quote"), 
      name: t("testimonial3.name"), 
      role: t("testimonial3.role") 
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-brand-neutral mb-10">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="p-6 bg-white dark:bg-[#1b1b1b] rounded-xl shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-brand-primary">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}