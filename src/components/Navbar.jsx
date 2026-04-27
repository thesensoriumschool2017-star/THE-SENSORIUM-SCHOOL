import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About Us", href: "/about-us", isRoute: true },
    { label: "Our Services", href: "/our-services", isRoute: true },
    { label: "Our Approach", href: "/our-approach", isRoute: true },
    { label: "Areas of Support", href: "/areas-of-support", isRoute: true },
    { label: "Our Mission", href: "/our-mission", isRoute: true },
    { label: "Our Vision", href: "/our-vision", isRoute: true },
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
          <Link to="/gallery" className="hover:text-amber-700">
            Gallery
          </Link>
        </nav>

        <Link
          to="/join-us"
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
