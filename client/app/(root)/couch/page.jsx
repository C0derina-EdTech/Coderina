import CouchPage from "../../components/couchComponent/CouchPage";
import React from "react";

export const metadata = {
  title: "COUCH",
  description:
    "The Coderina University Challenge (COUCH) is a dynamic initiative empowering university students to solve real-world problems using technology, innovation, and teamwork.",
};
const page = () => {
  return (
    <div>
      <CouchPage />
    </div>
  );
};

export default page;
