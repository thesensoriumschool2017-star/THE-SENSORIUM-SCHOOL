import { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";
import { defaultPrograms } from "../data/siteData";

function ServicesSection({ compact = false }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    let active = true;

    fetch("/content/services.json", { cache: "no-store" })
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
    <section id="our-services" className="mx-auto w-full  max-w-6xl px-4 pb-16 md:px-6">
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
    </section>
  );
}

export default ServicesSection;
