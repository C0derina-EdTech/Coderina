// app/providers.jsx
"use client";

import { BlogProvider } from "./components/contexts/BlogContext";
import { PostProvider } from "./components/contexts/PostContext";
import { FormProvider } from "./components/contexts/FormContext";
export function Providers({ children }) {
  return (
           <PostProvider>
          <BlogProvider>
            <FormProvider>
            {children}
            </FormProvider>
            </BlogProvider>
            </PostProvider>
  );
}
