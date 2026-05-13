
// Events.jsx
import { Globe, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    date: "SAT, 11 JUL, 8:00 PM",
    title: "BTS WORLD TOUR 'ARIRANG ' IN MUNICH",
    venue: "Allianz Arena",
    tickets: "x2",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "SUN - MAY 24, 2026 : 8:00 PM",
    title: "BTS WORLD TOUR 'ARIRANG ' IN LAS VEGAS",
    venue: "MGM Grand Garden Arena",
    tickets: "x4",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#efefef] flex justify-center">
      <div className="w-full max-w-full bg-[#efefef] min-h-screen">
        
        {/* Header */}
        <div className="bg-[#0f0f0f] px-5 pt-5 pb-0">
          
          {/* Top Row */}
          <div className="flex items-center justify-between text-white">
            <div className="w-12" />

            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg">My Events</h1>

              <button className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center">
                <Globe className="w-3.5 h-3.5" />
              </button>
            </div>

            <button className="text-sm font-semibold">Help</button>
          </div>

          {/* Tabs */}
          <div className="flex mt-6">
            <button className="flex-1 text-white text-sm font-bold pb-4 border-b-[3px] border-white">
              UPCOMING (3)
            </button>

            <button className="flex-1 text-gray-300 text-sm font-bold pb-4 border-b border-gray-700">
              PAST (0)
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="px-3 py-5 space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#151515] overflow-hidden shadow-md"
            >
              
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-3">
                
                {/* Date */}
                <div className="inline-block bg-[#0f1a33] px-2 py-1">
                  <p className="text-white text-xs font-extrabold uppercase tracking-wide">
                    {event.date}
                  </p>
                </div>

                {/* Title */}
                <h2 className="text-white text-[20px] font-extrabold uppercase leading-tight mt-3">
                  {event.title}
                </h2>

                {/* Divider */}
                <div className="w-32 h-0.5 bg-[#3d1111] mt-8 mb-5" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-white text-lg">
                    {event.venue}
                  </p>

                  <div className="flex items-center gap-1 text-white">
                    <Ticket className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {event.tickets}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
