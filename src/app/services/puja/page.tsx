import React from "react";
import { siteContent } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export default function PujaServicesPage() {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "daily puja":
        return "auto_awesome";
      case "special sankalp":
        return "celebration";
      case "bhog offering":
        return "restaurant";
      default:
        return "spa";
    }
  };

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-16 animate-in fade-in duration-300">
      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Puja Seva"
          title="Religious Offerings"
          description="Schedule a special puja for your family or contribute to the daily rituals at Ganesh Nagar Kali Bari."
        />
      </section>

      {/* Offerings Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteContent.pujaOfferings.map((offering) => (
          <div 
            key={offering.name} 
            className="bg-surface-card border border-outline-variant/35 rounded-lg p-8 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                {getIcon(offering.name)}
              </span>
              <span className="bg-surface-container text-primary font-sans text-sm font-bold px-3.5 py-1 rounded-full border border-outline-variant/20">
                {offering.price}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-3">
              {offering.name}
            </h3>
            <p className="font-sans text-base text-on-surface-variant flex-grow mb-6 leading-relaxed">
              {offering.description}
            </p>
            <Button variant="outline" href="/donate" className="w-full text-xs">
              Select Offering
            </Button>
          </div>
        ))}
      </section>

      {/* Important Note with running border animation */}
      <section className="pt-8">
        <div className="p-6 rounded-lg bg-surface-container-low text-center max-w-2xl mx-auto shadow-sm animate-border-run">
          <p className="font-sans text-sm md:text-base font-bold text-on-surface-variant leading-relaxed">
            <span className="font-sans font-extrabold text-primary mr-1 text-base">IMPORTANT NOTE:</span> 
            After selecting any offering, kindly contact the assistance helpline at{" "}
            <a href={`tel:${siteContent.contact.phone}`} className="font-extrabold text-primary hover:underline hover:text-secondary transition-colors">
              {siteContent.contact.phone}
            </a>{" "}
            for prior booking confirmation and official receipt processing.
          </p>
        </div>
      </section>
    </div>
  );
}
