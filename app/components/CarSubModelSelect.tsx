"use client";
import { useCarSubModels } from "@/hooks/useCarInfos";

type CarSubModelSelectProps = {
  brand: string;
  model:string
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export const CarSubModelSelect: React.FC<CarSubModelSelectProps> = ({
  brand,
  model,
  setForm,
}) => {
  const { data: submodels, isLoading, isError } = useCarSubModels(brand, model);

  if (isLoading) return <p className="text-gray-500">Lade Submodelle...</p>;
  if (isError)
    return <p className="text-red-500">Fehler beim Laden der Modellen</p>;

  
  return (
    <select
      className="border rounded-md p-2"
      onChange={(e) => setForm((prev) => ({ ...prev, variant: e.target.value }))}
    >
      <option value="">Modelle wählen</option>
      {submodels?.map((sub) => (
        <option key={sub.id} value={sub.submodel}>
          {sub.submodel}
        </option>
      ))}
    </select>
  );
};
