"use client";
import { useTranslations } from "next-intl";
import {footerClasses} from "@/app/styles/classes"

export default function FooterSection() {
  const t = useTranslations("Components.footerSection");
  const {footerWrapper} = footerClasses

  return (
    <footer className={`py-10 ${footerWrapper} text-center text-sm`}>
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
