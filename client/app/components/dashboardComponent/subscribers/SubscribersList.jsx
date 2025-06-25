"use client";

import React, { useState } from "react";
import { Trash2, Download } from "lucide-react";
import { useFormContext } from "../../contexts/FormContext";

export default function SubscribersList() {
  const {
    subscribers,
    deleteSubscriber,
    deleting,
    selectedSubscribers,
    handleSubscriberSelect,
    handleSelectAll,
    loading,
  } = useFormContext();

  const [showModal, setShowModal] = useState(false);
  const [modalRecipients, setModalRecipients] = useState([]);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [actionDropdownId, setActionDropdownId] = useState(null);

  const allSelected =
    selectedSubscribers.length === subscribers.length && subscribers.length > 0;

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  // Actions dropdown toggle
  const toggleDropdown = (id) => {
    setActionDropdownId((prev) => (prev === id ? null : id));
  };

  // Delete subscribers (using FormContext)
  const handleDelete = async (emails) => {
    if (
      confirm(`Are you sure you want to delete ${emails.length} subscriber(s)?`)
    ) {
      for (const email of emails) {
        const sub = subscribers.find((s) => s.email === email);
        if (sub?._id) {
          await deleteSubscriber(sub._id);
        }
      }
    }
    setActionDropdownId(null);
  };

  // Modal controls
  const openSendMessageModal = (emails) => {
    setModalRecipients(subscribers.filter((s) => emails.includes(s.email)));
    setShowModal(true);
    setActionDropdownId(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage("");
    setSubject("");
  };

  const handleSend = () => {
    alert(
      `Sending message to:\n${modalRecipients
        .map((r) => `${r.name || "No Name"} <${r.email}>`)
        .join("\n")}\n\nSubject: ${subject}\n\nMessage:\n${message}`
    );
    closeModal();
  };

  const downloadCSV = (emails) => {
    const toDownload = subscribers.filter((s) => emails.includes(s.email));
    const csvRows = [
      ["Name", "Email", "Subscribed At"],
      ...toDownload.map((s) => [
        `"${s.name || "No Name"}"`,
        `"${s.email}"`,
        `"${formatDateTime(s.subscribedAt || s.createdAt) || ""}"`,
      ]),
    ];
    const csvString = csvRows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download =
      emails.length === subscribers.length
        ? "subscribers_all.csv"
        : `subscribers_${emails.join("_")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setActionDropdownId(null);
  };

  return (
    <div className="py-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Subscribers List
      </h2>

      {loading ? (
        // Beautiful Spinner
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#321414] border-solid border-opacity-50" />
        </div>
      ) : subscribers.length === 0 ? (
        // No Subscribers
        <div className="text-center text-gray-500 py-10 text-lg">
          No subscribers found.
        </div>
      ) : (
        <div>
          <div className="mb-4 flex justify-between items-center text-gray-700">
            <div>
              Total Subscribers: <strong>{subscribers.length}</strong> |
              Selected: <strong>{selectedSubscribers.length}</strong>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  downloadCSV(
                    selectedSubscribers.length > 0
                      ? selectedSubscribers
                      : subscribers.map((s) => s.email)
                  )
                }
                className="px-4 py-2 inline-flex items-center rounded-md border border-gray-300 hover:bg-gray-50 text-gray-700"
              >
                <Download className="w-4 h-4 mr-1" /> CSV
              </button>
              <button
                onClick={() => openSendMessageModal(selectedSubscribers)}
                disabled={selectedSubscribers.length === 0}
                className={`px-4 py-2 rounded-md text-white font-semibold transition ${
                  selectedSubscribers.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#321414] hover:bg-[#532f35]"
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => handleDelete(selectedSubscribers)}
                disabled={selectedSubscribers.length === 0}
                className={`px-4 py-2 inline-flex items-center rounded-md text-white font-semibold transition ${
                  selectedSubscribers.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </button>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
          <table className="w-full table-auto border-collapse border border-gray-300 rounded-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 p-3 text-center w-12">
                  <input
                    type="checkbox"
                    checked={
                      selectedSubscribers.length === subscribers.length &&
                      subscribers.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="border border-gray-300 p-3 text-left">Name</th>
                <th className="border border-gray-300 p-3 text-left">Email</th>
               
                <th className="border border-gray-300 p-3 text-left w-48">
                  Subscribed At
                </th>
                <th className="border border-gray-300 p-3 text-center w-16">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[...subscribers]
                .sort((a, b) => {
                  const dateA = new Date(a.subscribedAt || a.createdAt);
                  const dateB = new Date(b.subscribedAt || b.createdAt);
                  return dateB - dateA; // descending (newest first)
                })
                .map(
                  ({
                    _id,
                    name,
                    email,
                    subscribedAt,
                    createdAt,
                    
                  }) => (
                    <tr
                      key={_id}
                      className={`border border-gray-300 hover:bg-gray-50 ${
                        selectedSubscribers.includes(email)
                          ? "bg-[#f4e8e8]"
                          : ""
                      }`}
                    >
                      <td className="border border-gray-300 p-3 text-center">
                        <input
                          type="checkbox"
                          checked={selectedSubscribers.includes(email)} // email is the unique identifier you're tracking in FormContext
                          onChange={() => handleSubscriberSelect(email)}
                        />
                      </td>
                      <td className="p-3 border border-gray-300">
                        {name || "No Name"}
                      </td>
                      <td className="p-3 border border-gray-300">{email}</td>
                     
                      <td className="border border-gray-300 p-3">
                        {formatDateTime(subscribedAt || createdAt)}
                      </td>
                      <td className="border border-gray-300 p-3 text-center relative">
                        <button
                          onClick={() => toggleDropdown(_id)}
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                        >
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </button>
                        {actionDropdownId === _id && (
                          <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                            <button
                              onClick={() => downloadCSV([email])}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              Download Info
                            </button>
                            <button
                              onClick={() => openSendMessageModal([email])}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              Send Message
                            </button>
                            <button
                              onClick={() => handleDelete([email])}
                              className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
          </div>
         

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Send Message
                </h3>
                <div className="mb-3 max-h-28 overflow-auto border border-gray-300 rounded-md p-3 bg-gray-50 text-sm text-gray-700">
                  <strong>Recipients:</strong>
                  <ul className="list-disc list-inside">
                    {modalRecipients.map(({ _id, name, email }) => (
                      <li key={_id}>
                        {name} &lt;{email}&gt;
                      </li>
                    ))}
                  </ul>
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-md p-2 mb-4 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSend}
                    disabled={message.trim() === "" || subject.trim() === ""}
                    className={`px-4 py-2 rounded-md text-white font-semibold transition ${
                      message.trim() === "" || subject.trim() === ""
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#321414] hover:bg-[#532f35]"
                    }`}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
