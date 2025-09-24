"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Loading from "@/components/Loading";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response.ok) {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
        form.reset();
        // Handle successful login
      } else {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login failed. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
        // Handle login error
      }
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <label
        htmlFor="email"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Email
      </label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <label
        htmlFor="password"
        className="text-gray-700 font-medium text-sm sm:text-base"
      >
        Password
      </label>
      <input
        name="password"
        type="password"
        id="password"
        placeholder="Enter your password"
        className="border border-gray-300 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
      />

      <button
        type="submit"
        disabled={loading}
        className={`cursor-pointer mt-4 bg-blue-500 text-white p-3 sm:p-4 rounded hover:bg-blue-600 transition text-sm sm:text-base font-medium ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Login
      </button>
    </form>
  );
}
