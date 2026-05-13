// Discover.jsx
import {Search,Globe} from "lucide-react";

const categories = ["All", "Concerts", "Sports", "Arts", "Theater"];

export default function Discover() {
  return (
    <div className="min-h-screen bg-[#e9e9e9] flex justify-center">
      <div className="w-full max-w-full bg-[#111111] min-h-screen">
        
        {/* Header */}
        <div className="px-5 pt-5">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              ticketmaster
            </h1>

            <button className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center">
              <Globe className="text-white w-4 h-4" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Artist, event, or Venue"
              className="w-full bg-[#232323] border border-gray-600 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-gray-400 outline-none focus:border-blue-500"
            />

            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
          </div>

          {/* Categories */}
          <div className="flex gap-3 mt-5 overflow-x-auto no-scrollbar pb-2">
            {categories.map((item, index) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-lg border text-sm whitespace-nowrap transition-all
                  ${
                    index === 0
                      ? "bg-[#111111] border-blue-500 text-white"
                      : "border-gray-500 text-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-[#ececec] mt-5 rounded-t-3xl min-h-[75vh] px-3 pt-6">
          
          {/* Event Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
              alt="BTS"
              className="w-full h-56 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Card Content */}
            <div className="absolute bottom-4 left-4">
              <h2 className="text-white text-3xl font-extrabold uppercase">
                BTS London
              </h2>

              <button className="mt-3 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg font-semibold">
                Find Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}