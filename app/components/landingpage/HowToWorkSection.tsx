import { useTranslations } from "next-intl";
import { landingPrimary } from "@/app/styles/classes";

export default function HowItWorksSection() {
  const t = useTranslations("Components.LandingPage.howItWorksSection");
  const { wrapperColor, featuresWrapperColor, titleText, textColor } =
    landingPrimary;

  const steps = t.raw("steps") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className={`${wrapperColor} py-20`}>
      <h2 className={`${titleText} text-3xl font-bold text-center mb-12`}>
        {t("title")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`p-6 ${featuresWrapperColor} rounded-xl shadow-md text-center hover:shadow-lg transition-all`}
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">{s.title}</h3>
            <p className={`${textColor} text-sm`}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
