import FllPage from "../../components/formcomponents/FllPage";

// app/(root)/about/layout.tsx or layout.
export const metadata = {
  title: "First Robotics registeration",
  description:
    "Register your team for the FIRST Robotics Competition through Coderina Foundation and join a global movement empowering students in STEM, innovation, and teamwork.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FDEFD9]">
      <FllPage />
    </div>
  );
}
