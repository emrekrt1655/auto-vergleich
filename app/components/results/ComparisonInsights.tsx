"use client";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  comparison: Record<string, string>;
}

export default function ComparisonInsights({ comparison }: Props) {
  const t = useTranslations("Components.Results.comparisonInsights");

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {t("title")}
      </h3>
      <ul className="space-y-2">
        {Object.entries(comparison).map(([key, value]) => (
          <li key={key} className="flex items-start gap-2 text-gray-700">
            <CheckCircle size={18} className="text-green-500 mt-0.5" />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
