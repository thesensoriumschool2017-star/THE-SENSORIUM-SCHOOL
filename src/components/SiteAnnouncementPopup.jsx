import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import useCmsContent from "../hooks/useCmsContent";

const SESSION_KEY = "sensorium_site_popup_dismissed";

function toYoutubeEmbed(url) {
  if (!url) return "";
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = String(url).match(regExp);
  return match?.[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function SiteAnnouncementPopup() {
  const location = useLocation();
  const fallbackPopup = {
    enabled: false,
    title: "",
    message: "",
    image: "",
    video_url: "",
    button_text: "",
    button_link: "",
  };

  const { content: popupContent } = useCmsContent({
    query:
      '*[_type == "sitePopup" && enabled == true] | order(_updatedAt desc)[0]{enabled, title, message, "image": image.asset->url, video_url, button_text, button_link}',
    fallbackPath: "/content/popup.json",
    fallbackData: fallbackPopup,
    normalize: (data) => data || fallbackPopup,
  });
  const [isVisible, setIsVisible] = useState(false);

  const enabled = Boolean(popupContent.enabled);
  const showPopup = useMemo(() => enabled, [enabled]);

  useEffect(() => {
    if (!showPopup) {
      setIsVisible(false);
      return;
    }

    const dismissed = sessionStorage.getItem(SESSION_KEY) === "1";
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [showPopup, location.pathname]);

  const closePopup = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIsVisible(false);
  };

  if (!isVisible || !showPopup) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/55 px-4 py-6">
      <div className="relative flex h-[86vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-amber-200 bg-[linear-gradient(160deg,#fff8ed_0%,#ffe8d5_100%)] shadow-2xl">
        <div className="sticky top-0 z-10 border-b border-amber-200/60 bg-[#fff3df] px-6 py-4">
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close popup"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-xl font-semibold text-stone-700 hover:bg-stone-100"
          >
            x
          </button>
          <h2 className="pr-12 text-3xl font-bold text-stone-900">
            {popupContent.title || "Important Update"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {popupContent.message ? (
            <p className="whitespace-pre-line text-md leading-relaxed text-stone-700">{popupContent.message}</p>
          ) : null}

          {popupContent.image ? (
            <img
              src={popupContent.image}
              alt={popupContent.title || "Announcement"}
              className="mt-5 max-h-[420px] w-full rounded-2xl border border-amber-200 object-cover"
            />
          ) : null}

          {popupContent.video_url ? (
            <div className="mt-5 overflow-hidden rounded-2xl border border-amber-200">
              {String(popupContent.video_url).includes("youtube.com") || String(popupContent.video_url).includes("youtu.be") ? (
                <iframe
                  src={toYoutubeEmbed(popupContent.video_url)}
                  title={popupContent.title || "Announcement video"}
                  className="h-[360px] w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={popupContent.video_url} controls className="h-[360px] w-full object-contain" />
              )}
            </div>
          ) : null}
        </div>

        {(popupContent.button_text && popupContent.button_link) ? (
          <div className="border-t border-amber-200/70 bg-[#fff2de] px-6 py-4">
            <a
              href={popupContent.button_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
            >
              {popupContent.button_text}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SiteAnnouncementPopup;
