"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  const login = async ({ email, password }) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      throw new Error(res.error);
    }

    // If user is admin, redirect to admin overview
    if (res.ok && session?.user?.role === "admin") {
      router.push("/admincodeboard/overview");
    } else {
      router.push("/");
    }
  };

  const logout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: session?.user || null,
        isAuthenticated: !!session,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
