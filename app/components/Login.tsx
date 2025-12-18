"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useTranslations } from "next-intl";

type LoginProps = {
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const t = useTranslations("Components.Login");
  const [form, setForm] = useState({ email: "", password: "" });
  const { login, oauthLogin } = useAuthMutation();
  const { handleRoute } = useHandleRoute();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDashboard = () => {
    handleRoute("dashboard");
    onClose();
  };

  const handleEmailLogin = () => {
    login.mutate(
      { email: form.email, password: form.password },
      {
        onSuccess: (data: any) => {
          handleRoute("dashboard");
          onClose();
        },
      }
    );
  };

  const handleOAuthLogin = (provider: "google" | "apple" | "facebook") => {
    oauthLogin.mutate(provider, {
      onSuccess: (data: any) => {
        handleRoute("dashboard");
      },
    });
  };

  const isLoading = login.isPending || oauthLogin.isPending;

  const renderGuestInfo = () => {
    const text = t.rich("guestInfo", {
      dashboard: (chunks) => (
        <span
          onClick={() => handleDashboard()}
          className="cursor-pointer font-medium text-pink-700 hover:underline"
        >
          {chunks}
        </span>
      ),
    });
    return text;
  };

  return (
    <>
      <div className="w-full max-w-sm p-8 border rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">{t("title")}</h2>

        <input
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="password"
          type="password"
          placeholder={t("passwordPlaceholder")}
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handleEmailLogin}
          disabled={isLoading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {isLoading ? t("loading") : t("loginButton")}
        </button>

        <div className="flex items-center gap-2 my-2">
          <div className="grow h-px bg-gray-300" />
          <span className="text-sm text-gray-500">{t("or")}</span>
          <div className="grow h-px bg-gray-300" />
        </div>

        <button
          onClick={() => handleOAuthLogin("google")}
          className="w-full flex items-center justify-center gap-2 py-2 border rounded hover:shadow-md transition"
          disabled={isLoading}
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700">{t("googleLogin")}</span>
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          {renderGuestInfo()}
        </p>
        <p className="text-sm text-center text-gray-500 mt-4">
          {t("termsInfo")}{" "}
        </p>
      </div>
    </>
  );
};

export default Login;
