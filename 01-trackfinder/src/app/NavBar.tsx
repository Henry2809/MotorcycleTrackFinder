"use client";
import { FaHome, FaCalendarAlt, FaBell, FaUser, FaFire } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  return (
        <nav className="tab-bar w-full p-4 flex justify-center items-center text-black fixed top-0 bg-gray-100 opacity-100 shadow-md z-50">
        <div className="flex space-x-6">
                <Link href="/" className="tab-button flex flex-col items-center">
                        <FaHome />
                        <span>Home</span>
                </Link>

                <Link href="/events" className="tab-button flex flex-col items-center">
                        <FaCalendarAlt />
                        <span>Events</span>
                </Link>

                <Link href="/hotspots" className="tab-button flex flex-col items-center">
                        <FaFire />
                        <span>Hotspots</span>
                </Link>

                <Link href="/notifications" className="tab-button flex flex-col items-center">
                        <FaBell />
                        <span>Notifications</span>
                        </Link>
                <Link href="/Profile" className="tab-button flex flex-col items-center">
                        <FaUser />
                        <span>Profile</span>
                </Link>
        </div>
      </nav>
      
  );
}
