import LegoPage from "../../components/legoComponents/LegoPage";

// app/(root)/about/layout.tsx or layout.
export const metadata = {
  title: "First Lego Leaque",
  description:
    "Join the FIRST LEGO League with Coderina Foundation — a hands-on STEM program where children explore robotics, problem-solving, and innovation through LEGO challenges.",
};

export default function page() {
  return (
    <div className="bg-[#FDEFD9]">
      <LegoPage />
    </div>
  );
}
