"use client";

import React from "react";
import { FaEnvelope, FaRegCalendarPlus, FaInbox } from "react-icons/fa";
import { useFormContext } from "../contexts/FormContext";

// Utility: Check if a date string is in the current month
function isThisMonth(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  );
}

function isLastMonth(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const year = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();

  return date.getFullYear() === year && date.getMonth() === lastMonth;
}

function getLastMonthName() {
  const now = new Date();
  const lastMonthIndex = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[lastMonthIndex];
}

const BootcampH = () => {
  const { bootCamp = [] } = useFormContext(); // ✅ Default fallback

  const totalRegistrations = bootCamp.length;
  const newRegistrationThisMonth = bootCamp.filter((entry) =>
    isThisMonth(entry.createdAt)
  ).length;

  const registrationInLastMonth = bootCamp.filter((entry) =>
    isLastMonth(entry.createdAt)
  ).length;

  const lastMonthName = getLastMonthName();

  const cards = [
    {
      icon: <FaInbox className="text-[#321414] mb-3 w-12 h-12" />,
      value: totalRegistrations,
      label: "Total Registrations",
    },
    {
      icon: <FaRegCalendarPlus className="text-[#321414] mb-3 w-12 h-12" />,
      value: newRegistrationThisMonth,
      label: "This Month",
    },
    {
      icon: <FaEnvelope className="text-[#321414] mb-3 w-12 h-12" />,
      value: registrationInLastMonth,
      label: `In ${lastMonthName}`,
    },
  ];

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

export default BootcampH;
