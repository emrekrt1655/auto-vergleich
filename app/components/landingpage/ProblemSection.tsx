import { useTranslations } from "next-intl";
import { landingSecondary } from "@/app/styles/classes";

export default function ProblemSection() {
  const t = useTranslations("Components.LandingPage.problemSection");
  const { textColor, wrapper, titleText } = landingSecondary;

  return (
    <section className={`${wrapper}`}>
      <h2 className={`${titleText}`}>{t("title")}</h2>
      <p className={`${textColor} max-w-2xl mx-auto `}>{t("description")}</p>
    </section>
  );
}
