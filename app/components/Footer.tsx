export default function FooterSection() {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-[#111] text-center text-sm text-gray-600 dark:text-gray-400">
      <p>© {new Date().getFullYear()} AutoCompare AI. Alle Rechte vorbehalten.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="/impressum" className="hover:text-brand-primary">Impressum</a>
        <a href="/datenschutz" className="hover:text-brand-primary">Datenschutz</a>
        <a href="/kontakt" className="hover:text-brand-primary">Kontakt</a>
      </div>
    </footer>
  );
}