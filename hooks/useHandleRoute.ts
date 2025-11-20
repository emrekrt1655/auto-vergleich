"use client";
import { useRouter } from "next/navigation";

export const useHandleRoute = () => {
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(`/${route}`);
  };

  return { handleRoute };
};
