function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-stone-900 text-stone-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Universal Empowerment Foundation</p>
          <p className="max-w-md text-sm text-stone-300">
            Building stronger communities through education, healthcare, and skill
            empowerment.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Follow us</p>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                @uef_foundation
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                facebook.com/ueffoundation
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                youtube.com/@ueffoundation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
