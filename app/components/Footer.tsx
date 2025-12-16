"use client";
import { useTranslations } from "next-intl";

export default function FooterSection() {
  const t = useTranslations("Components.footerSection");

  return (
    <footer className="py-10 bg-gray-100 dark:bg-[#111] text-center text-sm text-gray-600 dark:text-gray-400">
      <p>{t("copyright", { year: new Date().getFullYear() })}</p>

      {/* 
      <div className="flex justify-center gap-6 mt-4">
        <a href="/impressum" className="hover:text-brand-primary">
          {t("links.imprint")}
        </a>
        <a href="/datenschutz" className="hover:text-brand-primary">
          {t("links.privacy")}
        </a>
        <a href="/kontakt" className="hover:text-brand-primary">
          {t("links.contact")}
        </a>
      </div>
      */}
    </footer>
  );
}
