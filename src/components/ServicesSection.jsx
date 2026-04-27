import { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";
import { defaultPrograms } from "../data/siteData";

function ServicesSection({ compact = false }) {
  const [services, setServices] = useState(defaultPrograms);

  useEffect(() => {
    let active = true;

    fetch("/content/services.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("No services file"))))
      .then((data) => {
        if (!active) return;
        const resolvedServices = Array.isArray(data) ? data : data?.services;
        if (Array.isArray(resolvedServices) && resolvedServices.length > 0) {
          setServices(resolvedServices);
        }
      })
      .catch(() => {
        if (active) {
          setServices(defaultPrograms);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="our-services" className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-stone-600">
          {compact
            ? "Service cards below are managed from the admin panel."
            : "Each service card image and text is managed from admin."}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <ProgramCard
            key={service.id || `${service.title}-${index}`}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
