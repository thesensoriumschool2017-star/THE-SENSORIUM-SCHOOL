import { useMemo } from "react";
import { Link } from "react-router-dom";
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

function BlogPage() {
  const fallback = {
    title: "Our Blog",
    subtitle: "Insights, stories and updates from The Sensorium School",
    posts: [],
  };

  const { content } = useCmsContent({
    query:
      '*[_type == "blogPage"][0]{title, subtitle, "posts": posts[]{slug, title, publish_date, published, "cover_image": cover_image.asset->url, excerpt, sections[]{heading, text, "image": image.asset->url, youtube_url}}}',
    fallbackPath: "/content/blog.json",
    fallbackData: fallback,
    normalize: (data) => data || fallback,
  });

  const posts = useMemo(() => {
    const list = Array.isArray(content.posts) ? content.posts : [];
    const published = list.filter((post) => post?.published !== false);
    return [...published].sort((a, b) => {
      const aTime = Date.parse(a?.publish_date || "") || 0;
      const bTime = Date.parse(b?.publish_date || "") || 0;
      if (aTime !== bTime) return bTime - aTime;
      // If dates are equal/missing, show latest-added first.
      return published.indexOf(b) - published.indexOf(a);
    });
  }, [content.posts]);

  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fff6e3_100%)] text-stone-800">
      <Navbar />
      <PageDecoration />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 md:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Blog</p>
            <h1 className="text-4xl font-bold">{content.title}</h1>
            <p className="mt-3 max-w-3xl text-md leading-relaxed text-stone-600">{content.subtitle}</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-amber-300 px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
          >
            Back to Home
          </Link>
        </div>

        {posts.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => {
              const postSlug = toSafeSlug(post.slug || post.title || `blog-${index + 1}`);
              return (
              <article
                key={postSlug || index}
                className="overflow-hidden rounded-3xl border border-amber-200 bg-[linear-gradient(145deg,#fff8e8_0%,#ffeeda_100%)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(180,120,20,0.22)]"
              >
                {post.cover_image ? (
                  <img src={post.cover_image} alt={post.title || "Blog cover"} className="h-56 w-full object-cover" />
                ) : null}
                <div className="space-y-3 p-5">
                  <h2 className="text-2xl font-semibold text-stone-800">{post.title}</h2>
                  {post.publish_date ? <p className="text-sm font-medium text-amber-700">{post.publish_date}</p> : null}
                  <p
                    className="text-md leading-relaxed text-stone-600"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt || "Read more to explore this update."}
                  </p>
                  <Link
                    to={`/blog/${postSlug}`}
                    className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
                  >
                    Read More
                  </Link>
                </div>
              </article>
              );
            })}
          </div>
        ) : (
          <p className="text-stone-600">No blog posts published yet.</p>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default BlogPage;


