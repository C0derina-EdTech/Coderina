"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  MdGroup,
  MdDashboard,
  MdAssignment,
  MdGrade,
  MdMessage,
  MdEventNote,
  MdCloudUpload,
  MdHowToReg,
  MdCampaign,
  MdSchedule,
  MdSettings,
  MdPeople,
  MdSubscriptions,
} from "react-icons/md";
import profile from "../../../public/codelogo.png";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const ADMIN_PRIMARY_COLOR = "#321414"; // Dark maroon
const ADMIN_BG_COLOR = "white";

const DashSide = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };

  const notificationRef = useRef(null);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowSidebar(false);
        setShowNotification(false);
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotification(false);
      }
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setShowProfileMenu(false);
      }
      if (
        showSidebar &&
        window.innerWidth < 768 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSidebar]);

  // Admin sidebar links
  const links = [
    { icon: <MdDashboard />, name: "Dashboard", path: "/admincodeboard/overview" },
    { icon: <MdEventNote />, name: "Events", path: "/admincodeboard/events" },
    { icon: <MdPeople />, name: "Bootcamp", path: "/admincodeboard/bootcamp" },
    { icon: <MdSubscriptions />, name: "Subscribers", path: "/admincodeboard/subscribers" },
    { icon: <MdAssignment />, name: "Robotics", path: "/admincodeboard/robotics" },
    { icon: <MdMessage />, name: "Messages", path: "/admincodeboard/messages" },
    { icon: <MdEventNote />, name: "Forms", path: "/admincodeboard/registrations" },
   
  ];

  return (
    <div className="h-screen">
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          {/* Add your loader component here */}
          <div className="loader">Loading...</div>
        </div>
      )}

      <div className="flex flex-1 h-screen relative">
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`
            overflow-hidden h-screen fixed md:static inset-y-0 left-0 bottom-0 z-40
            flex flex-col
            bg-white
            text-[${ADMIN_PRIMARY_COLOR}]
            transform
            shadow-md
            transition-transform duration-300 ease-in-out
            ${
              showSidebar
                ? "translate-x-0 w-16 md:w-16 lg:w-64"
                : "-translate-x-full md:translate-x-0 w-16 md:w-16 lg:w-64"
            }
          `}
          style={{ color: ADMIN_PRIMARY_COLOR }}
        >
          {/* Logo & Title */}
          <div
            className="flex items-center px-4 py-4 border-b space-x-2"
            style={{ borderColor: "#ddd" }}
          >
            <div className="relative w-8 h-8 rounded p-2">
              <Image
                src={profile}
                alt="portfolio"
                fill
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="hidden lg:block text-xl font-bold" style={{ color: ADMIN_PRIMARY_COLOR }}>
              ADMIN
            </h1>
          </div>

          {/* Sidebar Links */}
          <nav className="flex-1 overflow-y-auto mt-4 md:mt-12">
            <ul className="space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`
                        flex items-center
                        py-3 px-4
                        rounded
                        hover:bg-[${ADMIN_PRIMARY_COLOR}]
                        hover:text-white
                        transition-colors
                        ${isActive ? `bg-[${ADMIN_PRIMARY_COLOR}] text-white` : `${ADMIN_PRIMARY_COLOR}`}
                      `}
                      style={{
                        color: isActive ? "white" : ADMIN_PRIMARY_COLOR,
                        backgroundColor: isActive ? ADMIN_PRIMARY_COLOR : "transparent",
                      }}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="hidden lg:inline-block ml-3 text-sm font-medium">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 h-full overflow-y-scroll">
          {showNotification && (
            <div
              ref={notificationRef}
              className="absolute top-20 right-6 w-72 rounded-xl shadow-xl z-50 bg-white border border-[#321414] overflow-hidden"
            >
              <div className="bg-[#321414] text-white px-4 py-3 rounded-t-xl">
                <h2 className="text-lg font-semibold">Notifications</h2>
              </div>
              <ul className="px-4 py-2 text-[#321414] text-sm space-y-2">
                <li className="border-b pb-1">📌 You have a new message</li>
                <li className="border-b pb-1">🎯 Your challenge is live</li>
                <li>✅ Task completed successfully</li>
              </ul>
            </div>
          )}

          <main className="">
            <Header
              toggleSidebar={toggleSidebar}
              setShowNotification={setShowNotification}
              showNotification={showNotification}
              showProfileMenu={showProfileMenu}
              setShowProfileMenu={setShowProfileMenu}
              profile={profileMenuRef}
            />
            <div className="px-2 md:px-4 lg:px-8 max-w-[70rem] 2xl:max-w-[100rem] mx-auto">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashSide;
