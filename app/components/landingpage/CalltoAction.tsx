"use client";
import { useAuth } from "../../(context)/authContext";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useTranslations } from "next-intl";

export default function CallToActionSection() {
  const t = useTranslations("Components.LandingPage.callToActionSection");
  const { user } = useAuth();
  const { handleRoute } = useHandleRoute();
  const { openModal } = useAuthModal();

  const handlePush = () => {
    if (user) {
      handleRoute("dashboard");
    } else {
      openModal();
    }
  };

  return (
    <section className="py-20 text-center bg-linear-to-r from-brand-primary to-brand-secondary text-white">
      <h2 className="text-3xl font-bold mb-6">
        {t("title")}
      </h2>
      <button
        onClick={handlePush}
        className="bg-white text-brand-primary font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition"
      >
        {t("button")}
      </button>
    </section>
  );
}