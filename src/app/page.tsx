import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[819px] min-h-[600px] flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Terracotta temple exterior bathed in warm soft golden hour sunlight" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC95p5vkqBi-XUpdEm-yL4aeJKoqw1Kf5DBaqmcTyia70dsdlcG1bM1Cw7L_cjGYQmjEd42n2-E5mMvzYZh92-fxy6Nu6iMF6VI2sCk5sUEC9iMTN2Ies3ExoG0p7eucC8j1sMChCH9vYMQXlfhQd-XZsCvtgwX-tou1X6AUsMouEoS-8ZO8VmW0U81o-9rNTwoO_JaSN0vwPW10_6uizqqcAf5rA4cKhGqfap5qUy9ZQODy-uM5sLr"
          />
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-95"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="material-symbols-outlined text-surface-card/85 text-[64px] drop-shadow-sm animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>
            self_improvement
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            "May Maa Kali bless our community with strength, peace and prosperity."
          </h1>
        </div>
      </section>

      {/* 2. Darshan Timings Banner */}
      <section className="relative -mt-16 z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-surface-card border border-tertiary-container/30 p-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 shadow-[0_4px_24px_rgba(43,22,19,0.05)] rounded-lg">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-[40px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              wb_sunny
            </span>
            <div>
              <p className="font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Morning Darshan</p>
              <p className="font-display text-xl md:text-2xl font-bold text-primary">{siteContent.templeTimings.darshan.morning}</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-outline-variant/40"></div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-[40px]" style={{ fontVariationSettings: '"FILL" 1' }}>
              routine
            </span>
            <div>
              <p className="font-sans text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Evening Darshan</p>
              <p className="font-display text-xl md:text-2xl font-bold text-primary">{siteContent.templeTimings.darshan.evening}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About the Mandir */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4 rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-lg border border-outline-variant/30 shadow-sm" 
              alt="Interior sanctum of Ganesh Nagar Kali Bari" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw1VFUORIpykp840YbbfQi7ztHoOK7Pgf2LTYi9uBmM60dYT1LKE7HYdlpZjDKVvEiFMmvA694X8qBq-lixlUnboKXbSC2zUPoppu8gAwICmlmZ_XLmlcH--7Fi23HYXJ1BRabJvKEPtdEhydVn0S2BBWyCld6KmvNMw12-FlDHJZ8EvrjF0NsN7b-QfJ-SIZ9bZSMjBS-UkNZS6EDjgvNLZawq_9QK_RKvCimWui6dL4ReAw6ox8c"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-sm font-semibold text-secondary uppercase tracking-widest">Our Heritage</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">A Sanctuary of Devotion and Community</h2>
            </div>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
              For decades, the {siteContent.brand.name} has stood as a beacon of spiritual solace and cultural vibrancy. Rooted in the rich traditions of Bengal, our temple is more than a place of worship—it is the beating heart of our community, where devotion meets service.
            </p>
            <div className="pt-2">
              <Link 
                href="/about/history" 
                className="inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold text-base text-primary hover:text-secondary hover:border-secondary transition-all group"
              >
                Read Our History 
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support the Mandir (Donation callout) */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary relative overflow-hidden" id="support">
        {/* Decorative layout accent */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px]"></div>
        <div className="max-w-[800px] mx-auto text-center relative z-10 space-y-8">
          <span className="material-symbols-outlined text-[56px] text-tertiary-container mb-2" style={{ fontVariationSettings: '"FILL" 1' }}>
            volunteer_activism
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Support Our Mission</h2>
          <p className="font-sans text-base md:text-lg text-on-primary/80 leading-relaxed max-w-2xl mx-auto">
            Your generous contributions enable us to sustain daily pujas, maintain our beautiful heritage structures, and expand our social welfare programs like healthcare camps and food drives.
          </p>
          <div className="pt-4 flex justify-center">
            <Button variant="large" href="/donate" className="bg-secondary hover:bg-secondary-container text-white border-none shadow-xl">
              Proceed to Donation
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Temple Timings Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-sm font-semibold text-secondary uppercase tracking-widest">Schedule</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">Temple Timings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summer Timings */}
          <div className="bg-surface-card p-8 rounded-lg border border-tertiary-container/30 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
              <span className="material-symbols-outlined text-secondary text-[36px]">sunny</span>
              <h3 className="font-display text-xl font-bold text-primary">Summer Timings</h3>
            </div>
            <p className="font-sans text-xs font-semibold text-on-surface-variant/80 uppercase tracking-widest">
              {siteContent.templeTimings.summer.months}
            </p>
            <ul className="space-y-4 font-sans text-base">
              {siteContent.templeTimings.summer.schedule.map((item) => (
                <li key={item.label} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant font-medium">{item.label}</span>
                  <span className="font-display font-semibold text-primary">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Winter Timings */}
          <div className="bg-surface-card p-8 rounded-lg border border-tertiary-container/30 shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
              <span className="material-symbols-outlined text-secondary text-[36px]">ac_unit</span>
              <h3 className="font-display text-xl font-bold text-primary">Winter Timings</h3>
            </div>
            <p className="font-sans text-xs font-semibold text-on-surface-variant/80 uppercase tracking-widest">
              {siteContent.templeTimings.winter.months}
            </p>
            <ul className="space-y-4 font-sans text-base">
              {siteContent.templeTimings.winter.schedule.map((item) => (
                <li key={item.label} className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant font-medium">{item.label}</span>
                  <span className="font-display font-semibold text-primary">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
