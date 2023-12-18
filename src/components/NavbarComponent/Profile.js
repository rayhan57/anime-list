"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import avatar from "./avatar.png";

const Profile = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  if (showDropdown) {
    document.addEventListener("mousedown", closeDropdown);
  }

  return (
    <div ref={dropdownRef}>
      <Image
        className="w-9 h-9 rounded-full cursor-pointer"
        src={user ? user.image : avatar}
        alt="User profile"
        width={300}
        height={300}
        onClick={() => setShowDropdown(!showDropdown)}
      />

      <div
        className={`z-10 ${
          showDropdown ? "block" : "hidden"
        } absolute right-0 md:right-5 lg:right-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        {user && (
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>{user.name}</div>
            <div className="text-xs font-medium truncate hover:">
              {user.email}
            </div>
          </div>
        )}

        <div className="py-1">
          {user && (
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm hover:bg-slate-100"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Dashboard
            </Link>
          )}

          <Link
            href={user ? "/api/auth/signout" : "/api/auth/signin"}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {user ? "Sign out" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
