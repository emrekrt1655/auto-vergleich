"use client";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CarSelect } from "./CarSelect";
import { carFormClasses } from "../styles/classes";
import {
  useCarBrands,
  useCarModels,
  useCarSubModels,
} from "@/hooks/useCarInfos";

export interface CarFormHandle {
  getFormData: () => typeof initialForm;
  setFormData: (data: typeof initialForm) => void;
}

interface CarFormProps {
  defaultValues?: Partial<typeof initialForm>;
}

const initialForm = {
  brand: "",
  model: "",
  year: "",
  variant: "",
  transmission: "",
  fuelType: "",
  consumption: "",
  km: "",
  inspectionDate: "",
  usageYears: "",
  annualKm: "",
  purchasePrice: "",
};

const CarForm = forwardRef<CarFormHandle, CarFormProps>(
  ({ defaultValues }, ref) => {
    const t = useTranslations("Components.CarForm");
    const { textColor, placeHolderColor } = carFormClasses;
    const [form, setForm] = useState(() => ({
      ...initialForm,
      ...defaultValues,
    }));

    useEffect(() => {
      if (defaultValues) {
        setForm((prev) => ({ ...prev, ...defaultValues }));
      }
    }, [defaultValues]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    useImperativeHandle(ref, () => ({
      getFormData: () => form,
      setFormData: (data: typeof initialForm) => {
        setForm(data);
      },
    }));

    return (
      <form className={`space-y-4`}>
        <div>
          <CarSelect
            label={t("labelMarke")}
            placeholder={t("labelMarkePlaceholder")}
            formKey="brand"
            hook={useCarBrands}
            getOptionLabel={(b) => b.name}
            getOptionValue={(b) => b.name}
            setForm={setForm}
          />
        </div>

        <div>
          <CarSelect
            label={t("labelModelle")}
            placeholder={t("labelModellePlaceholder")}
            formKey="model"
            hook={() => useCarModels(form.brand)}
            getOptionLabel={(m) => m.name}
            getOptionValue={(m) => m.name}
            setForm={setForm}
          />
        </div>

        <div>
          <CarSelect
            label={t("labelVariente")}
            placeholder={t("labelVarientePlaceholder")}
            formKey="variant"
            hook={() => useCarSubModels(form.brand, form.model)}
            getOptionLabel={(v) => v.submodel}
            getOptionValue={(v) => v.submodel}
            setForm={setForm}
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-1 ${textColor}`}>
            {t("baujahr")}
          </label>
          <input
            type="number"
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="2018"
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("getriebe")}
          </label>
          <select
            name="transmission"
            value={form.transmission}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">{t("getriebeOption")}</option>
            <option value="manuell">{t("manuell")}</option>
            <option value="automatik">{t("automatic")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("fuelType")}
          </label>
          <select
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">{t("fuelTypeOption")}</option>
            <option value="benzin">{t("fuelBenzin")}</option>
            <option value="diesel">{t("fuelDiesel")}</option>
            <option value="hybrid">{t("fuelHybrid")}</option>
            <option value="elektro">{t("fuelElectric")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("consumption")}
          </label>
          <input
            type="number"
            step="0.1"
            name="consumption"
            value={form.consumption}
            onChange={handleChange}
            placeholder={t("consumptionPlaceholder")}
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            KM
          </label>
          <input
            type="number"
            name="km"
            value={form.km}
            onChange={handleChange}
            placeholder="km"
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("inspectionDate")}
          </label>
          <input
            type="month"
            name="inspectionDate"
            value={form.inspectionDate}
            onChange={handleChange}
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("usageYears")}
          </label>
          <input
            type="number"
            name="usageYears"
            value={form.usageYears}
            onChange={handleChange}
            placeholder={t("usageYearsPlaceholder")}
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("annualKm")}{" "}
          </label>
          <input
            type="number"
            name="annualKm"
            value={form.annualKm}
            onChange={handleChange}
            placeholder={t("annualKmPlaceholder")}
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {t("purchasePrice")}{" "}
          </label>
          <input
            type="number"
            name="purchasePrice"
            value={form.purchasePrice}
            onChange={handleChange}
            placeholder={t("purchasePricePlaceholder")}
            className={`${placeHolderColor} w-full border rounded-md p-2`}
          />
        </div>
      </form>
    );
  }
);

CarForm.displayName = "CarForm";
export default CarForm;
