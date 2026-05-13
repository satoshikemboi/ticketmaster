
const navItems = [
  {
    id: "discover",
    label: "Discover",
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    id: "favourites",
    label: "Favourites",
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: "events",
    label: "Events",
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M16 3v4M8 3v4M3 11h18" />
        <path strokeLinecap="round" d="M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01" />
      </svg>
    ),
  },
  {
    id: "sell",
    label: "Sell",
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L9.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    id: "account",
    label: "Account",
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
];

export default function BottomNav({ active, onChange }) {

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-1px_8px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors"
            >
              {item.icon(isActive)}
              <span
                className={`text-[11px] font-medium leading-none ${
                  isActive ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}