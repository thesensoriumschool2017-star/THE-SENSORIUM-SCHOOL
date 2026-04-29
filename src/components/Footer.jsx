function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-stone-900 text-stone-100">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold">THE SENSORIUM SCHOOL</p>
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
              <span>Plot No.94 B Block D, Sector 55,Noida Pin 201307</span>
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
          <ul className="flex items-center gap-3 text-sm text-stone-300">
            <li>
              <a
                href="https://www.instagram.com/thesensoriumschool2017"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-amber-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-amber-100"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61589031300021"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-amber-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-amber-100"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.7V11H7v3h2.2v8h4.3Z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@THESENSORIUMSCHOOL"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-amber-200 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-amber-100"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;