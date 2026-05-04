import ProgramCard from "./ProgramCard";
import { defaultPrograms } from "../data/siteData";
import useCmsContent from "../hooks/useCmsContent";

function ServicesSection({ compact = false }) {
  const fallbackServices = {
    services: defaultPrograms,
  };

  const { content, isLoading } = useCmsContent({
    query:
      '*[_type == "servicesList"] | order(_updatedAt desc)[0]{"services": services[]{id, title, description, details, "image": image.asset->url}}',
    fallbackPath: "/content/services.json",
    fallbackData: fallbackServices,
    startWithFallback: false,
    normalize: (data) => {
      const incoming = Array.isArray(data?.services) ? data.services : [];
      const cleaned = incoming
        .map((service, index) => ({
          id: service?.id || `service-${index + 1}`,
          title: service?.title || "",
          description: service?.description || "",
          details: service?.details || "",
          image: service?.image || "",
        }))
        .filter((service) => service.title.trim());

      if (!cleaned.length) return fallbackServices;
      return { services: cleaned };
    },
  });

  const services = Array.isArray(content?.services) ? content.services : defaultPrograms;

  return (
    <section id="our-services" className="mx-auto w-full  max-w-6xl px-4 pb-16 md:px-6">
      {isLoading ? (
        <p className="text-md text-stone-600">Loading services...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ProgramCard
              key={service.id || `${service.title}-${index}`}
              title={service.title}
              description={service.description}
              image={service.image}
              details={service.details}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
