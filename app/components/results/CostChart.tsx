"use client";
import { useTranslations } from "next-intl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Props {
  cars: {
    car1: Record<string, number>;
    car2: Record<string, number>;
  };
}

export default function CostChart({ cars }: Props) {
  const t = useTranslations("Components.Results.costChart");

  const data = [
    { name: t("labels.fuel"), car1: cars.car1.fuelCostEUR, car2: cars.car2.fuelCostEUR },
    { name: t("labels.insurance"), car1: cars.car1.insuranceCostEUR, car2: cars.car2.insuranceCostEUR },
    { name: t("labels.maintenance"), car1: cars.car1.maintenanceCostEUR, car2: cars.car2.maintenanceCostEUR },
    { name: t("labels.tuv"), car1: cars.car1.tuvCostEUR, car2: cars.car2.tuvCostEUR },
    { name: t("labels.total"), car1: cars.car1.totalCostEUR, car2: cars.car2.totalCostEUR },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {t("title")}
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="car1"
            fill="#3b82f6"
            name={t("legend.car1")}
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="car2"
            fill="#f97316"
            name={t("legend.car2")}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
