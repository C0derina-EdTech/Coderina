// app/(root)/about/layout.tsx or layout.jsx
import Privacy from "../../components/Privacy";

export const metadata = {
  title: "privacy-policy",
  description: "At Coderina EdTech, your privacy is our priority. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you interact with our website, services, or forms including our subscriber form, contact form, and blog message form.",
};

export default function About () {
  return (

      <div className="">
              <Privacy/>
      </div>
  
  );
}