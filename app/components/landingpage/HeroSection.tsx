"use client";
import { useTranslations } from 'next-intl';
import { useAuth } from "../../(context)/authContext";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useAuthModal } from "@/hooks/useAuthModal";

export default function Hero() {
  const t = useTranslations('LandingPage.Hero');
  const { user } = useAuth();
  const { handleRoute } = useHandleRoute();
  const { openModal } = useAuthModal();

  const handlePush = () => {
    if (user) handleRoute("dashboard");
    else openModal();
  };

  return (
    <section className="w-full h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          {t.rich('title', { highlight: (chunks) => <span className="text-brand-accent">{chunks}</span> })}
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">{t('description')}</p>
        <button
          onClick={handlePush}
          className="bg-linear-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-200"
        >
          {t('button')}
        </button>
      </div>
    </section>
  );
}
