import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Our Vision", href: "/our-vision" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Area of Support", href: "/areas-of-support" },
    { label: "Our Services", href: "/our-services" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-amber-200 bg-amber-50.5/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-2 py-4 md:px-2">
        <a href="/" className="text-xl font-bold tracking-tight text-stone-800">
          THE SENSORIUM SCHOOL
        </a>

        <nav className="hidden flex-wrap gap-4 text-base font-semibold text-stone-800 lg:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="hover:text-amber-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/join-us"
            className="rounded-full bg-amber-500 px-4 py-2 text-lg font-semibold text-white transition hover:bg-amber-600"
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
            <span className="text-xl leading-none">{isMenuOpen ? "x" : "≡"}</span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-amber-100 bg-amber-50 px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-2 text-base font-semibold text-stone-700">
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
