
import Navbar from "../components/landingPages/Navbar";
import Footer from "../components/landingPages/FooterC";
// app/(root)/layout.tsx
export default function PublicLayout({ children }) {
    return (
      <main className="">
        <Navbar/>
        {/* You can add a NavBar here if needed */}
        {children}
        <Footer/>
      </main>
    );
  }
  