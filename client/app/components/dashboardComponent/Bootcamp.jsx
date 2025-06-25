"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSync } from "react-icons/io";
import { useFormContext } from "../contexts/FormContext";
import { HiDownload } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import BootcampH from "./BootcampH";
import { X } from "lucide-react";
import Image from "next/image";

const BootCamp = () => {
  const { bootCamp, loading } = useFormContext();

  const [SelectedEntry, setSelectedEntry] = useState(null);

  const handleOpenModal = (entry) => setSelectedEntry(entry);
  const handleCloseModal = () => setSelectedEntry(null);
  // filter
  const [filters, setFilters] = useState({ month: "", name: "", email: "" });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value.toLowerCase() });
  };

  const filteredData = (bootCamp || []).filter((entry) => {
    const entryMonth = new Date(entry.createdAt)
      .toLocaleString("default", { month: "long" })
      .toLowerCase();

    const matchesMonth = !filters.month || entryMonth.includes(filters.month);

    const matchesName =
      !filters.name || entry.studentName?.toLowerCase().includes(filters.name);

    const matchesEmail =
      !filters.email || entry.email?.toLowerCase().includes(filters.email);

    return matchesMonth && matchesName && matchesEmail;
  });

  const availableMonths = Array.from(
    new Set(
      (bootCamp || []).map((entry) =>
        new Date(entry.createdAt)
          .toLocaleString("default", { month: "long" })
          .toLowerCase()
      )
    )
  ).sort((a, b) => new Date(`${a} 1, 2024`) - new Date(`${b} 1, 2024`));

  // details of all

  const downloadCSV = () => {
    if (bootCamp.length === 0) {
      toast.error("No registrations to download");
      return;
    }

    const headers = [
      "Student Name",
      "Email",
      "Program",
      "Learning Mode",
      "Parent Name",
      "Phone",
      "Age",
      "Grade",
      "Gender",
      "Parent Email",
      "Address",
      "Additional Info",
      "Created At",
    ];

    const rows = bootCamp.map((entry) => [
      entry.studentName,
      entry.email,
      entry.program,
      entry.learningMode,
      entry.parentName || "",
      entry.phone,
      entry.age || "",
      entry.grade,
      entry.gender,
      entry.parentEmail || "",
      entry.address,
      entry.additionalInfo || "",
      new Date(entry.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((field) => `"${field}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bootcamp_registrations.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  // details of one participant

  const downloadDetails = (entry) => {
    const fileName = `${entry.studentName}_${entry.email}_details.txt`;
    const details = `
Student Name: ${entry.studentName}
Email: ${entry.email}
Phone: ${entry.phone}
Grade: ${entry.grade}
Gender: ${entry.gender}
Program: ${entry.program}
Learning Mode: ${entry.learningMode}
Parent Name: ${entry.parentName || "N/A"}
Parent Email: ${entry.parentEmail || "N/A"}
Address: ${entry.address}
Additional Info: ${entry.additionalInfo || "N/A"}
Payment Proof: ${entry.paymentProof || "N/A"}
Registered At: ${new Date(entry.createdAt).toLocaleString()}
    `;
    const blob = new Blob([details], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full md:px-2 lg:px-4 py-6 overflow-hidden h-full">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">BootCamp</h1>

      <div>
        <BootcampH />
      </div>

      {loading ? (
        <div className="py-8 flex justify-center items-center h-96">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#321414]"></div>
        </div>
      ) : bootCamp.length === 0 ? (
        <p className="text-center text-gray-500 py-4 h-screen">
          No Registration Found
        </p>
      ) : (
        <div className="">
          <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-gray-700">
            {/* Total Registrations */}
            <div className="text-center lg:text-left">
              Total Registrations: <strong>{filteredData?.length}</strong>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">
              <input
                type="text"
                placeholder="Search Name"
                className="border p-2 rounded w-full sm:w-auto"
                onChange={(e) => handleFilterChange("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Search Email"
                className="border p-2 rounded w-full sm:w-auto"
                onChange={(e) => handleFilterChange("email", e.target.value)}
              />
              <select
                className="border p-2 rounded w-full sm:w-auto"
                onChange={(e) => handleFilterChange("month", e.target.value)}
              >
                <option value="">All Months</option>
                {availableMonths.map((month) => (
                  <option key={month} value={month}>
                    {month.charAt(0).toUpperCase() + month.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={downloadCSV}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-[#321414] w-full sm:w-auto"
              >
                Download CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full table-auto border-collapse border border-gray-300 text-sm text-left bg-white shadow-md rounded-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">#</th>
                  <th className="p-2">Student Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Program</th>
                  <th className="p-2">Learning Mode</th>
                  <th className="p-2">Parent Name</th>
                  <th className="p-2">Phone</th>
                  <th className="p-2">Registered At</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((entry, idx) => (
                  <tr
                    key={entry._id}
                    className="odd:bg-gray-50 even:bg-gray-100"
                  >
                    <td className="p-3 text-center">{idx + 1}</td>
                    <td className="p-3">{entry.studentName}</td>
                    <td className="p-3">{entry.email}</td>
                    <td className="p-3">{entry.program}</td>
                    <td className="p-3">{entry.learningMode}</td>
                    <td className="p-3">{entry.parentName || "N/A"}</td>
                    <td className="p-3">{entry.phone}</td>
                    <td className="p-3">
                      {new Date(entry.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3 flex gap-2">
                      <div
                        onClick={() => downloadDetails(entry)}
                        className="bg-gray-300 text-blue-500 p-2 rounded hover:text-blue-800 cursor-pointer"
                      >
                        <HiDownload />
                      </div>
                      <div
                        onClick={() => handleOpenModal(entry)}
                        className="bg-gray-300 text-green-600 p-2 rounded hover:text-green-800 cursor-pointer"
                      >
                        <TbListDetails />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          {SelectedEntry && (
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 md:mt-[4rem] flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md md:max-w-xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-bold mb-4">BootCamp Details</h2>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 rounded-full bg-[#321414] text-white hover:bg-[#4a2c2c] transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Student Name:</strong> {SelectedEntry.studentName}
                  </p>
                  <p>
                    <strong>Email:</strong> {SelectedEntry.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {SelectedEntry.phone}
                  </p>
                  <p>
                    <strong>Grade:</strong> {SelectedEntry.grade}
                  </p>
                  <p>
                    <strong>Gender:</strong> {SelectedEntry.gender}
                  </p>
                  <p>
                    <strong>Program:</strong> {SelectedEntry.program}
                  </p>
                  <p>
                    <strong>Learning Mode:</strong> {SelectedEntry.learningMode}
                  </p>
                  <p>
                    <strong>Parent Name:</strong>{" "}
                    {SelectedEntry.parentName || "N/A"}
                  </p>
                  <p>
                    <strong>Parent Email:</strong>{" "}
                    {SelectedEntry.parentEmail || "N/A"}
                  </p>
                  <p>
                    <strong>Address:</strong> {SelectedEntry.address}
                  </p>
                  <p>
                    <strong>Additional Info:</strong>{" "}
                    {SelectedEntry.additionalInfo || "N/A"}
                  </p>
                  <p>
                    <strong>Submitted At:</strong>{" "}
                    {new Date(SelectedEntry.createdAt).toLocaleString()}
                  </p>

                  {/* Payment Proof Section */}
                  <div>
                    <strong>Payment Proof:</strong>
                    {SelectedEntry.paymentProof ? (
                      <div className="mt-2">
                       <div className="relative max-h-48 w-48 ">
                         <Image
                          src={SelectedEntry.paymentProof}
                          alt="Payment Proof"
                          fill
                          className="object-contain border rounded"
                        />
                       </div>
                        <a
                          href={SelectedEntry.paymentProof}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-blue-600 underline text-sm hover:text-blue-800"
                        >
                          Download Payment Proof
                        </a>
                      </div>
                    ) : (
                      <p className="text-gray-500 mt-1">
                        No payment proof provided
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BootCamp;
