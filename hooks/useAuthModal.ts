import { useState, useEffect } from "react";

type Subscriber = (isOpen: boolean) => void;

let globalIsOpen = false;
let subscribers: Subscriber[] = [];

const notify = () => {
  subscribers.forEach((fn) => fn(globalIsOpen));
};

export const useAuthModal = () => {
  const [isOpen, setIsOpen] = useState(globalIsOpen);

  const openModal = () => {
    globalIsOpen = true;
    notify();
  };

  const closeModal = () => {
    globalIsOpen = false;
    notify();
  };

  useEffect(() => {
    const subscriber = (state: boolean) => setIsOpen(state);
    subscribers.push(subscriber);

    return () => {
      subscribers = subscribers.filter((fn) => fn !== subscriber);
    };
  }, []);

  return { isOpen, openModal, closeModal };
};
