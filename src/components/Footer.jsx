import registrationCertificateQr from "../assets/registraion-certifiate.jpeg.png";
import schoolLogo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="border-t border-[#f0c46b] bg-[#f6f1e4] text-stone-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:px-8 md:py-14">
        <div className="grid gap-6 md:gap-8 xl:grid-cols-[1.15fr_1fr_0.95fr_0.95fr] xl:gap-6">
          <section className="flex flex-col items-center justify-center text-center xl:pr-4">
            <img
              src={schoolLogo}
              alt="The Sensorium School Logo"
              className="h-24 w-auto object-contain sm:h-28 md:h-32"
            />
            <h3 className="mt-4 text-2xl font-bold tracking-tight leading-tight sm:text-3xl">
              THE SENSORIUM SCHOOL
            </h3>

            <div className="mt-4 flex items-center gap-3 text-amber-600 sm:gap-4">
              <span className="h-0.5 w-20 bg-amber-500 sm:w-20" />
              <p className="text-xs font-semibold uppercase tracking-wide sm:text-sm">Of Child Development</p>
              <span className="h-0.5 w-20 bg-amber-500 sm:w-20" />
            </div>

            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-700 sm:text-lg">
              Building stronger communities through education, healthcare, and skill empowerment.
            </p>
          </section>

          <section className="rounded-[30px] border border-[#f2d39a] bg-[#f8f3e7] p-5 sm:p-6 md:p-8">
            <h4 className="text-xl font-bold uppercase tracking-tight sm:text-2xl">Address</h4>
            <div className="mt-3 h-0.5 w-24 bg-amber-500" />

            <ul className="mt-6 divide-y divide-[#eadfcb] text-base text-stone-700 sm:text-md">
              <li className="flex items-start gap-4 py-5 first:pt-0">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white sm:h-11 sm:w-11">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 4.95 5.58 11.84 6.22 12.6a1 1 0 0 0 1.56 0C13.42 20.84 19 13.95 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>
                </span>
                <span>Plot No. 94 B Block D, Sector 55, Noida Pin 201307</span>
              </li>

              <li className="flex items-center gap-4 py-5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white sm:h-11 sm:w-11">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .98-.24 11.2 11.2 0 0 0 3.52.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.52 1 1 0 0 1-.24.98l-2.2 2.29Z" />
                  </svg>
                </span>
                <a href="tel:+918076353179" className="hover:text-amber-700">+91- 80763 53179</a>
              </li>

              <li className="flex items-center gap-4 py-5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white sm:h-11 sm:w-11">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.4l-9 5.63a1.5 1.5 0 0 1-1.6 0L3 5.4V5Zm0 2.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.74l-8.47 5.3a3.5 3.5 0 0 1-3.06 0L3 7.74Z" />
                  </svg>
                </span>
                <a href="mailto:sonika.sami@gmail.com" className="hover:text-amber-700 break-all">sonika.sami@gmail.com</a>
              </li>
            </ul>

            <div className="mt-2 border-t border-amber-300 pt-5">
              <div className="flex items-start gap-4 text-base sm:text-md">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white sm:h-11 sm:w-11">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 11.41 3.29 3.3-1.42 1.42-3.87-3.88V6h2Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-stone-800">Monday - Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          <article className="overflow-hidden rounded-[30px] border border-[#f2d39a] bg-white p-4 shadow-[0_12px_30px_rgba(80,60,20,0.12)] md:p-5">
            <div className="mx-auto w-fit rounded-full bg-linear-to-r from-[#f9b006] to-[#f28d00] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white sm:px-5 sm:text-sm">
              Location
            </div>
            <h5 className="mt-8 text-center text-xl font-bold uppercase leading-tight sm:text-xl">Scan for Address</h5>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-amber-500" />
            <a
              href="https://share.google/wpYBdnEuGVQU8Vfwa"
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-5 block w-fit rounded-[26px] border-2 border-amber-500 p-2"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fshare.google%2FwpYBdnEuGVQU8Vfwa"
                alt="QR code for address"
                className="h-36 w-36 rounded-2xl sm:h-44 sm:w-44"
              />
            </a>
            <p className="mt-4 rounded-2xl bg-[#f2eadf] px-4 py-3 text-center text-sm font-medium text-stone-700 sm:text-base">
              Open Maps instantly
            </p>
          </article>

          <article className="overflow-hidden rounded-30px border border-[#f2d39a] bg-white p-4 shadow-[0_12px_30px_rgba(80,60,20,0.12)] md:p-5">
            <div className="mx-auto w-fit rounded-full bg-linear-to-r from-[#ea3a86] to-[#d91f69] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white sm:px-5 sm:text-sm">
              Verification
            </div>
            <h5 className="mt-4 text-center text-xl font-bold uppercase leading-tight sm:text-xl">Registration Certificate</h5>
            <div className="mx-auto mt-3 h-1 w-20 rounded bg-[#e5307a]" />
            <div className="mx-auto mt-5 w-fit rounded-[26px] border-2 border-[#eb4a8a] p-2">
              <img
                src={registrationCertificateQr}
                alt="Registration certificate QR"
                className="h-36 w-36 rounded-2xl object-cover sm:h-44 sm:w-44"
              />
            </div>
            <p className="mt-4 rounded-2xl bg-[#f5e6ee] px-4 py-3 text-center text-sm font-medium text-stone-700 sm:text-base">
              Scan to verify certificate
            </p>
          </article>
        </div>

        <div className="mt-10 border-t border-[#efb55f] pt-5">
          <div className="flex flex-col items-center gap-4 text-sm sm:text-base md:flex-row md:justify-between">
            <p className="text-center text-stone-700 md:text-left">© 2026 The Sensorium School. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <span className="font-semibold uppercase tracking-wide text-stone-700">Follow Us</span>
              <a href="https://www.instagram.com/thesensoriumschool2017" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E1306C] text-white sm:h-11 sm:w-11">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589031300021" target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white sm:h-11 sm:w-11">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true"><path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.7V11H7v3h2.2v8h4.3Z"/></svg>
              </a>
              <a href="https://www.youtube.com/@THESENSORIUMSCHOOL" target="_blank" rel="noreferrer" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white sm:h-11 sm:w-11">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden="true"><path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>
              </a>
            </div>

            <p className="text-center font-semibold italic text-stone-800 md:text-right">Nurturing Minds, Shaping Futures.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
