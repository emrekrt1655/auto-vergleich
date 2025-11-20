"use client";

import React from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/app/(context)/authContext";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useUserName } from "@/hooks/useUserName";
import { useHandleRoute } from "@/hooks/useHandleRoute";
import { useAuthModal } from "@/hooks/useAuthModal";

const Navbar = () => {
  const { user } = useAuth();
  const { logout } = useAuthMutation();
  const { handleRoute } = useHandleRoute();
  const { isOpen, openModal, closeModal } = useAuthModal();

  const handleLogout = () => {
    logout.mutate(undefined, {});
    handleRoute("");
  };

  const userName = useUserName();

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <span className="text-2xl font-bold">Logo</span>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-700">Willkommen, {userName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Abmelden
            </button>
          </>
        ) : (
          <button
            onClick={openModal}
            className="bg-linear-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition-all duration-200"
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
