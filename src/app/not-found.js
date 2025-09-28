import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        404 Not Found
      </h1>
      <p className="text-center text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to home
      </Link>
    </div>
  );
}
