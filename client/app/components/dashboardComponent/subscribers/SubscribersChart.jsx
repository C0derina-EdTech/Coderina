"use client";

import React, { useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useFormContext } from "../../contexts/FormContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const baseColor = "#321414";

function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date)) return "Invalid Date";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDateRange(startDate, endDate) {
  const dates = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

export default function SubscribersChart() {
  const { subscribers = [], loading } = useFormContext();
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (!Array.isArray(subscribers) || subscribers.length === 0) return;

    const datesOnly = subscribers
      .map((s) => {
        const raw = s.subscribedAt;
        const date = raw ? new Date(raw) : null;
        return date instanceof Date && !isNaN(date) ? date : null;
      })
      .filter(Boolean); // keep only valid dates

    if (datesOnly.length === 0) return;

    const minDate = new Date(Math.min(...datesOnly));
    const maxDate = new Date(Math.max(...datesOnly));

    setStartDate(minDate);
    setEndDate(maxDate);

    const dates = getDateRange(minDate, maxDate);
    const labels = dates.map(formatDate);

    const subscriberCounts = dates.map((date) => {
      const dateStr = date.toISOString().split("T")[0];
      return subscribers.filter((sub) => {
        const raw = sub.subscribedAt;
        const subDate = raw ? new Date(raw) : null;
        if (!subDate || isNaN(subDate)) return false;
        const subDateStr = subDate.toISOString().split("T")[0];
        return subDateStr === dateStr;
      }).length;
    });

    // Optional gradient
    const ctx = chartRef.current?.ctx;
    let backgroundColor = baseColor;
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, baseColor + "cc");
      gradient.addColorStop(1, baseColor + "55");
      backgroundColor = gradient;
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "New Subscribers",
          data: subscriberCounts,
          backgroundColor,
          borderColor: baseColor,
          borderWidth: 1,
          borderRadius: 5,
          maxBarThickness: 20,
        },
      ],
    });
  }, [subscribers]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: baseColor,
          font: { size: 14, weight: "600" },
        },
        position: "top",
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: baseColor,
        bodyColor: "#000",
        borderColor: baseColor,
        borderWidth: 1,
        titleFont: { weight: "600" },
        padding: 10,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: { size: 14, weight: "bold" },
          color: baseColor,
        },
        title: {
          display: true,
          text: "Subscribers",
          padding: { bottom: 10 },
          font: { size: 16, style: "italic", family: "Arial" },
          color: baseColor,
        },
        grid: {
          color: "#e5e7eb",
          borderDash: [4, 4],
        },
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45,
          font: { size: 12, weight: "bold" },
          color: baseColor,
          autoSkip: true,
          maxTicksLimit: 12,
        },
        title: {
          display: true,
          text: "Date",
          padding: { top: 10 },
          font: { size: 16, style: "italic", family: "Arial" },
          color: baseColor,
        },
        grid: { display: false },
      },
    },
  };

  if (loading) {
    return (
      <div className="py-8 flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#321414]"></div>
      </div>
    );
  }

  if (!chartData || !startDate || !endDate) {
    return (
      <div className="py-8 text-center text-gray-500">
        No data available for subscribers.
      </div>
    );
  }

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
      style={{ height: "400px" }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#321414]">
        Subscriber Growth Overview ({formatDate(startDate)} -{" "}
        {formatDate(endDate)})
      </h2>
      <Bar ref={chartRef} data={chartData} options={options} />
    </div>
  );
}
