function PageDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 top-20 -z-10">
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(120%_120%_at_0%_100%,#d8ddbc_0%,transparent_50%),radial-gradient(120%_120%_at_100%_100%,#edd6a4_0%,transparent_50%)]" />

      <div className="absolute left-6 top-6 grid grid-cols-5 gap-4 opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={`dot-l-${i}`} className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        ))}
      </div>
      <div className="absolute right-8 top-8 grid grid-cols-4 gap-4 opacity-55">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={`dot-r-${i}`} className="h-1.5 w-1.5 rounded-full bg-[#efb383]" />
        ))}
      </div>

      <svg className="absolute left-8 top-[25%] h-56 w-72 opacity-55" viewBox="0 0 280 220" fill="none">
        <path d="M20 180 C 90 70, 170 220, 260 120" stroke="#f0af43" strokeDasharray="9 10" strokeWidth="3.2" />
        <path d="M88 82l48-22-20 47-14-17-25 15Z" fill="#f7cc97" stroke="#eba05a" strokeWidth="2.6" />
      </svg>

      <svg className="absolute right-8 bottom-[12%] h-44 w-64 opacity-75" viewBox="0 0 260 180" fill="none">
        <path d="M25 150a105 105 0 0 1 210 0" stroke="#dfa34e" strokeWidth="6" />
        <path d="M50 150a80 80 0 0 1 160 0" stroke="#ebc284" strokeWidth="6" />
        <path d="M74 150a56 56 0 0 1 112 0" stroke="#f3dab2" strokeWidth="6" />
      </svg>

      <svg className="absolute right-20 top-12 h-28 w-28 opacity-35" viewBox="0 0 100 100" fill="#e1c39e">
        <path d="M36 8c9 0 12 10 19 10s13-10 22-8c7 2 10 11 8 18s-11 10-11 17 9 11 10 19-4 16-12 18c-9 2-15-7-22-6-8 1-11 11-20 12-8 1-16-4-18-12-1-9 8-13 8-20s-10-11-11-20C8 28 14 20 22 18c6-2 8-10 14-10Z" />
      </svg>
      <svg className="absolute right-56 bottom-[20%] h-36 w-36 opacity-40" viewBox="0 0 100 100" fill="#bdb7d0">
        <path d="M36 8c9 0 12 10 19 10s13-10 22-8c7 2 10 11 8 18s-11 10-11 17 9 11 10 19-4 16-12 18c-9 2-15-7-22-6-8 1-11 11-20 12-8 1-16-4-18-12-1-9 8-13 8-20s-10-11-11-20C8 28 14 20 22 18c6-2 8-10 14-10Z" />
      </svg>
      <svg className="absolute left-[18%] bottom-[18%] h-28 w-28 opacity-35" viewBox="0 0 100 100" fill="#efc1a3">
        <path d="M36 8c9 0 12 10 19 10s13-10 22-8c7 2 10 11 8 18s-11 10-11 17 9 11 10 19-4 16-12 18c-9 2-15-7-22-6-8 1-11 11-20 12-8 1-16-4-18-12-1-9 8-13 8-20s-10-11-11-20C8 28 14 20 22 18c6-2 8-10 14-10Z" />
      </svg>

      <svg className="absolute left-2 bottom-[4%] h-52 w-28 opacity-60" viewBox="0 0 90 170" fill="none">
        <path d="M46 158c0-44 2-82 3-132" stroke="#aebe7d" strokeWidth="3" />
        <ellipse cx="30" cy="56" rx="14" ry="26" fill="#cad5a2" transform="rotate(-28 30 56)" />
        <ellipse cx="60" cy="92" rx="14" ry="26" fill="#cad5a2" transform="rotate(24 60 92)" />
      </svg>
      <svg className="absolute right-24 bottom-[6%] h-44 w-24 opacity-60" viewBox="0 0 90 170" fill="none">
        <path d="M46 158c0-44 2-82 3-132" stroke="#aebe7d" strokeWidth="3" />
        <ellipse cx="30" cy="56" rx="14" ry="26" fill="#cad5a2" transform="rotate(-28 30 56)" />
        <ellipse cx="60" cy="92" rx="14" ry="26" fill="#cad5a2" transform="rotate(24 60 92)" />
      </svg>

      <svg className="absolute right-[22rem] top-52 h-16 w-28 opacity-45" viewBox="0 0 140 80" fill="none">
        <path d="M30 60h70a20 20 0 0 0 0-40 28 28 0 0 0-53-5A18 18 0 0 0 30 60Z" fill="#eadfcb" />
      </svg>
      <svg className="absolute left-6 top-20 h-14 w-24 opacity-40" viewBox="0 0 140 80" fill="none">
        <path d="M30 60h70a20 20 0 0 0 0-40 28 28 0 0 0-53-5A18 18 0 0 0 30 60Z" fill="#eadfcb" />
      </svg>

      <div className="absolute left-40 top-[13%] h-3 w-3 rounded-full bg-[#eb9f78]/90" />
      <div className="absolute left-80 top-[17%] h-3 w-3 rounded-full bg-[#bfb7d0]/90" />
      <div className="absolute right-72 top-[11%] h-3 w-3 rounded-full bg-[#eb9f78]/90" />
      <div className="absolute right-36 top-[33%] h-3 w-3 rounded-full bg-[#bfb7d0]/90" />
      <div className="absolute left-[22%] top-[62%] h-3 w-3 rounded-full bg-[#efc185]/90" />
      <div className="absolute right-[28%] top-[66%] h-3 w-3 rounded-full bg-[#efc185]/90" />
      <div className="absolute left-52 bottom-[16%] h-4 w-4 rounded-full bg-[#eb9f78]/85" />
      <div className="absolute right-44 bottom-[26%] h-4 w-4 rounded-full bg-[#eb9f78]/80" />
      <div className="absolute left-20 bottom-[30%] h-3 w-3 rounded-full bg-[#bfb7d0]/85" />
      <div className="absolute left-[38%] bottom-[36%] h-3 w-3 rounded-full bg-[#eb9f78]/80" />
      <div className="absolute right-[18%] bottom-[42%] h-3 w-3 rounded-full bg-[#bfb7d0]/85" />
    </div>
  );
}

export default PageDecoration;

