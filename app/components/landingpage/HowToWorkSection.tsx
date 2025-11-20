const steps = [
  { icon: "🚗", title: "Fahrzeuge eingeben", desc: "Wähle zwei Autos oder füge sie aus einem Inserat ein." },
  { icon: "📅", title: "Nutzungsdauer wählen", desc: "Definiere, wie lange du das Auto behalten willst." },
  { icon: "🤖", title: "KI berechnet Kosten", desc: "Unser Modell analysiert Daten und berechnet die Gesamtkosten." },
  { icon: "📊", title: "Ergebnis ansehen", desc: "Vergleiche alle Kosten übersichtlich und interaktiv." },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-(--background) text-(--foreground)">
      <h2 className="text-3xl font-bold text-center mb-12">So funktioniert’s</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 dark:bg-[#1b1b1b] rounded-xl shadow-md text-center hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
