import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { galleryPhotos } from "../data/siteData";
import useCmsContent from "../hooks/useCmsContent";
import bannerImage from "../assets/banner.webp";
import founderImage from "../assets/main.jpeg";

const INITIAL_VISIBLE_ITEMS = 9;
const DEFAULT_GALLERY_IMAGES = [
  { src: bannerImage, alt: "The Sensorium School banner" },
  { src: founderImage, alt: "The Sensorium School founder" },
];

function toYoutubeEmbed(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const pathParts = parsed.pathname.split("/").filter(Boolean);
      const pathType = pathParts[0];

      if (pathType === "watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : "";
      }

      if (pathType === "shorts" || pathType === "live" || pathType === "embed") {
        const id = pathParts[1];
        return id ? `https://www.youtube.com/embed/${id}` : "";
      }
    }

    return "";
  } catch {
    return "";
  }
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

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  if (!current) return null;

  const isVideo = current.type === "video";
  const youtubeEmbed = current.video_url ? toYoutubeEmbed(current.video_url) : "";
  const usesYoutube = Boolean(current.video_url && isYoutubeUrl(current.video_url) && youtubeEmbed);
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
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 px-4 py-8" onClick={onClose}>
      <div className="relative w-full max-w-4xl rounded-2xl bg-[linear-gradient(155deg,#fff7ea_0%,#ffe8d4_100%)] p-4 shadow-2xl md:p-6" onClick={(e) => e.stopPropagation()}>
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
              videoSource ? (
                <video ref={videoRef} controls className="h-90 w-full object-contain" src={videoSource}>
                  Your browser does not support video playback.
                </video>
              ) : (
                <div className="flex h-90 w-full items-center justify-center bg-stone-100 px-4 text-center text-stone-600">
                  Video cannot be embedded. Please use a direct video file URL or a valid YouTube link.
                </div>
              )
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

      <div className={"rounded-2xl p-2 " + (expanded ? "max-h-190 overflow-y-auto" : "overflow-hidden")}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {visibleItems.map((item, index) => (
            <button
              key={item.id || `${item.type}-${index}`}
              type="button"
              onClick={() => onOpen(item.id)}
              className="overflow-hidden rounded-2xl bg-[linear-gradient(145deg,#fff8ec_0%,#ffe9d8_100%)] text-left shadow-sm"
            >
              {item.type === "video" ? (
                item.video_url && isYoutubeUrl(item.video_url) && toYoutubeEmbed(item.video_url) ? (
                  <iframe
                    src={toYoutubeEmbed(item.video_url)}
                    title={item.caption || "Gallery video"}
                    className="h-56 w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  getVideoSource(item) ? (
                    <video className="h-56 w-full object-cover" src={getVideoSource(item)} muted>
                      Your browser does not support video playback.
                    </video>
                  ) : (
                    <div className="flex h-56 w-full items-center justify-center bg-stone-200 px-3 text-center text-sm text-stone-600">
                      Invalid video link
                    </div>
                  )
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
  const fallbackPhotos = galleryPhotos.length ? galleryPhotos : DEFAULT_GALLERY_IMAGES;

  const fallbackGallery = {
    title: "Photo Gallery",
    subtitle: "Foundation Moments",
    items: fallbackPhotos.map((photo, index) => ({
      id: `fallback-${index}`,
      type: "image",
      caption: photo.alt,
      image: photo.src,
    })),
  };

  const { content: galleryContent, isLoading } = useCmsContent({
    query:
      '*[_type == "galleryPage"] | order(_updatedAt desc){title, subtitle, "items": items[]{_key, id, type, caption, "image": image.asset->url, "video": video.asset->url, video_url}}',
    fallbackPath: "/content/gallery.json",
    fallbackData: fallbackGallery,
    startWithFallback: false,
    normalize: (data) => {
      const docs = Array.isArray(data) ? data : data ? [data] : [];
      if (!docs.length) return fallbackGallery;

      const latestDoc = docs[0] || {};
      const incoming = docs.flatMap((doc) => (Array.isArray(doc?.items) ? doc.items : []));
      const normalizedItems = [...incoming]
        .reverse()
        .map((item, index) => {
          const hasImage = Boolean(item?.image);
          const hasVideo = Boolean(item?.video || item?.video_url);
          let inferredType = item?.type || (hasVideo ? "video" : hasImage ? "image" : "");

          // If selected type and uploaded field mismatch, auto-correct it.
          if (inferredType === "video" && !hasVideo && hasImage) inferredType = "image";
          if (inferredType !== "video" && !hasImage && hasVideo) inferredType = "video";

          return {
            id: item?.id || item?._key || `gallery-${index + 1}`,
            type: inferredType,
            caption: item?.caption || `${inferredType === "video" ? "Video" : "Image"} ${index + 1}`,
            image: item?.image || "",
            video: item?.video || "",
            video_url: item?.video_url || "",
          };
        })
        .filter((item) => item.type && (item.image || item.video || item.video_url));

      if (!normalizedItems.length) return fallbackGallery;
      return {
        title: latestDoc?.title || fallbackGallery.title,
        subtitle: latestDoc?.subtitle || fallbackGallery.subtitle,
        items: normalizedItems,
      };
    },
  });

  const items = useMemo(() => galleryContent?.items || [], [galleryContent?.items]);

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
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              {galleryContent?.subtitle || fallbackGallery.subtitle}
            </p>
            <h1 className="text-4xl font-bold">{galleryContent?.title || fallbackGallery.title}</h1>
          </div>
          <Link to="/" className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100">
            Back to Home
          </Link>
        </div>

        {isLoading ? (
          <p className="text-md text-stone-600">Loading gallery...</p>
        ) : (
          <>
            <MediaSection title="Images" items={imageItems} emptyMessage="No images added yet." onOpen={openModal} />
            <MediaSection title="Videos" items={videoItems} emptyMessage="No videos added yet." onOpen={openModal} />
          </>
        )}
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



