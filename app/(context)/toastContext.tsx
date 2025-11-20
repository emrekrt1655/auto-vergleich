"use client"
import React, { useMemo, useState, ReactNode } from "react";
import { Toast } from "@/toast/toast";

interface ToastState {
  toast: Toast | null;
  setToast: (toast: Toast | null) => void;
}

export const ToastContext = React.createContext<ToastState>({
  toast: null,
  setToast: () => {},
} as ToastState);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContextProvider: React.FC<ToastProviderProps> = (props) => {
  const [toast, setToast] = useState<Toast | null>(null);
  const value = useMemo(() => ({ toast, setToast }), [toast]);
  return (
    <ToastContext.Provider value={value}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
