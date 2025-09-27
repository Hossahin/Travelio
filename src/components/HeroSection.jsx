import React from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div>
      <div className="">
        <video
          src="/video/70463-538463758_small.mp4"
          autoPlay
          loop
          muted
          className="rounded-lg w-full h-auto"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
          Find Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 text-center mt-4">
          Discover new places, experience new cultures, and create lasting
          memories.
        </p>
      </div>

      <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-6 rounded-xl shadow-xl w-[90%] max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* box 1 - Keyword */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Keyword</label>
            <input
              type="text"
              placeholder="Search for your destination"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* box 2 - Destination */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Destination
            </label>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="" disabled selected>
                Select Destination
              </option>
              <option value="sreemangal">Sreemangal</option>
              <option value="sundarbans">Sundarbans</option>
              <option value="coxsbazar">Cox's Bazar</option>
              <option value="saint_martin">Saint Martin's Island</option>
              <option value="rangamati">Rangamati</option>
              <option value="bandarban">Bandarban</option>
              <option value="kuakata">Kuakata</option>
              <option value="dhaka">Dhaka City</option>
              <option value="chittagong">Chittagong City</option>
              <option value="paharpur">Paharpur</option>
              <option value="mahastangarh">Mahasthangarh</option>
              <option value="jaflong">Jaflong</option>
              <option value="kishoreganj">Kishoreganj</option>
              <option value="bogra">Bogra</option>
              <option value="patenga">Patenga Beach</option>
              <option value="foy's_lake">Foy's Lake</option>
              <option value="ratargul">Ratargul Swamp Forest</option>
              <option value="shajek_valley">Shajek Valley</option>
              <option value="tila">Tanguar Haor</option>
              <option value="modhupur_forest">Modhupur Forest</option>
            </select>
          </div>

          {/* box 3 - Date */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* box 4 - Search Button */}
          <div className="flex items-end">
            <button className="cursor-pointer flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full transition">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
