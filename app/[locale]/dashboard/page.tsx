"use client";
import CarForm, { CarFormHandle } from "@/app/components/CarForm";
import { useContext, useRef, useState } from "react";
import { ToastContext } from "@/app/(context)/toastContext";
import Results from "@/app/components/results/Results";
import mockData from "@/data/aiModelMockData.json" assert { type: "json" };

export default function DashboardPage() {
  const { setToast } = useContext(ToastContext);

  const car1Ref = useRef<CarFormHandle>(null);
  const car2Ref = useRef<CarFormHandle>(null);
  const [resultData, setResultData] = useState<any>(null);

  const handleCompare = async () => {
    const car1 = car1Ref.current?.getFormData();
    const car2 = car2Ref.current?.getFormData();

    if (!car1 || !car2) {
      setToast({ message: "Bitte beide Fahrzeuge ausfüllen!", type: "error" });
      return;
    }

    try {
      setResultData(mockData)
    } catch (error) {
      setToast({ message: "Fehler beim Vergleichen der Fahrzeuge.", type: "error" });
    }

    // try {
    //   const response = await fetch("/api/cars/compare", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ car1, car2 }),
    //   });

    //   const data = await response.json();
    //   console.log("AI Vergleich:", data.result);
    // } catch (error) {
    //   setToast({ message: "Fehler beim Vergleichen der Fahrzeuge.", type: "error" });
    // }
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-neutral mb-4">
          Vergleiche zwei Fahrzeuge im Detail
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Gib die Fahrzeugdaten ein – unser System berechnet langfristige Kosten
          wie Wertverlust, Versicherung und Verbrauch, damit du die beste
          Entscheidung treffen kannst.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className=" p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-brand-primary">
            Fahrzeug 1
          </h2>
          <CarForm ref={car1Ref} />
        </div>

        <div className=" p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-brand-secondary">
            Fahrzeug 2
          </h2>
          <CarForm ref={car2Ref} />
        </div>
      </section>
      <div className="text-center mt-12">
        <button
          onClick={handleCompare}
          className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Vergleichen
        </button>
      </div>
      {resultData && (
        <section className="max-w-6xl mx-auto mt-16">
          <Results data={resultData} />
        </section>
      )}
    </div>
  );
}
