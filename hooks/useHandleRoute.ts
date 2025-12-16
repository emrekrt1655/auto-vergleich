"use client";
import { usePathname, useRouter } from "next/navigation";

export const useHandleRoute = () => {
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";
  const router = useRouter();
  const handleRoute = (route: string) => {
    router.push(`/${currentLocale}/${route}`);
  };

  return { handleRoute };
};
