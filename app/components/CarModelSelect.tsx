"use client";
import { useCarModels } from "@/hooks/useCarInfos";

type CarModelSelectProps = {
  brand: string;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export const CarModelSelect: React.FC<CarModelSelectProps> = ({
  brand,
  setForm,
}) => {
  const { data: models, isLoading, isError } = useCarModels(brand);

  if (isLoading) return <p className="text-gray-500">Lade Modelle...</p>;
  if (isError)
    return <p className="text-red-500">Fehler beim Laden der Modellen</p>;

  
  return (
    <select
      className="border rounded-md p-2"
      onChange={(e) => setForm((prev) => ({ ...prev, model: e.target.value }))}
    >
      <option value="">Modelle wählen</option>
      {models?.map((model) => (
        <option key={model.id} value={model.name}>
          {model.name}
        </option>
      ))}
    </select>
  );
};
