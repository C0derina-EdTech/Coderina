// app/providers.jsx
"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./components/contexts/AuthContext"; // adjust path if needed
import { BlogProvider } from "./components/contexts/BlogContext";
import { FormProvider } from "./components/contexts/FormContext";
export function Providers({ children }) {
  return (
    <SessionProvider>
    <AuthProvider>
    <FormProvider>
      <BlogProvider>{children}</BlogProvider>
      </FormProvider>
    </AuthProvider>
  </SessionProvider>
  );
}
