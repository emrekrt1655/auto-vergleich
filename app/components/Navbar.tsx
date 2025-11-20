"use client";

import React from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/app/(context)/authContext";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useUserName } from "@/hooks/useUserName";
import { useHandleRoute } from "@/hooks/useHandleRoute";

const Navbar = () => {
  const { user } = useAuth();
  const { logout } = useAuthMutation();
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const {handleRoute} = useHandleRoute()

  const handleLoginClick = () => setIsAuthModalOpen(!isAuthModalOpen);

  const handleLogout = () => {
    logout.mutate(undefined, {});
    handleRoute("")
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
            onClick={handleLoginClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Anmelden
          </button>
        )}
      </div>

      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
