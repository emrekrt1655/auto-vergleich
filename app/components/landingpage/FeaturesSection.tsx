import { useTranslations } from "next-intl";
import { landingSecondary } from "@/app/styles/classes";

export default function FeaturesSection() {
  const t = useTranslations("Components.LandingPage.featuresSection");
  const {wrapper, titleText, featuresWrapper, textColor} = landingSecondary

  const features = t.raw("features") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className={`${wrapper}`}>
      <h2 className={`${titleText}`}>
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`${featuresWrapper}`}
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">
              {f.title}
            </h3>
            <p className={`${textColor} text-sm`}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}