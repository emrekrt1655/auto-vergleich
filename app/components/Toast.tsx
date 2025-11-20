"use client";

import React, { useEffect, useContext } from "react";
import { ToastContext } from "@/app/(context)/toastContext";

export const Toast: React.FC = () => {
  const { toast, setToast } = useContext(ToastContext);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast, setToast]);

  if (!toast) return null;

  const colorClass =
    toast.type === "error"
      ? "bg-red-500 border-red-600"
      : "bg-green-500 border-green-600";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <div
        className={`text-white px-4 py-3 rounded-lg shadow-lg border ${colorClass} transition-all duration-300`}
      >
        <p className="font-medium">{toast.message}</p>
      </div>
    </div>
  );
};
