import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalRoot = document.getElementById("modal-root") || document.body;

  if (!isOpen || !mounted) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-black rounded-2xl shadow-xl w-full max-w-sm p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <Login onClose={onClose} />
      </div>
    </div>,
    modalRoot
  );
};

export default AuthModal;
