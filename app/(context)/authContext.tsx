"use client";
import { useAuthUserQuery } from "@/hooks/useAuthUser";
import { queryClient } from "@/lib/react-query/queryClient";
import { supabase } from "@/lib/supabese/client";
import { createContext, useContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
  user: any | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: userFromQuery } = useAuthUserQuery();
  const [user, setUser] = useState<any | null>(userFromQuery ?? null);

  useEffect(() => {
    setUser(userFromQuery ?? null);
  }, [userFromQuery]);

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        queryClient.setQueryData(["user"], session.user);
      } else {
        setUser(null);
        queryClient.setQueryData(["user"], null);
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
