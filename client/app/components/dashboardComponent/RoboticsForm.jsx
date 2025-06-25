"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoTrash } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { useFormContext } from "../contexts/FormContext";

const RoboticsForm = () => {
  const {
    robotics,
    loading,
    loadingId,
    selected,
    setSelected,
    deleteRobotics,
  } = useFormContext();

  const handleOpenModal = (message) => setSelected(message);
  const handleCloseModal = () => setSelected(null);

  const downloadDetails = (message) => {
    const fileName = `${message.studentName}_${message.parentEmail}_details.txt`;
    const details = `
      Name: ${message.studentName}
      Email: ${message.studentEmail}
      ParentName: ${message.parentName}
      ParentEmail: ${message.parentEmail}
      Program: ${message.program}
      Device: ${message.device}
      Gender: ${message.gender}
      Age: ${message.age}
      Grade: ${message.grade}
      Address: ${message.address}
      Phone: ${message.phone}`;

    const blob = new Blob([details], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadCSV = () => {
    if (robotics.length === 0) {
      toast.error("No data to download");
      return;
    }

    const headers = [
      "Name",
      "Email",
      "ParentName",
      "ParentEmail",
      "Program",
      "Device",
      "Gender",
      "Age",
      "Grade",
      "Address",
      "Phone",
      "CreatedAt"
    ];

    const rows = robotics.map((msg) => [
      msg.studentName,
      msg.studentEmail,
      msg.parentName,
      msg.parentEmail,
      msg.program,
      msg.device,
      msg.gender,
      msg.age,
      msg.grade,
      msg.address,
      msg.phone,
      new Date(msg.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((field) => `"${field}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "robotics_form.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="md:px-2 lg:px-4 py-6 overflow-hidden h-full">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">First Robotics</h1>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : robotics.length === 0 ? (
        <p className="text-center text-gray-500 py-4 h-screen">No details found</p>
      ) : (
        <>
          <div className="mb-4 text-right font-medium">
            Total Form: {robotics.length}
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              onClick={downloadCSV}
              className="px-4 py-2 inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700"
            >
              Download CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm bg-white shadow-md rounded-md">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="border border-gray-300 p-2">#</th>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Grade</th>
                  <th className="border border-gray-300 p-2">Gender</th>
                  <th className="border border-gray-300 p-2">Age</th>
                  <th className="border border-gray-300 p-2">Time Sent</th>
                  <th className="border border-gray-300 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {robotics.map((message, index) => (
                  <tr key={message._id} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition">
                    <td className="p-3 text-center border border-gray-300">{index + 1}</td>
                    <td className="p-3 border border-gray-300 whitespace-nowrap">{message.studentName}</td>
                    <td className="p-3 border border-gray-300">{message.studentEmail}</td>
                    <td className="p-3 border border-gray-300">{message.grade}</td>
                    <td className="p-3 border border-gray-300">{message.gender}</td>
                    <td className="p-3 border border-gray-300">{message.age}</td>
                    <td className="p-3 border border-gray-300">{new Date(message.createdAt).toLocaleString()}</td>
                    <td className="p-3 border border-gray-300">
                      <div className="flex gap-2">
                        {loadingId === message._id ? (
                          <FaSpinner className="animate-spin text-gray-500 text-xl" />
                        ) : (
                          <>
                            <div
                              onClick={() => deleteRobotics(message._id)}
                              className="bg-gray-200 p-2 rounded-xl text-red-600 hover:text-red-800 cursor-pointer"
                            >
                              <IoTrash />
                            </div>
                            <div
                              onClick={() => downloadDetails(message)}
                              className="bg-gray-200 p-2 rounded-xl text-blue-600 hover:text-blue-800 cursor-pointer"
                            >
                              <HiDownload />
                            </div>
                            <div
                              onClick={() => handleOpenModal(message)}
                              className="bg-gray-200 p-2 rounded-xl text-green-600 hover:text-green-800 cursor-pointer"
                            >
                              <TbListDetails />
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selected && (
            <div onClick={handleCloseModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white pt-[2rem] text-[15px] max-h-[80vh] overflow-y-auto max-w-[40rem] p-6 rounded-lg shadow-lg max-w-md w-full"
              >
                <h2 className="text-lg font-bold mb-4">Message Details</h2>
                <p><strong>Name:</strong> {selected.studentName}</p>
                <p><strong>Email:</strong> {selected.studentEmail}</p>
                <p><strong>Parent Name:</strong> {selected.parentName}</p>
                <p><strong>Parent Email:</strong> {selected.parentEmail}</p>
                <div className="flex items-center space-x-3">
                  <p><strong>Age:</strong> {selected.age}</p>
                  <p><strong>Grade:</strong> {selected.grade}</p>
                  <p><strong>Gender:</strong> {selected.gender}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <p><strong>Device:</strong> {selected.device}</p>
                  <p><strong>Program:</strong> {selected.program}</p>
                  <p><strong>Phone:</strong> {selected.phone}</p>
                </div>
                <p><strong>Address:</strong> {selected.address}</p>
                <p><strong>Submitted At:</strong> {new Date(selected.createdAt).toLocaleString()}</p>
                <div className="mt-4 text-right">
                  <button onClick={handleCloseModal} className="bg-black text-white px-4 py-2 rounded hover:bg-red-600">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RoboticsForm;
