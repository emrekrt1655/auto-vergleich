import { useMutation } from "@tanstack/react-query";

import { useContext } from "react";

import {
  signInWithEmail,
  signOut,
  signInWithOAuth,
} from "@/services/authService";
import { ToastContext } from "@/app/(context)/toastContext";
import { queryClient } from "@/lib/react-query/queryClient";
import { supabase } from "@/lib/supabese/client";

export const useAuthMutation = () => {
  const { setToast } = useContext(ToastContext);

  type OAuthProvider = "google" | "apple" | "facebook";

  const login = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmail(email, password),
    onSuccess: async (data) => {
      if (data?.isNewUser) {
        setToast({ type: "success", message: "Bitte Genehmigen Sie Email" });
      } else {
        const { data: listener } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            if (event === "SIGNED_IN" && session?.user) {
              console.log("✅ Supabase event fired:", event);
              queryClient.invalidateQueries({ queryKey: ["user"] });
              listener.subscription.unsubscribe();
            }
          }
        );

        setToast({ type: "success", message: "Erfolgreich Login" });
      }
    },
    onError: (error: any) => {
      setToast({
        type: "error",
        message: error?.message ?? "Fehler beim Login",
      });
    },
  });

  const oauthLogin = useMutation<void, any, OAuthProvider>({
    mutationFn: (provider: OAuthProvider) => signInWithOAuth(provider),
    onSuccess: (_data, variables) => {
      setToast({
        type: "success",
        message: `Erfolgreich Login with ${variables}`,
      });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: any) => {
      setToast({
        type: "error",
        message: error?.message ?? "Fehler beim Login",
      });
    },
  });

  const logout = useMutation({
    mutationFn: signOut,
    onSuccess: (data) => {
      setToast({ type: "success", message: "Erfolgreich Logout" });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      console.log(data);
    },
    onError: (error: any) => {
      setToast({
        type: "error",
        message: error?.message ?? "Fehler beim Logout",
      });
    },
  });

  return { login, logout, oauthLogin };
};
