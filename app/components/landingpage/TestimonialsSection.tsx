const testimonials = [
  { quote: "Super einfach und hilft wirklich bei der Kaufentscheidung!", name: "Lena M.", role: "Autokäuferin aus München" },
  { quote: "Endlich sehe ich, was mein Auto mich wirklich kostet.", name: "Thomas K.", role: "Pendler aus Köln" },
  { quote: "Tolles Tool – spare mir sicher ein paar tausend Euro.", name: "Jörg F.", role: "Familienvater aus Hamburg" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-brand-neutral mb-10">
        Was Nutzer sagen
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white dark:bg-[#1b1b1b] rounded-xl shadow-md">
            <p className="text-gray-700 dark:text-gray-300 mb-4">“{t.quote}”</p>
            <p className="font-semibold text-brand-primary">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
