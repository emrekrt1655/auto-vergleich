import { useAuth } from "@/app/(context)/authContext";

export const useUserName = (): string | null => {
  const { user } = useAuth();

  const userName =
    user?.user_metadata?.full_name ||
    user?.full_name || user?.email.split("@")[0] ||
    "";


  if (!userName) return null;

  const firstName = userName.split(" ")[0];
  return firstName || null;
};