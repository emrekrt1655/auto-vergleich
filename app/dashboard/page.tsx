"use client";
import CarForm from "@/app/components/CarForm";

export default function DashboardPage() {
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
          <CarForm />
        </div>

        <div className=" p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-brand-secondary">
            Fahrzeug 2
          </h2>
          <CarForm />
        </div>
      </section>
    </div>
  );
}
