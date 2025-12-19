import { useTranslations } from "next-intl";
import { landingSecondary } from "@/app/styles/classes";

export default function TestimonialsSection() {
  const t = useTranslations("Components.LandingPage.testimonialsSection");
  const { wrapper, titleText, featuresWrapper, textColor } = landingSecondary;

  const testimonials = t.raw("testimonials") as Array<{
    quote: string;
    name: string;
    role: string;
  }>;

  return (
    <section className={`${wrapper}`}>
      <h2 className={`${titleText}`}>{t("title")}</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testi, i) => (
          <div key={i} className={`${featuresWrapper}`}>
            <p className={`${textColor} mb-4 italic`}>“{testi.quote}”</p>
            <p className="font-semibold text-brand-primary">{testi.name}</p>
            <p className="text-sm text-gray-500">{testi.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
