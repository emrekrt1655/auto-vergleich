import { Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";
import { resultClasses } from "@/app/styles/classes";

interface Props {
  summary: string;
  recommendation: string;
}

export default function ResultsSummaryCard({ summary, recommendation }: Props) {
  const t = useTranslations("Components.Results.resultsSummaryCard");
  const { wrapperColor, titleColor, textColorPrimary, textColorSecondary } =
    resultClasses;
  return (
    <div className={`${wrapperColor}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500 dark:bg-blue-600 rounded-full text-white">
          <Lightbulb size={24} />
        </div>
        <div>
          <h2 className={`${titleColor}`}>{t("title")}</h2>
          <p className={`${textColorPrimary}`}>{summary}</p>
          <p className={`${textColorSecondary}`}>{recommendation}</p>
        </div>
      </div>
    </div>
  );
}
