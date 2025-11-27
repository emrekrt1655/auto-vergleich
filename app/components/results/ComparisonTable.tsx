"use client";
interface Props {
  cars: {
    car1: Record<string, number>;
    car2: Record<string, number>;
  };
}

export default function ComparisonTable({ cars }: Props) {
  const fields = [
    { key: "fuelCostEUR", label: "Kraftstoffkosten (€)" },
    { key: "fuelConsumptionL", label: "Verbrauch (L)" },
    { key: "insuranceCostEUR", label: "Versicherung (€)" },
    { key: "maintenanceCostEUR", label: "Wartung (€)" },
    { key: "tuvCostEUR", label: "TÜV (€)" },
    { key: "estimatedResaleValueEUR", label: "Wiederverkaufswert (€)" },
    { key: "totalCostEUR", label: "Gesamtkosten (€)" },
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-sm rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Kostenübersicht
      </h3>
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-2">Kostenpunkt</th>
            <th className="p-2 text-blue-600 font-medium">Fahrzeug 1</th>
            <th className="p-2 text-orange-600 font-medium">Fahrzeug 2</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.key} className="border-b last:border-none">
              <td className="p-2 font-medium text-gray-700">{field.label}</td>
              <td className="p-2 text-gray-800">{cars.car1[field.key]} </td>
              <td className="p-2 text-gray-800">{cars.car2[field.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
