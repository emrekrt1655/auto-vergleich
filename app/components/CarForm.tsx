"use client";
import { useState, useImperativeHandle, forwardRef } from "react";
import { CarSelect } from "./CarSelect";
import {
  useCarBrands,
  useCarModels,
  useCarSubModels,
} from "@/hooks/useCarInfos";

export interface CarFormHandle {
  getFormData: () => typeof initialForm;
}

const initialForm = {
  brand: "",
  model: "",
  year: "",
  variant: "",
  transmission: "",
  fuelType: "",
  consumption: "",
  inspectionDate: "",
  usageYears: "",
  annualKm: "",
  purchasePrice: "",
};

const CarForm = forwardRef<CarFormHandle>((_, ref) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useImperativeHandle(ref, () => ({
    getFormData: () => form,
  }));

  return (
    <form className="space-y-4">
      <div>
        <CarSelect
          label="Marke"
          placeholder="Marke wählen"
          formKey="brand"
          hook={useCarBrands}
          getOptionLabel={(b) => b.name}
          getOptionValue={(b) => b.name}
          setForm={setForm}
        />
      </div>

      <div>
        <CarSelect
          label="Modelle"
          placeholder="Modelle wählen"
          formKey="model"
          hook={() => useCarModels(form.brand)}
          getOptionLabel={(m) => m.name}
          getOptionValue={(m) => m.name}
          setForm={setForm}
        />
      </div>

      <div>
        <CarSelect
          label="Variente"
          placeholder="Variente wählen"
          formKey="variant"
          hook={() => useCarSubModels(form.brand, form.model)}
          getOptionLabel={(v) => v.submodel}
          getOptionValue={(v) => v.submodel}
          setForm={setForm}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Baujahr</label>
        <input
          type="number"
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="z. B. 2018"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Getriebe</label>
        <select
          name="transmission"
          value={form.transmission}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        >
          <option value="">Auswählen</option>
          <option value="manuell">Manuell</option>
          <option value="automatik">Automatik</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Kraftstoffart</label>
        <select
          name="fuelType"
          value={form.fuelType}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        >
          <option value="">Auswählen</option>
          <option value="benzin">Benzin</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Hybrid</option>
          <option value="elektro">Elektro</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Verbrauch (l / 100 km)
        </label>
        <input
          type="number"
          step="0.1"
          name="consumption"
          value={form.consumption}
          onChange={handleChange}
          placeholder="z. B. 6.2"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Letzte HU (Monat / Jahr)
        </label>
        <input
          type="month"
          name="inspectionDate"
          value={form.inspectionDate}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Geplante Nutzungsdauer (Jahre)
        </label>
        <input
          type="number"
          name="usageYears"
          value={form.usageYears}
          onChange={handleChange}
          placeholder="z. B. 5"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Jährliche Laufleistung (km)
        </label>
        <input
          type="number"
          name="annualKm"
          value={form.annualKm}
          onChange={handleChange}
          placeholder="z. B. 15000"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Kaufpreis (€)</label>
        <input
          type="number"
          name="purchasePrice"
          value={form.purchasePrice}
          onChange={handleChange}
          placeholder="z. B. 25000"
          className="w-full border rounded-md p-2"
        />
      </div>
    </form>
  );
});

CarForm.displayName = "CarForm";
export default CarForm;
