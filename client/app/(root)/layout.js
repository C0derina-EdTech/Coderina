import SocialLinks from "../utlity/SocialLinks";
import SubscribeForm from "../utlity/SubscribeForm";

export const metadata = {
  title: {
    default: "Coderina | Empowering STEAM Education across Africa",
    template: "%s - Coderina",
  },
  description:
    "Coderina Education and Technology Foundation is dedicated to advancing equitable access to E-STEAM education across Africa. Use the Admin Dashboard to manage programs, assign instructors, monitor analytics, and drive impactful learning experiences in schools and communities.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className="font-Roboto scroll-smooth">
      <main className="">{children}</main>
      
      <SubscribeForm />
      <SocialLinks />
    </div>
  );
}
