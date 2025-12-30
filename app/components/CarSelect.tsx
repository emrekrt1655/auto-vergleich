"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

type CarSelectProps<T> = {
  label: string;
  placeholder: string;
  formKey: keyof FormState;
  hook: () => { data?: T[]; isLoading: boolean; isError: boolean };
  getOptionLabel: (item: T) => string;
  getOptionValue: (item: T) => string;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  allowCustom?: boolean;
};

export function CarSelect<T>({
  label,
  placeholder,
  formKey,
  hook,
  getOptionLabel,
  getOptionValue,
  setForm,
  allowCustom = true,
}: CarSelectProps<T>) {
  const t = useTranslations("Components.CarSelect");
  const { data, isLoading, isError } = hook();
  
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  if (isLoading) return <p className="text-gray-500">{t("loading")} {label}...</p>;
  if (isError) return <p className="text-red-500">{t("error")} {label}</p>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowDropdown(true);
    setForm((prev) => ({ ...prev, [formKey]: value }));
  };

  const handleSelectOption = (value: string) => {
    setInputValue(value);
    setShowDropdown(false);
    setForm((prev) => ({ ...prev, [formKey]: value }));
  };

  const filteredData = data?.filter((item) =>
    getOptionLabel(item).toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-1">{label}</label>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        placeholder={placeholder}
        className="border rounded-md p-2 w-full"
      />

      {showDropdown && filteredData && filteredData.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
          {filteredData.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSelectOption(getOptionValue(item))}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {getOptionLabel(item)}
            </li>
          ))}
        </ul>
      )}
      
      {allowCustom && inputValue && !filteredData?.find(item => getOptionValue(item) === inputValue) && (
        <p className="text-xs text-gray-500 mt-1">
          {t("customValueWillBeUsed")}: "{inputValue}"
        </p>
      )}
    </div>
  );
}