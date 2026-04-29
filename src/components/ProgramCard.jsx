import { Link } from "react-router-dom";

function ProgramCard({ title, description, image }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
        <img src={image} alt={title} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
        <p className="text-base leading-relaxed text-stone-600">{description}</p>
        <Link
          to="/gallery"
          className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
        >
          View All Photos
        </Link>
      </div>
    </article>
  );
}

export default ProgramCard;
