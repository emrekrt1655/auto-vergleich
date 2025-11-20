import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/authService";

export const useAuthUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
