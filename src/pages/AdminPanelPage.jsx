import { useMemo, useState } from "react";

const ADMIN_SESSION_KEY = "sensorium_admin_panel_authed";
const DEFAULT_PASSCODE = "12345";

function AdminPanelPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthed, setIsAuthed] = useState(
    typeof window !== "undefined" && sessionStorage.getItem(ADMIN_SESSION_KEY) === "1",
  );
  const [error, setError] = useState("");

  const expectedPasscode = useMemo(
    () => import.meta.env.VITE_ADMIN_PANEL_PASSCODE || DEFAULT_PASSCODE,
    [],
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() !== expectedPasscode) {
      setError("Wrong passcode. Please try again.");
      return;
    }

    sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    setError("");
    setIsAuthed(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthed(false);
    setPasscode("");
  };

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#fff2dd_100%)] px-4 py-10 text-stone-800 md:px-6">
        <div className="mx-auto w-full max-w-lg rounded-3xl border border-amber-200 bg-white/80 p-6 shadow-lg md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Admin</p>
          <h1 className="mt-2 text-3xl font-bold">Sensorium Admin Panel</h1>
          <p className="mt-2 text-sm text-stone-600">
            Enter passcode to manage Services and Gallery content.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode"
              className="w-full rounded-xl border border-amber-200 px-4 py-3 text-sm outline-none ring-amber-300 focus:ring"
            />

            {error ? <p className="text-sm text-red-700">{error}</p> : null}

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-xs text-stone-500">
            Tip: default passcode is 12345. You can change it using
            <code className="ml-1 rounded bg-stone-100 px-1 py-0.5">VITE_ADMIN_PANEL_PASSCODE</code>.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#fff2dd_100%)] px-4 py-10 text-stone-800 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold">Content Management</h1>
            <p className="mt-2 text-sm text-stone-600">
              Use these shortcuts to manage website content in Decap CMS.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
          >
            Logout
          </button>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Services Management</h2>
            <p className="mt-2 text-sm text-stone-600">
              Add, edit, remove service cards, title, description, and image.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/admin/#/collections/services/files/services_list"
                className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Open Services Editor
              </a>
              <a
                href="/our-services"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
              >
                Preview Services Page
              </a>
            </div>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Gallery Management</h2>
            <p className="mt-2 text-sm text-stone-600">
              Manage gallery images and videos shown on the Gallery page.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/admin/#/collections/site_content/entries/gallery"
                className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Open Gallery Editor
              </a>
              <a
                href="/gallery"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
              >
                Preview Gallery Page
              </a>
            </div>
          </article>
        </section>

        <section className="mt-4 rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Open Full CMS</h2>
          <p className="mt-2 text-sm text-stone-600">
            For About, Mission, Vision, Home and other content updates.
          </p>
          <a
            href="/admin"
            className="mt-4 inline-block rounded-xl bg-stone-800 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-900"
          >
            Open Decap CMS
          </a>
        </section>
      </div>
    </main>
  );
}

export default AdminPanelPage;
