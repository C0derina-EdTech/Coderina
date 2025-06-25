"use client";
import { useFormContext } from "../../contexts/FormContext";

export default function SummaryCards() {
  const { subscribers = [], events = [], messages = [],  bootCamp = [] } = useFormContext();

  const summary = [
    {
      title: "Total Subscribers",
      value: subscribers?.length || 0, // fallback to 0 if undefined
    },
    {
      title: "Total Events",
      value: events?.length || 0, // fallback to 0
    },
    {
      title: "Messages",
      value: messages?.length || 0, // fallback to 0
    },
    {
      title: "Bootcamp Registeration",
      value: bootCamp?.length || 0, // fallback to 0
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {summary.map((item, i) => (
        <div
          key={i}
          className="bg-white border rounded-2xl shadow-sm p-5 transition hover:shadow-md"
        >
          <p className="text-sm text-gray-500">{item.title}</p>
          <h2 className="text-2xl font-semibold text-gray-900">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
