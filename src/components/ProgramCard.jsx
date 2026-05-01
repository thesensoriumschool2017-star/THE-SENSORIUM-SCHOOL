import { useState } from "react";

function ProgramCard({ title, description, image, details }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailText =
    details ||
    "This is demo detailed content for this service. It explains how sessions are planned, what outcomes families can expect, how progress is monitored, and how the team customizes support for every child based on individual needs.";

  return (
    <>
      <article className="overflow-hidden rounded-3xl border border-amber-200 bg-[linear-gradient(145deg,#fff8e8_0%,#ffeeda_100%)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)]">
        <img src={image} alt={title} className="h-52 w-full object-cover" />
        <div className="space-y-3 p-5">
          <h3 className="text-2xl font-semibold text-stone-800">{title}</h3>
          <p className="text-md leading-relaxed text-stone-600">{description}</p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
          >
            Read More
          </button>
        </div>
      </article>

      {isOpen ? (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 px-4 py-6">
          <div className="relative flex h-[78vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-amber-200 bg-[linear-gradient(160deg,#fff6e8_0%,#ffe7d3_100%)] shadow-2xl">
            <div className="sticky top-0 z-10 border-b border-amber-200/60 bg-[#fff2de] px-6 py-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close details"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-xl font-semibold text-stone-600 transition hover:bg-stone-100 hover:text-stone-900"
              >
                x
              </button>

              <h4 className="pr-10 text-2xl font-bold text-stone-900">{title}</h4>
              <p className="mt-2 text-sm font-medium text-amber-700">Service Details</p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {description ? (
                <p className="whitespace-pre-line text-base leading-relaxed font-medium text-stone-700">
                  {description}
                </p>
              ) : null}
              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-stone-600">
                {detailText}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProgramCard;
