"use client";
import { useCarBrands } from "@/hooks/useCarInfos";

type CarBrandSelectProps = {
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}

export const CarBrandSelect: React.FC<CarBrandSelectProps> = ({setForm}) => {
  const { data: brands, isLoading, isError } = useCarBrands();

  if (isLoading) return <p className="text-gray-500">Lade Marken...</p>;
  if (isError) return <p className="text-red-500">Fehler beim Laden der Marken</p>;


  return (
    <select className="border rounded-md p-2"
      onChange={(e) => setForm(prev => ({ ...prev, brand: e.target.value }))}
>
      <option value="">Marke wählen</option>
      {brands?.map((brand) => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ))}
    </select>
  );
}
