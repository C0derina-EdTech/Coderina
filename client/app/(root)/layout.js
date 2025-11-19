

// app/(root)/layout.tsx
export default function PublicLayout({ children }) {
    return (
      <main className="">
        
        {/* You can add a NavBar here if needed */}
        {children}
      </main>
    );
  }
  