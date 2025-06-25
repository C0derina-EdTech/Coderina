// app/(root)/about/layout.tsx or layout.jsx
import Contact from "./Contact";
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Coderina Foundation for inquiries, partnerships, volunteering, or support. We`re here to connect and collaborate for a better future through STEM.",
};

export default function ContactPage() {
  return (
    <div className="">
      <Contact />
    </div>
  );
}
