import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("Components.LandingPage.testimonialsSection");

  const testimonials = t.raw("testimonials") as Array<{
    quote: string;
    name: string;
    role: string;
  }>;

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-brand-neutral mb-10">
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testi, i) => (
          <div key={i} className="p-6 bg-white dark:bg-[#1b1b1b] rounded-xl shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
              “{testi.quote}”
            </p>
            <p className="font-semibold text-brand-primary">
              {testi.name}
            </p>
            <p className="text-sm text-gray-500">
              {testi.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}