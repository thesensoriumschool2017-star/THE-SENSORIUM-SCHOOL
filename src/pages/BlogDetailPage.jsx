import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageDecoration from "../components/PageDecoration";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import useCmsContent from "../hooks/useCmsContent";

function toSafeSlug(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toYoutubeEmbed(url) {
  if (!url) return "";
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = String(url).match(regExp);
  return match?.[1] ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function BlogDetailPage() {
  const { slug } = useParams();

  const fallback = {
    title: "Our Blog",
    subtitle: "",
    posts: [],
  };

  const { content, isLoading } = useCmsContent({
    query:
      '*[_type == "blogPage"][0]{title, subtitle, "posts": posts[]{slug, title, publish_date, published, "cover_image": cover_image.asset->url, excerpt, sections[]{heading, text, "image": image.asset->url, youtube_url}}}',
    fallbackPath: "/content/blog.json",
    fallbackData: fallback,
    normalize: (data) => data || fallback,
  });

  const post = useMemo(() => {
    const posts = Array.isArray(content.posts) ? content.posts : [];
    const safeRouteSlug = toSafeSlug(slug || "");
    return posts.find((item) => {
      if (item?.published === false) return false;
      const itemSlug = toSafeSlug(item?.slug || item?.title || "");
      return itemSlug === safeRouteSlug;
    });
  }, [content.posts, slug]);
  const visibleSections = useMemo(() => {
    const sections = Array.isArray(post?.sections) ? post.sections : [];
    return sections.filter((section) =>
      Boolean(
        section?.heading?.trim?.() ||
          section?.text?.trim?.() ||
          section?.image ||
          section?.youtube_url
      )
    );
  }, [post?.sections]);

  if (isLoading) {
    return (
      <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
        <Navbar />
      <PageDecoration />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-14 md:px-6">
          <p className="text-md text-stone-600">Loading blog...</p>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <PageDecoration />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-14 md:px-6">
        <div className="mb-8">
          <Link to="/blog" className="text-sm font-semibold text-amber-700 hover:underline">
            Back to Blogs
          </Link>
          <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
          {post.publish_date ? <p className="mt-2 text-sm font-medium text-amber-700">{post.publish_date}</p> : null}
        </div>

        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt={post.title || "Blog cover"}
            className="mb-8 max-h-[420px] w-full rounded-3xl border border-amber-200 object-cover"
          />
        ) : null}

        {post.excerpt ? <p className="mb-6 text-lg leading-relaxed text-stone-700">{post.excerpt}</p> : null}

        <div className="space-y-6">
          {visibleSections.map((section, index) => (
            <section key={`${section?.heading || "section"}-${index}`} className="rounded-2xl border border-amber-200 bg-[#fff7ea] p-5">
              {section?.heading ? <h2 className="text-2xl font-semibold text-stone-900">{section.heading}</h2> : null}
              {section?.text ? <p className="mt-3 whitespace-pre-line text-md leading-relaxed text-stone-700">{section.text}</p> : null}
              {section?.image ? (
                <img src={section.image} alt={section.heading || "Blog section"} className="mt-4 max-h-80 w-full rounded-xl object-cover" />
              ) : null}
              {section?.youtube_url ? (
                <div className="mt-4 overflow-hidden rounded-xl">
                  <iframe
                    src={toYoutubeEmbed(section.youtube_url)}
                    title={section.heading || "Blog video"}
                    className="h-72 w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default BlogDetailPage;


