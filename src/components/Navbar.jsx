import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Areas of Support", href: "/areas-of-support" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Our Vision", href: "/our-vision" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-amber-50/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-stone-800">
          UEF Foundation
        </Link>

        <nav className="hidden flex-wrap gap-4 text-xs font-semibold text-stone-700 lg:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="hover:text-amber-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/join-us"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            Join Us
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-amber-200 text-stone-700 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="text-lg">{isMenuOpen ? "x" : "≡"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-amber-100 bg-amber-50 px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-lg px-3 py-2 hover:bg-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
