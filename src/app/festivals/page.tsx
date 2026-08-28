import React from "react";
import { siteContent } from "@/data/siteContent";
import { BentoGrid } from "@/components/BentoGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function FestivalsPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-16 animate-in fade-in duration-300">
      {/* Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Celebrations"
          title="Sacred Festivals"
          description="Explore the main annual festivals and religious celebrations hosted at Ganesh Nagar Kali Bari throughout the calendar year."
        />
      </section>

      {/* Festivals Bento Grid */}
      <section>
        <BentoGrid items={siteContent.festivals} mode="festivals" />
      </section>
    </div>
  );
}
