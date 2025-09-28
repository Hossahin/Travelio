"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaPlus } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

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
    <aside className="w-64 bg-white shadow-md rounded-r-4xl p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <ul className="flex flex-col gap-2">{sidebarItems}</ul>
    </aside>
  );
}
