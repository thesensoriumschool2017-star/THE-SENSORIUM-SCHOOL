import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import OurApproachPage from "./pages/OurApproachPage";
import AreasOfSupportPage from "./pages/AreasOfSupportPage";
import MissionPage from "./pages/MissionPage";
import VisionPage from "./pages/VisionPage";
import JoinUsPage from "./pages/JoinUsPage";
import AutoJoinUsPopup from "./components/AutoJoinUsPopup";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import SiteAnnouncementPopup from "./components/SiteAnnouncementPopup";

const SEO_BY_PATH = {
  "/": {
    title: "The Sensorium School | Child Development and Inclusive Learning",
    description:
      "The Sensorium School supports children and families through inclusive learning, therapy-informed development, and community-driven programs.",
  },
  "/about-us": {
    title: "About Us | The Sensorium School",
    description:
      "Learn about The Sensorium School mission, leadership, and commitment to inclusive education and child development.",
  },
  "/our-services": {
    title: "Our Services | The Sensorium School",
    description:
      "Explore services including child development support, counseling, parent guidance, and inclusive growth programs.",
  },
  "/our-approach": {
    title: "Our Approach | The Sensorium School",
    description:
      "Discover our empathy-first approach to child development, inclusive learning, and family-centered support.",
  },
  "/areas-of-support": {
    title: "Areas of Support | The Sensorium School",
    description:
      "See the key areas where we support children and families through education, empowerment, and practical interventions.",
  },
  "/our-mission": {
    title: "Our Mission | The Sensorium School",
    description:
      "Read The Sensorium School mission to build inclusive, equitable, and empowering pathways for children and communities.",
  },
  "/our-vision": {
    title: "Our Vision | The Sensorium School",
    description:
      "Understand The Sensorium School vision for a compassionate, inclusive, and opportunity-driven future.",
  },
  "/join-us": {
    title: "Join Us | The Sensorium School",
    description:
      "Partner with The Sensorium School to contribute, collaborate, and support meaningful child development initiatives.",
  },
  "/gallery": {
    title: "Gallery | The Sensorium School",
    description:
      "View moments from our programs, events, and community work at The Sensorium School.",
  },
  "/blog": {
    title: "Blog | The Sensorium School",
    description:
      "Read updates, insights, and stories from The Sensorium School on inclusion, learning, and social impact.",
  },
};

const DEFAULT_SEO = {
  title: "The Sensorium School",
  description:
    "The Sensorium School supports child development through inclusive, empathy-led education and community engagement.",
};

function setMetaTag(attribute, value, content) {
  if (!content) return;

  const selector = `meta[${attribute}="${value}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isBlogDetail = pathname.startsWith("/blog/");
    const pageSeo = isBlogDetail
      ? {
          title: "Blog Detail | The Sensorium School",
          description:
            "Read detailed articles and updates from The Sensorium School blog.",
        }
      : SEO_BY_PATH[pathname] || DEFAULT_SEO;

    document.title = pageSeo.title;

    setMetaTag("name", "description", pageSeo.description);
    setMetaTag("property", "og:title", pageSeo.title);
    setMetaTag("property", "og:description", pageSeo.description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", `https://thesensoriumschool.com${pathname}`);
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", pageSeo.title);
    setMetaTag("name", "twitter:description", pageSeo.description);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/our-approach" element={<OurApproachPage />} />
        <Route path="/areas-of-support" element={<AreasOfSupportPage />} />
        <Route path="/our-mission" element={<MissionPage />} />
        <Route path="/our-vision" element={<VisionPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <AutoJoinUsPopup />
      <SiteAnnouncementPopup />
    </>
  );
}

export default App;
