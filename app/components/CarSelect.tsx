"use client";
import { useTranslations } from "next-intl";

type CarSelectProps<T> = {
  label: string;
  placeholder: string;
  formKey: keyof FormState;
  hook: () => { data?: T[]; isLoading: boolean; isError: boolean };
  getOptionLabel: (item: T) => string;
  getOptionValue: (item: T) => string;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
};

export function CarSelect<T>({
  label,
  placeholder,
  formKey,
  hook,
  getOptionLabel,
  getOptionValue,
  setForm,
}: CarSelectProps<T>) {
  const t = useTranslations("Components.CarSelect")
  const { data, isLoading, isError } = hook();

  if (isLoading) return <p className="text-gray-500">{t("loading")} {label}...</p>;
  if (isError)
    return <p className="text-red-500">{t("error")} {label}</p>;

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        className="border rounded-md p-2 w-full"
        onChange={(e) =>
          setForm((prev) => ({ ...prev, [formKey]: e.target.value }))
        }
      >
        <option value="">{placeholder}</option>
        {data?.map((item, i) => (
          <option key={i} value={getOptionValue(item)}>
            {getOptionLabel(item)}
          </option>
        ))}
      </select>
    </div>
  );
}
