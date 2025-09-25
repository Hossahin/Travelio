"use client";
import Loading from "@/components/Loading";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

export default function SocialLogin() {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  const handleGoogleLogin = async (providerName) => {
    setLoading(true);
    try {
      await signIn(providerName, { redirect: false });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Login failed",
      });
    }
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    }
  }, [session, router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <button
        onClick={() => handleGoogleLogin("google")}
        disabled={loading}
        className={`cursor-pointer w-full border border-gray-300 p-3 sm:p-4 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition text-sm sm:text-base ${
          loading ? "cursor-not-allowed" : ""
        }`}
      >
        <FaGoogle className="" />
        Login with Google
      </button>
    </div>
  );
}
