"use client";

import React, { useRef } from "react";
import {
  HiOutlineBell,
  HiOutlineUserCircle,
  HiOutlineLogout,
} from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = ({
  toggleSidebar,
  showNotification,
  setShowNotification,
  setShowProfileMenu,
  showProfileMenu,
  profile,
}) => {
  const { data: session } = useSession();

  const username = session?.user?.username || session?.user?.name || "Coderina";
  const userImage = session?.user?.image || "/logo.png";

  return (
    <header className="sticky top-0 w-full z-10 text-[#321414] bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <GiHamburgerMenu
          className="h-6 w-6 mr-4 cursor-pointer block md:hidden"
          onClick={toggleSidebar}
        />
        <h1 className="text-lg font-semibold ">
          Welcome, <span className="uppercase text-gray-500">{username}</span> 
        </h1>
      </div>
      <div className="flex items-center">
        {/* Notifications */}
        {/* <div
          className="relative mr-4 cursor-pointer"
          onClick={() => setShowNotification(!showNotification)}
        >
          <HiOutlineBell className="h-9 w-10" />
          <span className="absolute -top-1 -right-1 text-white bg-[#321414] text-xs font-bold px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div> */}

        <div className="relative">
          <Image
            src={userImage}
            alt="User Profile"
            width={32}
            height={32}
            className="rounded-full cursor-pointer object-cover"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />

          {showProfileMenu && (
            <div
              ref={profile}
              className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl py-3 z-50 animate-fade-in-up transition-all duration-300 ease-out"
            >
              {/* <Link
                href="/admincodeboard/profile"
                className="block px-5 py-2 text-sm text-[#321414] hover:bg-[#f1e9e6] transition-colors"
              >
                Profile
              </Link> */}

              <Link
                href="/"
                className="px-5 py-2 text-sm text-[#321414] hover:bg-[#f1e9e6] flex items-center transition-colors"
              >
                <HiOutlineLogout className="h-5 w-5 mr-2 text-[#321414]" />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
