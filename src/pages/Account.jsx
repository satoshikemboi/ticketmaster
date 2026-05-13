import { useState } from "react";

function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        checked ? "bg-blue-500" : "bg-gray-300"
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

function SectionLabel({ children }) {
  return (
    <p className="px-4 pt-5 pb-2 text-sm font-semibold text-gray-800">{children}</p>
  );
}

function Row({ icon, label, right }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-3">
        {icon && <span className="text-gray-500 w-5 flex items-center justify-center">{icon}</span>}
        <span className="text-sm text-gray-800">{label}</span>
      </div>
      <div className="ml-2 shrink-0">{right}</div>
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

function EditIcon() {
  return (
    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 013.182 3.182L7.5 19.213l-4 1 1-4L16.862 3.487z" />
    </svg>
  );
}

// Icons
const icons = {
  notification: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" d="M2 8l10 6 10-6" />
    </svg>
  ),
  bell: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17H9m6 0a6 6 0 10-12 0h12zm0 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  location: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="10" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
    </svg>
  ),
  compass: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  wallet: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  help: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
    </svg>
  ),
  feedback: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  legal: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

export default function Account() {
  const [receiveNotifs, setReceiveNotifs] = useState(true);
  const [locationBased, setLocationBased] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">

      {/* Header */}
      <div className="bg-black px-4 pt-10 pb-5">
        <p className="text-center text-white text-base font-semibold mb-3">My Account</p>
        <p className="text-white text-xl font-bold tracking-wide">TICKET MASTER</p>
        <p className="text-gray-400 text-sm mt-0.5">Sammykayo099@gmail.com</p>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24">

        {/* Notifications */}
        <SectionLabel>Notifications</SectionLabel>
        <div className="bg-white border-t border-b border-gray-200">
          <Row icon={icons.notification} label="My Notifications" right={<ChevronRight />} />
          <Row icon={icons.bell} label="Receive Notifications?" right={<Toggle checked={receiveNotifs} onChange={setReceiveNotifs} />} />
        </div>

        {/* Location Setting */}
        <SectionLabel>Location Setting</SectionLabel>
        <div className="bg-white border-t border-b border-gray-200">
          <Row icon={icons.location} label="My Location" right={<EditIcon />} />
          <Row
            icon={
              <span className="text-lg leading-none">🇺🇸</span>
            }
            label="My Country"
            right={<EditIcon />}
          />
          <Row icon={icons.compass} label="Location Based Content" right={<Toggle checked={locationBased} onChange={setLocationBased} />} />
        </div>

        {/* Preference */}
        <SectionLabel>Preference</SectionLabel>
        <div className="bg-white border-t border-b border-gray-200">
          <Row icon={icons.heart} label="My Favorites" right={<ChevronRight />} />
          <Row icon={icons.wallet} label="Saved Payment Methods" right={<ChevronRight />} />
        </div>

        {/* Help & Guidance */}
        <SectionLabel>Help & Guidance</SectionLabel>
        <div className="bg-white border-t border-b border-gray-200">
          <Row icon={icons.help} label="Need Help?" right={<ChevronRight />} />
          <Row icon={icons.feedback} label="Give Us Feedback" right={<ChevronRight />} />
          <Row icon={icons.shield} label="Privacy" right={<ChevronRight />} />
          <Row icon={icons.legal} label="Legal" right={<ChevronRight />} />
        </div>

      </div>
    </div>
  );
}