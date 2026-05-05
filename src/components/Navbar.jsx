import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCmsContent from "../hooks/useCmsContent";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesMenuRef = useRef(null);

  const { content: servicesPageSettings } = useCmsContent({
    query: '*[_type == "servicesPage"][0]{show_blog}',
    fallbackPath: "/content/services-page.json",
    fallbackData: { show_blog: true },
    normalize: (data) => data || { show_blog: true },
  });

  const showBlog = servicesPageSettings?.show_blog !== false;

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Mission", href: "/our-mission" },
    { label: "Our Vision", href: "/our-vision" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Area of Support", href: "/areas-of-support" },
  ];

  useEffect(() => {
    const onClickOutside = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setIsServicesMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-200/80 bg-amber-50/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-3 py-4 md:px-4">
        <a href="/" className="whitespace-nowrap text-xl font-bold tracking-tight text-stone-800">
          THE SENSORIUM SCHOOL
        </a>

        <nav className="hidden flex-nowrap items-center gap-3 text-sm font-semibold text-stone-800 xl:gap-4 xl:text-base lg:flex">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="whitespace-nowrap hover:text-amber-700">
              {link.label}
            </Link>
          ))}

          {showBlog ? (
            <div className="relative" ref={servicesMenuRef}>
              <button
                type="button"
                onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-1 whitespace-nowrap hover:text-amber-700"
              >
                Our Services
                <span className="text-xs">{isServicesMenuOpen ? "^" : "v"}</span>
              </button>

              {isServicesMenuOpen ? (
                <div className="absolute left-0 top-8 min-w-180px rounded-xl border border-amber-200 bg-amber-50 p-2 shadow-lg">
                  <Link
                    to="/our-services"
                    className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-amber-100"
                    onClick={() => setIsServicesMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/blog"
                    className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-amber-100"
                    onClick={() => setIsServicesMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              ) : null}
            </div>
          ) : (
            <Link to="/our-services" className="whitespace-nowrap hover:text-amber-700">
              Our Services
            </Link>
          )}

          <Link to="/gallery" className="whitespace-nowrap hover:text-amber-700">
            Gallery
          </Link>
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
            <span className="text-xl leading-none">{isMenuOpen ? "x" : "="}</span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-amber-100/90 bg-amber-50/95 px-4 py-3 backdrop-blur-md lg:hidden">
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
            <Link
              to="/our-services"
              className="rounded-lg px-3 py-2 hover:bg-amber-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/gallery"
              className="rounded-lg px-3 py-2 hover:bg-amber-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            {showBlog ? (
              <Link
                to="/blog"
                className="rounded-lg px-3 py-2 hover:bg-amber-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
    <div className="h-[76px] md:h-[84px]" />
    </>
  );
}

export default Navbar;
