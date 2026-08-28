import React from "react";
import { siteContent } from "@/data/siteContent";
import { BentoGrid } from "@/components/BentoGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function SocialCulturalServicesPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-24 animate-in fade-in duration-300">
      
      {/* 1. Social Welfare Initiatives */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Dharma & Service"
          title="Social Welfare Initiatives"
          description="Serving the community is an integral part of our dharma. Explore our ongoing initiatives aimed at uplifting those in need."
        />
        <BentoGrid items={siteContent.welfareInitiatives} mode="welfare" />
      </section>

      {/* 2. Cultural & National Events */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Community"
          title="Cultural &amp; National Events"
          description="Celebrating our heritage and national pride through cultural programs, national celebrations, and artistic contests."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.culturalEvents.map((event, index) => (
            <div 
              key={event.title + index} 
              className="bg-surface-card border border-outline-variant/35 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Event Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container shrink-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                <div className="absolute top-4 left-4 bg-secondary text-on-secondary text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {event.date}
                </div>
              </div>
              
              {/* Card Details */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {event.title}
                </h3>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
