import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="mt-16 px-2 md:px-2 lg:px-1">
      <h1 className="font-bold text-3xl text-gray-900 text-center">
        WHY CHOOSE US
      </h1>
      <p className="text-gray-500 text-sm mt-2 text-center">
        Creating unforgettable travel experiences with trusted guides and
        premium services
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Expert Guides */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-blue-100 p-4 rounded-full w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5V9m18 7v-7l-9 5"
              />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">
            Expert Local Guides
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            Travel with professional guides who know every hidden gem and
            cultural story.
          </p>
        </div>

        {/* Tailored Packages */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-green-100 p-4 rounded-full w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">
            Tailored Travel Packages
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            Flexible packages designed to fit your preferences, budget, and
            schedule.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-yellow-100 p-4 rounded-full w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9"
              />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">
            24/7 Customer Support
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            Dedicated support team always available to assist during your
            journey.
          </p>
        </div>

        {/* Safe & Secure */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-red-100 p-4 rounded-full w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0V7a5 5 0 00-10 0v4m20 0v-4a5 5 0 00-10 0v4"
              />
            </svg>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-gray-900">
            Safe & Secure Travel
          </h3>
          <p className="text-gray-500 text-sm mt-1.5">
            We ensure safety, comfort, and trusted arrangements throughout your
            trip.
          </p>
        </div>
      </div>
    </div>
  );
}
