"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import AuthModal from "./AuthModal";
import { useAuth } from "@/app/(context)/authContext";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useUserName } from "@/hooks/useUserName";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useAuthModal } from "@/hooks/useAuthModal";

const Navbar = () => {
  const t = useTranslations("Components.Navbar");
  const { user } = useAuth();
  const { logout } = useAuthMutation();
  const { handleRoute } = useHandleRoute();
  const { isOpen, openModal, closeModal } = useAuthModal();
  const userName = useUserName();

  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  };

  const handleLogout = () => {
    logout.mutate(undefined, {});
    handleRoute("");
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <span className="text-2xl font-bold">Logo</span>

      <div className="flex items-center gap-4">
        <select
          onChange={(e) => handleChangeLocale(e.target.value)}
          defaultValue={pathname.split("/")[1]}
          className="border px-2 py-1 rounded text-sm"
        >
          <option value="de">🇩🇪 DE</option>
          <option value="tr">🇹🇷 TR</option>
          <option value="en">🇬🇧 EN</option>
        </select>

        {user ? (
          <>
            <span className="text-gray-700">{t('welcome', { name: userName ?? "" })}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              {t('logout')}
            </button>
          </>
        ) : (
          <button
            onClick={openModal}
            className="bg-linear-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-200"
          >
            {t('login')}
          </button>
        )}
      </div>

      {isOpen && <AuthModal isOpen={isOpen} onClose={() => closeModal()} />}
    </header>
  );
};

export default Navbar;
