"use client";
import { resultClasses } from "@/app/styles/classes";
import { useTranslations } from "next-intl";

interface Props {
  cars: {
    car1: Record<string, number>;
    car2: Record<string, number>;
  };
}

export default function ComparisonTable({ cars }: Props) {
  const t = useTranslations("Components.Results.comparisonTable");
  const { wrapperColor, titleColor, textColorPrimary, textColorSecondary } =
    resultClasses;

  const fields = [
    { key: "fuelCostEUR", label: t("fields.fuelCostEUR") },
    { key: "fuelConsumptionL", label: t("fields.fuelConsumptionL") },
    { key: "insuranceCostEUR", label: t("fields.insuranceCostEUR") },
    { key: "maintenanceCostEUR", label: t("fields.maintenanceCostEUR") },
    { key: "tuvCostEUR", label: t("fields.tuvCostEUR") },
    {
      key: "estimatedResaleValueEUR",
      label: t("fields.estimatedResaleValueEUR"),
    },
    { key: "totalCostEUR", label: t("fields.totalCostEUR") },
  ];

  return (
    <div className={`${wrapperColor}`}>
      <h3 className={`${titleColor}`}>{t("title")}</h3>

      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr className={`${titleColor} border-b`}>
            <th className="p-2">{t("headers.costItem")}</th>
            <th className="p-2 text-blue-600 dark:text-blue-300 font-medium">
              {t("headers.car1")}
            </th>
            <th className="p-2 text-orange-600 dark:text-orange-300 font-medium">
              {t("headers.car2")}
            </th>
          </tr>
        </thead>

        <tbody>
          {fields.map((field) => (
            <tr key={field.key} className="border-b last:border-none">
              <td className={`${textColorSecondary} py-2 font-medium`}>
                {field.label}
              </td>
              <td className={`${textColorPrimary} py-2`}>
                {cars.car1[field.key]}
              </td>
              <td className={`${textColorPrimary} py-2`}>
                {cars.car2[field.key]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
