import { useState } from "react";

function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

function SectionRow({ icon, label, sublabel, right, onClick }) {
  const inner = (
    <div
      className={`flex items-center justify-between px-4 py-3 bg-white ${
        onClick ? "cursor-pointer active:bg-gray-50" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon && <span className="text-gray-400 shrink-0">{icon}</span>}
        <div className="min-w-0">
          <p className="text-sm text-gray-800 leading-tight">{label}</p>
          {sublabel && (
            <p className="text-xs text-gray-400 mt-0.5 leading-snug">{sublabel}</p>
          )}
        </div>
      </div>
      {right && <div className="ml-3 shrink-0">{right}</div>}
    </div>
  );
  return inner;
}

export default function Favourites() {
  const [trulySend, setTrulySend] = useState(true);
  const [showClaim, setShowClaim] = useState(true);
  const [pastEvents, setPastEvents] = useState("0");

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center">
      <div className="w-full max-w-full bg-gray-100 min-h-screen flex flex-col font-sans">

        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 text-white"
          style={{ background: "linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 100%)" }}
        >
          <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-base font-semibold tracking-wide">My Account</h1>
          <div className="w-7" />
        </div>

        {/* Avatar & Balance */}
        <div className="flex flex-col items-center py-5 bg-white mb-2 border-b border-gray-200">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-300 mb-2 bg-blue-100 flex items-center justify-center">
            {/* Simple avatar illustration */}
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <rect width="64" height="64" fill="#dbeafe" />
              <circle cx="32" cy="22" r="10" fill="#93c5fd" />
              <ellipse cx="32" cy="52" rx="16" ry="12" fill="#93c5fd" />
              {/* face */}
              <circle cx="32" cy="22" r="9" fill="#fde68a" />
              {/* hair */}
              <ellipse cx="32" cy="14" rx="10" ry="5" fill="#1e293b" />
              <circle cx="24" cy="18" r="4" fill="#1e293b" />
              <circle cx="40" cy="18" r="4" fill="#1e293b" />
              {/* shirt */}
              <path d="M16 64 Q16 52 32 52 Q48 52 48 64Z" fill="#3b82f6" />
            </svg>
          </div>
          <p className="text-blue-500 font-semibold text-sm mb-1">Fujimoto123</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Balance:</span>
            <span className="text-sm font-semibold text-gray-800">$12</span>
            <button className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* How to Tutorials */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">How to Tutorials</p>
          <div className="bg-white divide-y divide-gray-100 rounded-none border-t border-b border-gray-200">
            <SectionRow
              label="How to Get Gmail App Password"
              right={<ChevronRight />}
              onClick={() => {}}
            />
            <SectionRow
              label="How to Add Google Maps Embed Link"
              right={<ChevronRight />}
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Join Our Channel */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Join Our Channel</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">
            <SectionRow
              label="Join our Telegram channel for updates"
              right={<ChevronRight />}
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Email and Event Settings */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Email and Event Settings</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">

            {/* Connect Gmail */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-800">Connect Gmail for email services</p>
                <span className="text-xs text-green-600 font-medium ml-2 shrink-0">Connected</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Tickets transfer uses your Gmail to send emails{" "}
                <span className="text-blue-400 cursor-pointer">(more info)</span>
              </p>
            </div>

            {/* Truly Send Email */}
            <div className="px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm text-gray-800 font-medium">Truly Send Email?</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                    <span className="text-yellow-500">⚠</span> Use this feature with caution. You must first connect Gmail for email services to use this feature. When enabled, real emails will be sent with your Gmail account; when disabled, we only show a success message.{" "}
                    <span className="text-blue-400 cursor-pointer">(see why)</span>
                  </p>
                </div>
                <Toggle checked={trulySend} onChange={setTrulySend} />
              </div>
            </div>

            {/* Show Claim Ticket Button */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm text-gray-800">Show Claim Ticket Button in mail</p>
                  <p className="text-xs text-gray-400 mt-0.5">Display a "Claim Tickets" button in email</p>
                </div>
                <Toggle checked={showClaim} onChange={setShowClaim} />
              </div>
            </div>

            {/* Set Past Events Count */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 flex items-center gap-2">
                  <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Set Past Events Count</p>
                    <p className="text-xs text-gray-400">Number of past events to display</p>
                  </div>
                </div>
                <select
                  value={pastEvents}
                  onChange={(e) => setPastEvents(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  {["0","1","2","3","5","10"].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Control Panel */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Control Panel</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">
            <SectionRow label="Buy Credit on telegram (buy bulk for discount)" right={<ChevronRight />} onClick={() => {}} />
            <SectionRow label="Contact Support Only (telegram only)" right={<ChevronRight />} onClick={() => {}} />
          </div>
        </div>

        {/* Ticket Area */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Ticket Area</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">
            <SectionRow label="Create a Ticket ($2 per create)" right={<ChevronRight />} onClick={() => {}} />
            <SectionRow label="Edit a Ticket info ($1 per edit)" right={<ChevronRight />} onClick={() => {}} />
            <SectionRow label="Delete tickets" right={<ChevronRight />} onClick={() => {}} />
            <SectionRow label="Show/hide tickets on My Events page" right={<ChevronRight />} onClick={() => {}} />
          </div>
        </div>

        {/* Discover Page Management */}
        <div className="mb-2">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Discover Page Management</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">
            <SectionRow label="Manage Discover Page Settings" right={<ChevronRight />} onClick={() => {}} />
          </div>
        </div>

        {/* Account Controls */}
        <div className="mb-4">
          <p className="px-4 py-2 text-xs text-gray-500 font-medium uppercase tracking-wider">Account Controls</p>
          <div className="bg-white divide-y divide-gray-100 border-t border-b border-gray-200">
            <SectionRow label="Change Password" right={<ChevronRight />} onClick={() => {}} />
            <SectionRow label="Log out" right={<ChevronRight />} onClick={() => {}} />
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="mt-auto flex flex-col items-center py-4 bg-gray-100 border-t border-gray-200">
          <button className="flex flex-col items-center text-gray-500 hover:text-gray-700 transition-colors">
            <div className="w-9 h-9 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-xs mt-1 text-gray-500">Back to Main App</span>
          </button>
        </div>

      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}