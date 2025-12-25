"use client";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { resultClasses } from "@/app/styles/classes";

interface Props {
  comparison: Record<string, string>;
}

export default function ComparisonInsights({ comparison }: Props) {
  const t = useTranslations("Components.Results.comparisonInsights");
  const { wrapperColor, titleColor, textColorPrimary } = resultClasses;

  return (
    <div className={`${wrapperColor}`}>
      <h3 className={`${titleColor}`}>{t("title")}</h3>
      <ul className="space-y-2">
        {Object.entries(comparison).map(([key, value]) => (
          <li
            key={key}
            className={`${textColorPrimary} flex items-start gap-2`}
          >
            <CheckCircle size={18} className="text-green-500 mt-0.5" />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
