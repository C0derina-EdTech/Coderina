import React from "react";
import SubscribersH from "../../components/dashboardComponent/subscribers/SubscribersH";
import SubscribersChart from "../../components/dashboardComponent/subscribers/SubscribersChart";
import SubscribersList from "../../components/dashboardComponent/subscribers/SubscribersList";
export const metadata = {
  title: "Subscribers",
  description: "Learn more about us.",
};

const page = () => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center gap-4">
       
        <h1 className="text-4xl font-extrabold text-[#321414] tracking-wide">
          Subscribers
        </h1>
      </div>

      <SubscribersH/>
      <SubscribersChart/>
      <SubscribersList />
     
    </div>
  );
};

export default page;
