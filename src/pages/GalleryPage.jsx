import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { galleryPhotos } from "../data/siteData";
import useContentJson from "../hooks/useContentJson";

const INITIAL_VISIBLE_ITEMS = 9;

function toYoutubeEmbed(url) {
  if (!url) return "";
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match?.[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function isYoutubeUrl(url = "") {
  return /youtube\.com|youtu\.be/.test(url);
}

function getVideoSource(item) {
  if (!item) return "";
  if (item.video) return item.video;
  if (item.video_url && !isYoutubeUrl(item.video_url)) return item.video_url;
  return "";
}

function MediaModal({ items, currentIndex, onClose, onPrev, onNext }) {
  const current = items[currentIndex];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!current || current.type !== "video") return;
    const el = videoRef.current;
    if (!el) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, [current]);

  if (!current) return null;

  const isVideo = current.type === "video";
  const youtubeEmbed = current.video_url ? toYoutubeEmbed(current.video_url) : "";
  const usesYoutube = Boolean(current.video_url && isYoutubeUrl(current.video_url));
  const videoSource = getVideoSource(current);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-8">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[linear-gradient(155deg,#fff7ea_0%,#ffe8d4_100%)] p-4 shadow-2xl md:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-stone-300 bg-[#fff0dd] px-3 py-1 text-sm font-semibold text-stone-700 hover:bg-[#ffe5c5]"
        >
          Close
        </button>

        <div className="mt-8 overflow-hidden rounded-xl bg-stone-100">
          {isVideo ? (
            usesYoutube ? (
              <iframe
                src={youtubeEmbed}
                title={current.caption || "Gallery video"}
                className="h-90 w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video ref={videoRef} controls className="h-90 w-ull object-contain" src={videoSource}>
                Your browser does not support video playback.
              </video>
            )
          ) : (
            <img
              src={current.image}
              alt={current.caption || "Gallery image"}
              className="h-90 w-full object-contain"
            />
          )}
        </div>

        <p className="mt-3 text-sm text-stone-600">{current.caption}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onPrev}
              className="rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
            >
              Next
            </button>
          </div>

          {isVideo ? (
            <button
              type="button"
              onClick={togglePlayPause}
              disabled={usesYoutube}
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MediaSection({ title, items, emptyMessage, onOpen }) {
  const [expanded, setExpanded] = useState(false);

  if (!items.length) {
    return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-3 text-stone-600">{emptyMessage}</p>
      </section>
    );
  }

  const canToggle = items.length > INITIAL_VISIBLE_ITEMS;
  const visibleItems = expanded ? items : items.slice(0, INITIAL_VISIBLE_ITEMS);

  return (
    <section className="mt-12">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      <div
        className={
          "rounded-2xl border border-amber-100 p-2 " +
          (expanded ? "max-h-190 overflow-y-auto" : "overflow-hidden")
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {visibleItems.map((item, index) => (
            <button
              key={item.id || `${item.type}-${index}`}
              type="button"
              onClick={() => onOpen(item.id)}
                    className="overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#fff8ec_0%,#ffe9d8_100%)] text-left shadow-sm"
            >
              {item.type === "video" ? (
                item.video_url && isYoutubeUrl(item.video_url) ? (
                  <iframe
                    src={toYoutubeEmbed(item.video_url)}
                    title={item.caption || "Gallery video"}
                    className="h-56 w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video className="h-56 w-full object-cover" src={getVideoSource(item)} muted>
                    Your browser does not support video playback.
                  </video>
                )
              ) : (
                <img
                  src={item.image}
                  alt={item.caption || "Gallery image"}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                />
              )}
              <p className="px-4 py-3 text-base text-stone-600">{item.caption}</p>
            </button>
          ))}
        </div>
      </div>

      {canToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-4 rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      ) : null}
    </section>
  );
}

function GalleryPage() {
  const fallbackGallery = {
    title: "Photo Gallery",
    subtitle: "Foundation Moments",
    items: galleryPhotos.map((photo, index) => ({
      id: `fallback-${index}`,
      type: "image",
      caption: photo.alt,
      image: photo.src,
    })),
  };

  const galleryContent = useContentJson("/content/gallery.json", fallbackGallery);
  const items = useMemo(() => galleryContent.items || [], [galleryContent.items]);

  const imageItems = useMemo(() => items.filter((item) => item.type !== "video" && item.image), [items]);
  const videoItems = useMemo(() => items.filter((item) => item.type === "video" && (item.video || item.video_url)), [items]);

  const allForModal = useMemo(() => [...imageItems, ...videoItems], [imageItems, videoItems]);
  const [activeId, setActiveId] = useState(null);

  const activeIndex = useMemo(() => allForModal.findIndex((item) => item.id === activeId), [allForModal, activeId]);

  const openModal = (id) => setActiveId(id);
  const closeModal = () => setActiveId(null);

  const goPrev = () => {
    if (!allForModal.length || activeIndex < 0) return;
    const nextIndex = (activeIndex - 1 + allForModal.length) % allForModal.length;
    setActiveId(allForModal[nextIndex].id);
  };

  const goNext = () => {
    if (!allForModal.length || activeIndex < 0) return;
    const nextIndex = (activeIndex + 1) % allForModal.length;
    setActiveId(allForModal[nextIndex].id);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">{galleryContent.subtitle}</p>
            <h1 className="text-4xl font-bold">{galleryContent.title}</h1>
          </div>
          <Link to="/" className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100">
            Back to Home
          </Link>
        </div>

        <MediaSection title="Images" items={imageItems} emptyMessage="No images added yet." onOpen={openModal} />
        <MediaSection title="Videos" items={videoItems} emptyMessage="No videos added yet." onOpen={openModal} />
      </main>
      <Footer />
      <WhatsAppFloat />

      {activeIndex >= 0 ? (
        <MediaModal items={allForModal} currentIndex={activeIndex} onClose={closeModal} onPrev={goPrev} onNext={goNext} />
      ) : null}
    </div>
  );
}

export default GalleryPage;
