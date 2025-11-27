"use client";
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
  const data = [
    { name: "Fuel", car1: cars.car1.fuelCostEUR, car2: cars.car2.fuelCostEUR },
    { name: "Insurance", car1: cars.car1.insuranceCostEUR, car2: cars.car2.insuranceCostEUR },
    { name: "Maintenance", car1: cars.car1.maintenanceCostEUR, car2: cars.car2.maintenanceCostEUR },
    { name: "TÜV", car1: cars.car1.tuvCostEUR, car2: cars.car2.tuvCostEUR },
    { name: "Total", car1: cars.car1.totalCostEUR, car2: cars.car2.totalCostEUR },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Kostenvergleich (in €)
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="car1" fill="#3b82f6" name="Fahrzeug 1" radius={[6, 6, 0, 0]} />
          <Bar dataKey="car2" fill="#f97316" name="Fahrzeug 2" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
