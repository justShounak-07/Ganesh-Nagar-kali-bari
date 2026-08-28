import React from "react";
import { siteContent } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export default function VisitUsPage() {
  return (
    <div className="w-full space-y-0 animate-in fade-in duration-300">
      
      {/* 1. Title & Intro Header */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 text-center space-y-4">
        <SectionHeader
          eyebrow="Pilgrimage"
          title="Visit Us"
          description="We welcome devotees and visitors from all over. Plan your visit to experience the serenity and cultural heritage of Ganesh Nagar Kali Bari."
        />
      </section>

      {/* 2. Map & Address Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Map Column */}
        <div className="lg:col-span-8 rounded overflow-hidden border border-outline-variant/35 shadow-sm relative h-[350px] lg:h-auto group">
          <a href={siteContent.contact.directionsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
              alt="Map illustration highlighting Ganesh Nagar Kali Bari location" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOxf7TFhebbpLJ9rXqQ8ZI8IHH7oKk1AXeyFdYusjcAqNNA4qapvbhS4q0DEZKwqNi4KZVP0uh9Ty3UvjGGdv_8Kp-19A31OudJpwnukxk4nw6qzpOvuJLTaQQl8S8YPsUGYK1YenmD5VBQPc-i8nCQswoBJ1W9wxxqleE7u3yCBAgSk0wuTr1r8BuTuNt8w4p0Or0Qpo--YhlSONMt01m0qt_0dwjOVLWmRHT-brZE_wx_Jv5BQrS"
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            <div className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
              Click to Open Google Maps
            </div>
          </a>
        </div>

        {/* Address & Details Column */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Address Card */}
          <div className="bg-surface-card p-8 rounded-lg border border-outline-variant/35 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-105"></div>
            <div className="flex items-center gap-3 mb-4 text-primary">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                location_on
              </span>
              <h2 className="font-display text-xl font-bold text-on-surface">Address</h2>
            </div>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed whitespace-pre-line">
              {siteContent.contact.address}
            </p>
          </div>

          {/* Connect Details */}
          <div className="space-y-6">
            <Button 
              variant="primary" 
              href={siteContent.contact.directionsUrl} 
              className="w-full py-4 text-sm font-sans flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">directions</span>
              Get Directions
            </Button>
            
            <div className="bg-surface-card border border-outline-variant/35 p-6 rounded-lg shadow-sm space-y-4 font-sans text-sm">
              <a href={`tel:${siteContent.contact.phone}`} className="flex items-center gap-3 text-primary hover:text-secondary transition-colors font-medium">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <div>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider block">Phone Helpline:</span>
                  <span>{siteContent.contact.phone}</span>
                </div>
              </a>
              <hr className="border-t border-outline-variant/20" />
              <a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-3 text-primary hover:text-secondary transition-colors font-medium">
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <div>
                  <span className="text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider block">Email Assistance:</span>
                  <span>{siteContent.contact.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transport Info Grid */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">How to Reach</h2>
            <div className="w-16 h-0.5 bg-tertiary-container mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metro */}
            <div className="bg-surface-card p-8 rounded-lg border border-outline-variant/30 flex flex-col items-center text-center shadow-sm hover:border-primary/45 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6 border border-outline-variant/20">
                <span className="material-symbols-outlined text-2xl">train</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Nearest Metro</h3>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {siteContent.contact.metro}
              </p>
            </div>
            
            {/* Bus */}
            <div className="bg-surface-card p-8 rounded-lg border border-outline-variant/30 flex flex-col items-center text-center shadow-sm hover:border-primary/45 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6 border border-outline-variant/20">
                <span className="material-symbols-outlined text-2xl">directions_bus</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Bus Stand</h3>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {siteContent.contact.bus}
              </p>
            </div>
            
            {/* Landmark */}
            <div className="bg-surface-card p-8 rounded-lg border border-outline-variant/30 flex flex-col items-center text-center shadow-sm hover:border-primary/45 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6 border border-outline-variant/20">
                <span className="material-symbols-outlined text-2xl">tour</span>
              </div>
              <h3 className="font-display text-lg font-bold text-on-surface mb-2">Landmark</h3>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                {siteContent.contact.landmark}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Need Help Block */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop text-center bg-surface-card space-y-6">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">Need Help or Assistance?</h3>
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
          For special arrangements, wheelchair access, ritual bookings, or group visits, please contact our administration.
        </p>
        <div>
          <a 
            href="/about/management#office-bearers" 
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary transition-colors border-b-2 border-secondary hover:border-primary pb-1 group"
          >
            Contact Administration 
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      </section>

    </div>
  );
}
