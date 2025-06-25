"use client";

import React from "react";
import { FaUsers, FaUserPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { useFormContext } from "../../contexts/FormContext";

// Safe date check
function isThisMonth(dateStr) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  if (isNaN(date)) return false;
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
}

const SubscribersH = () => {
  const { subscribers = [] } = useFormContext(); // fallback to empty array

  const totalSubscribers = subscribers.length || 0;
  const newSubscribersThisMonth = subscribers.filter((s) =>
    isThisMonth(s.subscribedAt)
  ).length;
  const totalEmailsSent = totalSubscribers * 3; // example logic

  const cards = [
    {
      icon: <FaUsers className="text-[#321414] mb-3 w-12 h-12" />,
      value: totalSubscribers,
      label: "Total Subscribers",
    },
    {
      icon: <FaUserPlus className="text-[#321414] mb-3 w-12 h-12" />,
      value: newSubscribersThisMonth,
      label: "New Subscribers (This Month)",
    },
    {
      icon: <FaEnvelopeOpenText className="text-[#321414] mb-3 w-12 h-12" />,
      value: totalEmailsSent,
      label: "Total Emails Sent",
    },
  ];

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            {card.icon}
            <h2 className="text-4xl font-extrabold text-[#321414]">
              {card.value ?? 0}
            </h2>
            <p className="text-gray-700 font-medium mt-1">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscribersH;
