import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface GalleryItem {
  title: string;
  image: string;
  category: string;
}

export default function GalleryPage() {
  const galleryItems: GalleryItem[] = [
    {
      title: "Durga Puja Celebrations",
      category: "Festivals",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx0xmUrkBzBEJMnzB8LTkOsXrWQsyVD8aofcYyuMnZni7E_-Zy8hfslOHGSRnwiO51rpAIZmord-zbWhEuK3Ay-VO3FZa-brzWAHfygsU22Z5c2bzlb0JPr54KM34CrPWTDFTFV15IykK6KFI9ExYeZKbHvUYVPHaA-stswrWpPHU0RWGEMk0CynRTpcBIHtirgB1O0KUv24bhWjQr6EU6XzMrKyQTgQoEBF72gz2gbfiOoCu2b36q"
    },
    {
      title: "Terracotta Details",
      category: "Architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1dpmajqxOn_A7F9YwxPyFz8tWh3r8QbwidsBtxod3JFpmXFLxYvq5RlXVysN-1XXM7UFz5llDgUROBHtk51-Evvr0I847-Q3IpEBbW4xyxG3dg-0mMsei5v90ECm03FIBauAQsTkIBLqlAzLWCav_z53f2iIca0GNrpEAKgTCraqM-uhCMsv82Lkt8ANcMGXmVBpVHRO727eoxUoXS2DguspVWprffQj8GZrd8kRN84513RBgKD4F"
    },
    {
      title: "Evening Sandhya Aarti",
      category: "Rituals",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKlh-NdbVf7dpySp04jLV-LSZGkZEDFCPtEUI9c8Iie2Qr9jryiDgNX6tPKciA6_Pd2zkJh_5kq20B8DL9Y-nrXSt-f9-xSNVEW52uwVppKFVQ7kkl2PmimVn8fm-dzv1kxDOdSoG7cfyW8cg0LtyerHnignt1tZ2s2Gtfd7YnXWJGyVYlI-m8b1geB28vP0sZW9nBANqs1EA9BMCvu2CN8b2EQtPZG0R85BYd7c0W8-LQq18ygtgn"
    },
    {
      title: "Community Anandamela",
      category: "Community",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW5kGuzGcSd1NdRwtWYzD5PtfEzreAhBCAEErwtsgHdXWFrnqzJobwzrR8HlPlBnZbrtjqQIKlH7q3rzQEGfw_4WudhEw733Wtv-rhjugDl9brG2_695u0giqtQqhAgQYT91IViBBQL1_5R2lqSAifbu0ld5bZxMmbsR7L5B-MC2P9ejR44TYcwKq_Zq-gtaRfbNBLYYXTic7l-JU-NHnZ2ZntlvTH8MjDoj3NAxA4_znR0fcYNYsK"
    },
    {
      title: "Traditional Alpana",
      category: "Art",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD57gc_3hF6L0fZ8lBSoz7eFbHvr4N7-JVrE-S8RxG-vS_U0jVn9AE6zLzQj1hRlzjl9356Mm538HtYuCFiCJmfQs-ygdNgmuYkCfx1knn9D7KKLvj8bd_69XRM3qGXwfCc3N5Ajt4au5ZCiGX0E0c_dwTOcCjvNsKsh0p2i9tycecdC9Mdh3MmNyEpy-khYY55d0MO7aftI50F5WZn3DKn9KmjMpPD6oxYJa5IRJclM_gps_gje00U"
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEM3Xohbcx12AStvdk1LRsFaT-tznx8YJmjj0DZXXq3Li5EXXCgk4hfAcF4HLGqBvEDdN4THH-pz7JsfR2NymDdS9uUdErECYqisS3ZlsILJ7wsECUUAgvw_u6SI3rrM2hgrVJ7BhWTro8NxV2PgdePWA5im3qOy-lFp2nMkPr3mOhJH7Ucs2wP75oeAi0e42hjoP_9K9KG1jzCcHunMJRf83zMfVtJBz3gih51iN75LrRBYTMUu9I"
    }
  ];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-16 animate-in fade-in duration-300">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Moments"
          title="Gallery"
          description="A visual journey through our rich cultural heritage, sacred ceremonies, and vibrant community celebrations. Experience the spiritual essence of Ganesh Nagar Kali Bari through these captured moments."
        />
      </section>

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.title + index}
            className="group relative overflow-hidden rounded-lg border border-outline-variant/35 bg-surface-card shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Wrapper */}
            <div className="aspect-[4/3] overflow-hidden bg-surface-container relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Overlay Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                <span className="font-sans text-[10px] font-bold text-on-primary-container/80 tracking-widest uppercase bg-primary-container/85 px-2 py-0.5 rounded-full inline-block">
                  {item.category}
                </span>
                <p className="font-display text-lg font-bold text-on-primary">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
