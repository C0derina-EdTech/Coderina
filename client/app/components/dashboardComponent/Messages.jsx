"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoTrash } from "react-icons/io5";
import { IoIosSync } from "react-icons/io";
import { useFormContext } from "../contexts/FormContext";
import { HiDownload } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import MessagesH from "./MessagesH";
import { X } from "lucide-react";

const Messages = () => {
  const { messages, loading, loadingId, deleteMessage } = useFormContext();

  const [SelectedMessages, setSelectedMessages] = useState(null);

  const handleOpenModal = (message) => setSelectedMessages(message);
  const handleCloseModal = () => setSelectedMessages(null);

  const downloadDetails = (message) => {
    const fileName = `${message.name}_${message.email}_details.txt`;
    const details = `
      Name: ${message.name}
      Email: ${message.email}
      subject: ${message.subject}
      reason: ${message.reason}
      Message: ${message.message}
    `;
    const blob = new Blob([details], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadCSV = () => {
    if (messages.length === 0) {
      toast.error("No message to download");
      return;
    }

    const headers = [
      "Name",
      "Email",
      "subject",
      "reason",
      "Message",
      "Created At",
    ];
    const rows = messages.map((msg) => [
      msg.name,
      msg.email,
      msg.subject,
      msg.reason,
      msg.message,
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
    link.download = "messages.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full md:px-2 lg:px-4 py-6 overflow-hidden h-full">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

      <div>
        <MessagesH />
      </div>

      {loading ? (
        <div className="py-8 flex justify-center items-center h-96">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#321414]"></div>
        </div>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-500 py-4 h-screen">
          No message found
        </p>
      ) : (
        <div className="">
          <div className="mb-4 flex justify-between items-center text-gray-700">
            <div>
              Total Messages: <strong>{messages.length}</strong> |
            </div>
            <div className="flex gap-2">
              <button
                onClick={downloadCSV}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-[#321414]"
              >
                Download CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full table-auto border-collapse  border border-gray-300 text-sm text-left bg-white shadow-md rounded-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">#</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className=" p-2">Subject</th>
                  <th className=" p-2">Reason</th>
                  <th className="p-2">Time Sent</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => (
                  <tr key={msg._id} className="odd:bg-gray-50 even:bg-gray-100">
                    <td className="p-3 text-center">{idx + 1}</td>
                    <td className="p-3">{msg.name}</td>
                    <td className="p-3">{msg.email}</td>
                    <td className="p-3">{msg.subject}</td>
                    <td className="p-3">{msg.reason || "No Reason"}</td>
                    <td className="p-3">
                      {new Date(msg.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3 flex gap-2">
                      {loadingId === msg._id ? (
                        <IoIosSync className="animate-spin text-gray-500 text-xl" />
                      ) : (
                        <div
                          onClick={() => deleteMessage(msg._id)}
                          className="bg-gray-300 text-red-600 p-2 rounded hover:text-red-800 cursor-pointer"
                        >
                          <IoTrash />
                        </div>
                      )}
                      <div
                        onClick={() => downloadDetails(msg)}
                        className="bg-gray-300 text-blue-500 p-2 rounded hover:text-blue-800 cursor-pointer"
                      >
                        <HiDownload />
                      </div>
                      <div
                        onClick={() => handleOpenModal(msg)}
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
          {SelectedMessages && (
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 md:mt-[4rem] flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md md:max-w-xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-bold mb-4">Message Details</h2>
                  <button
                    onClick={handleCloseModal}
                    className=" p-2 rounded-full bg-[#321414] text-white hover:bg-[#4a2c2c] transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p>
                  <strong>Name:</strong> {SelectedMessages.name}
                </p>
                <p>
                  <strong>Email:</strong> {SelectedMessages.email}
                </p>
                <p>
                  <strong>Subject:</strong> {SelectedMessages.subject}
                </p>
                <p>
                  <strong>Reason:</strong> {SelectedMessages.reason}
                </p>
                <p>
                  <strong>Message:</strong> {SelectedMessages.message}
                </p>
                <p>
                  <strong>Submitted At:</strong>{" "}
                  {new Date(SelectedMessages.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messages;
