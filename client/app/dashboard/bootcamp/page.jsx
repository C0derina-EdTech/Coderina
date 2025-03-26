"use client";

import React, { Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoPerson, IoSchool, IoTrash } from "react-icons/io5";
import { IoIosSync } from "react-icons/io"; // For loader icon
import { CiMenuKebab } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { FiClock, FiDatabase } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image";
const Page = () => {
  const [messages, setMessages] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // Track the ID being deleted
  const [SelectedMessages, setSelectedMessages] = useState(null); // Modal state
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const handleOpenModal = (message) => {
    setSelectedMessages(message);
  };

  const handleCloseModal = () => {
    setSelectedMessages(null);
  };

  // Fetch registrations
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/boot", { method: "GET" });
      const data = await res.json();
      if (data.success) {
        setMessages(data.data);
      } else {
        toast.error("Failed to fetch messages");
      }
    } catch (error) {
      toast.error("Error fetching messages");
    } finally {
      setLoading(false);
    }
  };

  // Delete registration
  const deleteMessages = async (id) => {
    try {
      setLoadingId(id); // Set loading state for the current registration
      const res = await fetch("/api/boot", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("message deleted successfully");
        setMessages((prev) => prev.filter((reg) => reg._id !== id));
      } else {
        toast.error(data.message || "Failed to delete messages");
      }
    } catch (error) {
      toast.error("Error deleting messages");
    } finally {
      setLoadingId(null);
    }
  };

  // Download individual messages details
  const downloadDetails = (message) => {
    const fileName = `${message.studentName}_${message.parentEmail}_details.txt`;
    const details = `
      Name: ${message.studentName}
       Email: ${message.parentEmail}
       ParentName: ${message.parentName}
      Program: ${message.program}
      LearningMode: ${message.learningMode}
       Age: ${message.age}
        Phone: ${message.phone}
     Gender: ${message.gender}
      Grade: ${message.grade}
    Address: ${message.address}
    AdditionalInfo: ${message.additionalInfo}
     
     
    `;

    // Create a Blob and trigger download
    const blob = new Blob([details], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a link and click it to download
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };


  const downloadImage = (imageUrl) => {
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(() => toast.error("Failed to download image"));
  };

  // Convert registrations to CSV
  const downloadCSV = () => {
    if (messages.length === 0) {
      toast.error("No message to download");
      return;
    }

    const headers = ["Name", "ParentName","Email", "Program", "LearningMode", "Gender","Age", "Grade","Address","AdditionalInfo"];

    const rows = messages.map((msg) => [
      msg.studentName,
      msg.parentName,
      msg.parentEmail,
      msg.program,
      msg.learningMode,
      msg.gender,
      msg.age,
      msg.grade,
      msg.address,
      msg.additionalInfo,

      new Date(msg.createdAt).toLocaleString(),
    ]);

    // Combine headers and rows into a CSV string
    const csvContent = [
      headers.join(","), // Header row
      ...rows.map((row) => row.map((field) => `"${field}"`).join(",")), // Data rows
    ].join("\n");

    // Create a Blob and a downloadable link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.download = "messages.csv";
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

 

  return (
    <div className="max-w-[100rem]  md:px-2 lg:px-4 py-6 overflow-hidden h-full">
      <Toaster />

      <div>
        <h1 className="text-2xl font-bold mb-4">Bootcamp</h1>

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <p  className="text-center text-grey-300 py-4 h-screen">No details found</p>
        ) : (
          <div className="md:max-w-lg lg:max-w-3xl">
            <div className="mb-4 text-right font-medium">
              Total Form: {messages.length}
            </div>

            <div className="flex justify-between items-center mb-4">
              <button
                onClick={downloadCSV}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download CSV
              </button>
            </div>
            <div className="h-full  max-w-lg lg:max-w-3xl  bg-white">
              <table className="hidden md:block w-full border border-gray-300 text-sm text-left bg-white shadow-md rounded-md table-auto">
                <thead className=" text-white uppercase">
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">#</th>
                    <th className="border border-gray-300 p-2 text-nowrap"> Name</th>
                    <th className="border border-gray-300 p-2">parentEmail</th>
                    <th className="border border-gray-300 p-2">Program</th>
                    
                    <th className="border border-gray-300 p-2">Gender</th>
                    <th className="border border-gray-300 p-2">Age</th>
                    <th className="border border-gray-300 p-2">Time sent</th>

<th className=" border p-2" >Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message, index) => (
                   <tr key={message._id} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition">
                   <td className="p-3 text-center border border-gray-300">{index + 1}</td>
                   <td className="p-3 border border-gray-300 text-nowrap">{message.studentName}</td>
                   <td className="p-3 border border-gray-300">{message.parentEmail}</td>
                   <td className="p-3 border border-gray-300">{message.program}</td>
                   
                   <td className="p-3 border border-gray-300">{message.gender}</td>
                   <td className="p-3 border border-gray-300">{message.age}</td>
                   <td className="p-3 border border-gray-300">{new Date(message.createdAt).toLocaleString()}</td>
                   <td className="p-3 border border-gray-300">


                   <div className="">
                         <div className="flex  gap-2">
                           {loadingId === message._id ? (
                             <IoIosSync className="animate-spin text-gray-500 text-xl" />
                           ) : (
                             <div className="flex items-center bg-gray-300 p-2 rounded-xl shadow-md text-red-600 cursor-pointer hover:text-red-800" onClick={() => deleteMessages(message._id)}>
                               <IoTrash /> 
                             </div>
                           )}
                           <div className="flex items-center bg-gray-300 rounded-xl shadow-md p-2 text-blue-500 cursor-pointer hover:text-blue-800" onClick={() => downloadDetails(message)}>
                             <HiDownload />
                           </div>
                           <div className="flex items-center gap-2 text-green-500 cursor-pointer hover:text-green-800 bg-gray-300 shadow-md rounded-xl p-2" onClick={() => handleOpenModal(message)}>
                           <TbListDetails /> 
                           </div>
                         </div>
                       </div>
                    
                   </td>
                 </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cards for small screen */}
            <div className="block md:hidden space-y-3">
              {messages.map((message, index) => (
                <div
                  key={message._id}
                  className="border cursor-pointer border-gray-200 p-2 rounded-lg w-[320px]"
                >
                  <div className="border cursor-pointer border-gray-200 p-2 space-y-1 rounded-lg w-[300px] hover:bg-gray-100 ">
                    <div className="flex items-center justify-start space-x-1">
                      <IoPerson />
                      <p className="">{message.studentName}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1">
                      <IoMail />
                      <p>{message.parentEmail}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1">
                      <IoSchool />
                      <p>{message.program}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1">
                      <IoSchool />
                      <p>{message.learningMode}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-1">
                      <FiClock />
                      <p> {new Date(message.createdAt).toLocaleString()}</p>
                    </div>

                    <div className="flex  items-center justify-start gap-x-3 py-3">
                      {loadingId === message._id ? (
                        <IoIosSync className="animate-spin text-gray-500 text-xl" />
                      ) : (
                        <div
                          className="flex items-center space-x-1 text-red-600 "
                          onClick={() => deleteMessages(message._id)}
                        >
                          <IoTrash className="text-red-600 hover:text-red-800 cursor-pointer text-lg" />
                        </div>
                      )}

                      <div
                        onClick={() => downloadDetails(message)}
                        className="flex items-center space-x-1 text-blue-500 "
                      >
                        <HiDownload
                          className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl"
                          title="Download Details"
                        />
                      </div>

                      <div
                        onClick={() => handleOpenModal(message)}
                        className="flex items-center space-x-1 text-green-500 "
                      >
                        <FiDatabase
                          className="text-green-500 hover:text-green-700 cursor-pointer text-xl"
                          title="Download Details"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <div>
                  <h2
                    colSpan={8}
                    className="text-center border border-gray-300 p-2"
                  >
                    No details found
                  </h2>
                </div>
              )}
            </div>

            {/* Modal */}
            {SelectedMessages && (
              <div  onClick={handleCloseModal} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div onClick={(e) => e.stopPropagation()} className="bg-white pt-[2rem] text-[15px] max-h-[80vh] overflow-y-auto max-w-[40rem] p-6 rounded-lg shadow-lg max-w-md w-full">
                  <h2 className="text-lg font-bold mb-4">Meassage Details</h2>
                  <p>
                    <strong> Name:</strong> {SelectedMessages.studentName}
                  </p>
                  <p>
                    <strong>Parent Name:</strong> {SelectedMessages.parentName}
                  </p>
                  <p>
                    <strong>Email:</strong> {SelectedMessages.parentEmail}
                  </p>
                
                <div className="flex items-center space-x-3">
                <p>
                    <strong>Age:</strong> {SelectedMessages.age}
                  </p>
                  <p>
                    <strong>Grade:</strong> {SelectedMessages.grade}
                  </p>
                  <p>
                    <strong>Gender:</strong> {SelectedMessages.gender}
                  </p>
                </div>

                <div className="flex items-center space-x-3">

                <p>
                    <strong>Program:</strong> {SelectedMessages.program}
                  </p>
                  <p>
                    <strong>LearningMode:</strong> {SelectedMessages.learningMode}
                  </p>
                </div>
                  <p>
                    <strong>Phone:</strong> {SelectedMessages.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {SelectedMessages.address}
                  </p>
                  <p>
                    <strong>Additional Info:</strong> {SelectedMessages.additionalInfo}
                  </p>

                  <h1 className="font-bold">Proof of Payment</h1>

                  <div className="relative mt-4">
        {/* Image Display */}
        <Image
          src={SelectedMessages.paymentProof}
          alt="Payment Proof"
          width={400}
          height={150}
          className="rounded-lg object-contain cursor-pointer"
          onClick={() => setFullScreenImage(SelectedMessages.paymentProof)}
        />

        {/* Floating Download Button */}
        <button
          className="absolute top-2 right-2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          onClick={() => downloadImage(SelectedMessages.paymentProof)}
          title="Download Image"
        >
          <HiDownload className="text-xl" />
        </button>
      </div>


                  <p>
                    <strong>Submitted At:</strong>
                    {new Date(SelectedMessages.createdAt).toLocaleString()}
                  </p>
                  <div className="mt-4 text-right">
                    <button
                      onClick={handleCloseModal}
                      className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}



{fullScreenImage && (
  <div  onClick={() => setFullScreenImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
    <Image
      src={fullScreenImage}
      alt="Full Screen Image"
      width={600}
      height={600}
      className="rounded-lg object-contain"
      onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
    />
    <button
      className="absolute top-4 right-4 text-white text-xl font-bold bg-red-500 p-2 rounded-full"
      onClick={() => setFullScreenImage(null)}
    >
      Close
    </button>
  </div>
)}

          </div>
        )}
      </div>



    </div>
  );
};

export default Page;
