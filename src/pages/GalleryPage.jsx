import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { galleryPhotos } from "../data/siteData";
import useContentJson from "../hooks/useContentJson";

function toYoutubeEmbed(url) {
  if (!url) return "";
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match?.[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
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

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              {galleryContent.subtitle}
            </p>
            <h1 className="text-4xl font-bold">{galleryContent.title}</h1>
          </div>
          <Link
            to="/"
            className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {(galleryContent.items || []).map((item, index) => (
            <figure
              key={item.id || `${item.type}-${index}`}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              {item.type === "video" ? (
                item.video_url ? (
                  <iframe
                    src={toYoutubeEmbed(item.video_url)}
                    title={item.caption || "Gallery video"}
                    className="h-56 w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    controls
                    className="h-56 w-full object-cover"
                    src={item.video}
                  >
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
              <figcaption className="px-4 py-3 text-base text-stone-600">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default GalleryPage;
