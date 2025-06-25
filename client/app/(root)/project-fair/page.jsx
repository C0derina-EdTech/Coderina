import React from "react";

import ProjectFair from "../../components/project/ProjectFair";
export const metadata = {
  title: "Project fair",
  description:
    "Explore innovative student-led projects showcased through Coderina`s Project Fair — highlighting creativity, problem-solving, and STEM skills across Africa.",
};
const page = () => {
  return (
    <div>
      <ProjectFair />
    </div>
  );
};

export default page;
