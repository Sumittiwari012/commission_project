"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { restoreSession, updateMemoryToken } from "@/lib/app";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);

  // 🔥 THIS WAS MISSING
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await restoreSession();
        if (token) {
          setAccessToken(token);
          updateMemoryToken(token);
        }
      } finally {
        // ✅ ALWAYS stop restoring
        setIsRestoring(false);
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isRestoring,
        setIsRestoring,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
