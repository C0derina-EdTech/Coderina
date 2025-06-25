import "./globals.css";
import { PostProvider } from "./components/contexts/PostContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { FormProvider } from "./components/contexts/FormContext";
import Navbar from "./components/Navbar";
import SubscribeForm from "./utlity/SubscribeForm";
import SocialLinks from "./utlity/SocialLinks";
import { BlogProvider } from "./components/contexts/BlogContext";
import { AuthProvider } from "./components/contexts/AuthContext"; // adjust the pat
import { Providers } from "./Providers";
export const metadata = {
  title: {
    default: "CODERINA",
    template: "%s - Coderina Foundation",
  },
  description:
    "Coderina Educational Technology (Coderina EduTech) is a dynamic organization dedicated to advancing education through innovative technology solutions. With a mission to empower individuals and communities, Coderina specializes in providing digital skills training, fostering STEM education, and promoting coding literacy among students and educators. By leveraging technology, the organization seeks to bridge the digital divide and equip learners with the tools needed to thrive in a rapidly evolving world.",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/codelogo.png", // or "/favicon.png" or "/favicon.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Roboto scroll-smooth bg-[#FDEFD9]">
        <ThemeProvider>
        
                <Providers>
                <Navbar />
                {children}
                </Providers>
         
        </ThemeProvider>
      </body>
    </html>
  );
}
