const features = [
  { icon: "🇩🇪", title: "Deutsche Marktdaten", desc: "KFZ-Steuer, SF-Klasse und regionale Spritpreise integriert." },
  { icon: "🤖", title: "KI-basierte Modelle", desc: "Präzise Wertverlust- und Wartungsvorhersagen." },
  { icon: "📈", title: "Klare Visualisierungen", desc: "Charts und Tabellen zeigen, wo dein Geld hingeht." },
  { icon: "💡", title: "Einfache Bedienung", desc: "Schnell, intuitiv und auf jedem Gerät nutzbar." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-brand-neutral mb-10">
        Warum unser Vergleich einzigartig ist
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white dark:bg-[#1b1b1b] rounded-xl text-center shadow-md">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-brand-primary mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
