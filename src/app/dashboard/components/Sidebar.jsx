"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaPlus } from "react-icons/fa";
import { ArrowLeft, Menu, X } from "lucide-react";
import { IoClose } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = (
    <>
      <li>
        <Link
          href="/dashboard/my-profile"
          className={`${
            pathname === "/dashboard/my-profile"
              ? "font-bold text-blue-500"
              : "text-gray-700"
          } px-3 py-2 rounded transition-colors flex items-center gap-2`}
        >
          <FaUser /> My Profile
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/add-packages"
          className={`${
            pathname === "/dashboard/add-packages"
              ? "font-bold text-blue-500"
              : "text-gray-700"
          } px-3 py-2 rounded transition-colors flex items-center gap-2`}
        >
          <FaPlus /> Add Packages
        </Link>
      </li>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-md rounded-r-2xl p-4">
        <Link
          href="/"
          className="flex items-center text-blue-500 font-bold mb-4 bg-blue-100 p-1.5 rounded-full w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <ul className="flex flex-col gap-2">{sidebarItems}</ul>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-2 left-2 z-50 p-2 text-gray-700 bg-white rounded shadow flex gap-1.5 font-bold"
      >
        <Menu className="w-6 h-6" /> Dashboard
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          {/* Drawer Content */}
          <aside className="w-56 md:w-64 bg-white shadow-lg p-4 z-50 animate-slideIn">
            <div className="flex justify-between mb-6">
              <Link
                href="/"
                className="flex items-center text-blue-500 font-bold bg-blue-100 p-1.5 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="right-4 text-blue-500 bg-blue-100 p-1.5 rounded-full"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            <ul className="flex flex-col gap-2">{sidebarItems}</ul>
          </aside>
        </div>
      )}
    </>
  );
}
