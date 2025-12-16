"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/app/(context)/authContext";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useUserName } from "@/hooks/useUserName";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations("Components.Navbar");
  const pathname = usePathname();

  const languages = [
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" }
  ];

  const currentLocale = pathname.split("/")[1] || "en";
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const { user } = useAuth();
  const { logout } = useAuthMutation();
  const { handleRoute } = useHandleRoute();
  const { isOpen, openModal, closeModal } = useAuthModal();

  const handleLogout = () => {
    logout.mutate(undefined, {});
    handleRoute("");
  };

  const handleLanguageChange = (langCode: string) => {
    const newPath = `/${langCode}${pathname.replace(/^\/(en|de|tr)/, "")}`;
    window.location.href = newPath;
    setIsLangOpen(false);
  };

  const userName = useUserName();

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Auto.Compare
      </span>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg  transition-all duration-200 "
          >
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-xl">{currentLanguage.flag}</span>
            <span className="text-sm font-medium text-gray-700">
              {currentLanguage.code.toUpperCase()}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                isLangOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isLangOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsLangOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full cursor-pointer flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                      currentLocale === lang.code ? "bg-blue-50" : ""
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-sm font-medium text-gray-700">
                      {lang.name}
                    </span>
                    {currentLocale === lang.code && (
                      <span className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {user ? (
          <>
            <span className="text-gray-700 text-sm">
              {t("welcome")}, <span className="font-semibold">{userName}</span>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t('logout')}
            </button>
          </>
        ) : (
          <button
            onClick={openModal}
            className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Anmelden
          </button>
        )}
      </div>

      {isOpen && <AuthModal isOpen={isOpen} onClose={() => closeModal()} />}
    </header>
  );
};

export default Navbar;