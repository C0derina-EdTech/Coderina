// app/providers.jsx
"use client";

import { BlogProvider } from "./components/contexts/BlogContext";
import { FormProvider } from "./components/contexts/FormContext";
export function Providers({ children }) {
  return (
  
          <BlogProvider>
            <FormProvider>
            {children}
            </FormProvider>
            </BlogProvider>
  );
}
