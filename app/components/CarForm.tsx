"use client";
import { useState } from "react";
import { CarBrandSelect } from "./CarBrandSelect";
import { CarModelSelect } from "./CarModelSelect";

export default function CarForm() {
  const [form, setForm] = useState({
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Marke</label>
        <CarBrandSelect setForm={setForm} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Marke</label>
        <CarModelSelect brand={form.brand} setForm={setForm} />
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
        <label className="block text-sm font-medium mb-1">
          Variante / Motor
        </label>
        <input
          type="text"
          name="variant"
          value={form.variant}
          onChange={handleChange}
          placeholder="z. B. 1.5 TSI DSG"
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
}
