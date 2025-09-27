"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";

function Navbar() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return <Loading />;
  }

  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut({ redirect: false });
      await Swal.fire({
        icon: "success",
        title: "Logout successful",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Logout failed",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  const Navlinks = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-white font-bold bg-gradient-to-r from-blue-400 to-blue-700"
              : "text-gray-700"
          } px-3 py-2 rounded transition-colors`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/packages"
          className={`${
            pathname === "/packages"
              ? "text-white font-bold bg-gradient-to-r from-blue-400 to-blue-700"
              : "text-gray-700"
          } px-3 py-2 rounded transition-colors`}
        >
          Packages
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className={`${
            pathname === "/blog"
              ? "text-white font-bold bg-gradient-to-r from-blue-400 to-blue-700"
              : "text-gray-700"
          } px-3 py-2 rounded transition-colors`}
        >
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar p-0 fixed top-0 left-0 right-0 z-50 shadow bg-white/30 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Navlinks}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          Travelio
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{Navlinks}</ul>
      </div>
      <div className="navbar-end gap-2 pr-4">
        {status == "authenticated" ? (
          <>
            {
              <div className="flex items-center gap-2">
                {/* User name */}

                <Image
                  src={session?.user?.image}
                  alt="user"
                  objectFit="cover"
                  priority
                  className="rounded-full border-2 border-blue-400"
                  height={50}
                  width={50}
                />

                {/* Logout button */}
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-blue-400 rounded-lg 
             hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition-colors duration-200 shadow-sm"
                >
                  Logout
                </button>
              </div>
            }
          </>
        ) : (
          <>
            <div className="flex items-center gap-3">
              {/* Filled button - Login */}
              <Link
                href="/login"
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-blue-400 rounded-lg 
               hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition-colors duration-200 shadow-sm"
              >
                Login
              </Link>

              {/* Outline button - Register */}
              <Link
                href="/register"
                className="cursor-pointer px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-400 rounded-lg 
               hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200 shadow-sm"
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
