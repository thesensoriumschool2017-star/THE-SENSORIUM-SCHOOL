function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-stone-900 text-stone-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold">THE SENSORIUM</p>
          <p className="max-w-md text-sm text-stone-300">
            Building stronger communities through education, healthcare, and skill
            empowerment.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Contact</p>
          <ul className="space-y-3 text-sm text-stone-300">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 4.95 5.58 11.84 6.22 12.6a1 1 0 0 0 1.56 0C13.42 20.84 19 13.95 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </span>
              <span>100, Block D, Sector 55, Noida, Uttar Pradesh 201307</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
                  <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .98-.24 11.2 11.2 0 0 0 3.52.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.52 1 1 0 0 1-.24.98l-2.2 2.29Z" />
                </svg>
              </span>
              <a href="tel:+918076353179" className="hover:text-amber-200">
                +91- 80763 53179
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true">
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.4l-9 5.63a1.5 1.5 0 0 1-1.6 0L3 5.4V5Zm0 2.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.74l-8.47 5.3a3.5 3.5 0 0 1-3.06 0L3 7.74Z" />
                </svg>
              </span>
              <a href="mailto:sonika.sami@gmail.com" className="hover:text-amber-200">
                sonika.sami@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-semibold">Follow us</p>
          <ul className="space-y-2 text-sm text-stone-300">
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-br from-pink-500 via-orange-400 to-yellow-300 text-[10px] font-bold text-white">
                I
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                @uef_foundation
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                F
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-amber-300 hover:text-amber-200"
              >
                facebook.com/ueffoundation
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                Y
              </span>
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
