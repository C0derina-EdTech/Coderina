"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IoEllipsisHorizontal,
  IoTrash,
  IoVideocamOutline,
} from "react-icons/io5";
import { IoIosSync } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FiEdit, FiMessageSquare } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { SlNote, SlEarphones } from "react-icons/sl";
import ConfirmationModal from "./ConfirmationModal";
import DropdownButton from "../dashboardComponent/DropdownButton";
import { useFormContext } from "../contexts/FormContext";

const DashEvents = () => {
  const router = useRouter();

  const {
    events,
    loading,
    deleting,
    formatTime,
    isModalOpen,
    eventToDelete,
    setIsModalOpen,
    setEventToDelete,
    fetchEvents,
     handleDelete,
  } = useFormContext();

  const [showOptions, setShowOptions] = useState(null);

  const dropdownItems = [
    { label: "Post", href: "/admincodeboard/post-event", icon: RiMenu2Fill },
    // { label: "Audio", href: "#", icon: SlEarphones },
    // { label: "Video", href: "#", icon: IoVideocamOutline },
    // { label: "Thread", href: "#", icon: FiMessageSquare },
    // { label: "New note", href: "#", icon: SlNote },
  ];

  const handleToggleOptions = (id) => {
    setShowOptions((prev) => (prev === id ? null : id));
  };

  const handleShowModal = (id) => {
    setEventToDelete(id);
    setIsModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setEventToDelete(null);
  };

  // const handleDelete = () => {
  //   if (eventToDelete)  handleDelete(eventToDelete);
  // };

  
  if (loading) {
    return (
      <div className="py-8 flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#321414]"></div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 bg-white h-full lg:mx-[2.6rem]">
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl font-bold text-gray-700">Events</h1>
        <div className="flex gap-3">
          <Link
            href="/events"
            className="py-2 px-3 rounded-md hover:bg-[#ccce] bg-[#EEE]"
          >
            View site
          </Link>
          <DropdownButton buttonText="New Event" items={dropdownItems} />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        {!events?.length ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-600 text-lg font-semibold">
              There is no event yet.
            </p>
          </div>
        ) : (
          events.map((event, index) => (
            <div
              className="md:p-7 border-b border-gray-300 hover:bg-gray-500 hover:text-white"
              key={index}
            >
              <div className="py-5 md:py-2 flex sm:flex-row flex-col sm:justify-between gap-10">
                <div className="flex gap-4 items-center w-full">
                  <div className="p-1 bg-[#EEEE] rounded-md">{event.color}</div>
                  <div className="text-xs flex flex-col gap-2">
                    <h3 className="font-bold text-sm">{event.title}</h3>
                    <div className="flex space-x-2">
                      <p className="uppercase font-semibold">
                        {event.startDate}
                      </p>
                      <p className="uppercase font-semibold">
                        - {event.endDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full uppercase text-xs">
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">{formatTime(event.createdAt)}</p>
                    <p>posted</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-bold">{event.startTime}</p>
                    <p>START</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-bold">{event.endTime}</p>
                    <p>END</p>
                  </div>

                  <div className="p-3 border rounded-lg hover:bg-red-100">
                    <MdArrowOutward />
                  </div>

                  <div
                    onClick={() => handleToggleOptions(event._id)}
                    className="p-3 hover:bg-[#EEEE] rounded-md"
                  >
                    <IoEllipsisHorizontal />

                    {showOptions === event._id && (
                      <div className="mt-2 flex items-center justify-center">
                        <button className="p-2 text-red-500 hover:bg-red-100 rounded cursor-pointer">
                          {deleting === event._id ? (
                            <IoIosSync className="animate-spin text-gray-500 text-xl" />
                          ) : (
                            <IoTrash
                              size={22}
                              onClick={() => handleShowModal(event._id)}
                            />
                          )}
                        </button>
                        <Link
                          href={`/admincodeboard/events/${event._id}`}
                          className="p-2 text-blue-500 hover:bg-blue-100 rounded mt-1"
                        >
                          <FiEdit size={20} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this event?"
      />
    </div>
  );
};

export default DashEvents;
