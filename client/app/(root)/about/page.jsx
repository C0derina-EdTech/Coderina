// app/(root)/about/layout.tsx or layout.jsx
import AboutPage from "./AboutPage";
export const metadata = {
  title: "About",
  description:
    "Learn more about Coderina Foundation — a nonprofit empowering African youth through STEM education, digital skills, robotics, and community-driven innovation.",
};

export default function About() {
  return (
    <div className="">
      <AboutPage />
    </div>
  );
}
