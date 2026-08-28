import React from "react";
import { siteContent } from "@/data/siteContent";
import { Timeline } from "@/components/Timeline";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HistoryPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-24 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section>
        <div className="relative h-[614px] min-h-[400px] w-full rounded-lg overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBO0MRLucx05Dr0RVOvOMh-lV0rmMgJ50Fh2guo78sindXdkEP36REJgDYmtRHVw-AhY6828dJ3bpFLgZYQ-yEr7XqiYlywkfajRxks8MTimpcWXPWLz7MOyf1KfBXF-dqBIQZ-4raXpK4D1sHMfM_QagYZWV-ip0TP5DNZCcg2v2JVlodiiFNFl0nciwcvtYmVqAwKNlF47jM-CBqvfJDwibZJgIzdZmPdLiCfotEmF2iG5XLZCKp")' 
            }}
          ></div>
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-4">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              Our Heritage &amp; Devotion
            </h1>
            <p className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
              A sanctuary of peace and cultural preservation, rooted in the timeless traditions of Bengal.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <SectionHeader
            title="Preserving Tradition in the Modern World"
            align="left"
          />
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            Since its inception, the Ganesh Nagar Kali Bari has stood as a beacon of cultural identity and spiritual solace. Our mission extends beyond daily worship; it encompasses the preservation of rich Bengali heritage, art, and community bonds.
          </p>
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
            We welcome devotees and visitors from all walks of life to experience the tranquility, partake in our vibrant festivals, and contribute to a legacy that spans generations.
          </p>
        </div>
        <div className="relative p-8 bg-surface-container-low rounded-lg border border-outline-variant/30">
          <div className="bg-surface-card p-6 rounded shadow-sm border border-outline-variant/45 relative z-10 space-y-4">
            <span className="material-symbols-outlined text-4xl text-secondary block text-center" style={{ fontVariationSettings: '"FILL" 1' }}>
              temple_hindu
            </span>
            <blockquote className="font-display text-lg md:text-xl text-on-surface text-center italic leading-relaxed">
              "A temple is not merely a structure of stone and clay, but the beating heart of a community's devotion and shared history."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Historical Timeline Section */}
      <section className="space-y-12">
        <SectionHeader
          eyebrow="Chronology"
          title={siteContent.history.heading}
          description="Trace the evolutionary steps of the Ganesh Nagar Kali Bari since its establishment."
        />
        <Timeline milestones={siteContent.history.milestones} />
      </section>
    </div>
  );
}
