"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface GalleryItem {
  title: string;
  image: string;
  category: string;
}

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      title: "Durga Puja Celebrations",
      category: "Festivals",
      image: "/assets/gallery/puja-1.jpg",
    },
    {
      title: "",
      category: "Architecture",
      image: "/assets/gallery/puja.jpg",
    },
    {
      title: "Evening Sandhya Aarti",
      category: "Rituals",
      image: "/assets/gallery/rang.jpg",
    },
    {
      title: "Community Anandamela",
      category: "Community",
      image: "/assets/gallery/nsp.jpg",
    },
    {
      title: "Traditional Alpana",
      category: "Art",
      image: "/assets/gallery/ind2.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/draw.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cs.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cs-1.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/com.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/com-1.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cd.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cd-3.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cd-4.jpg",
    },
    {
      title: "Mandir Architecture",
      category: "Architecture",
      image: "/assets/gallery/cd2.jpg",
    },
  ];

  const getGridClasses = (index: number) => {
    const patterns = [
      // Pattern 1: Index 0-3 (takes 12 columns total, height 450px)
      { className: "md:col-span-6 md:row-span-2 md:h-[450px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-6 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-3 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-3 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      // Pattern 2: Index 4-7 (takes 12 columns total, height 450px)
      { className: "md:col-span-4 md:row-span-2 md:h-[450px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-8 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-4 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-4 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      // Pattern 3: Index 8-11 (takes 12 columns total, height 450px)
      { className: "md:col-span-6 md:row-span-2 md:h-[450px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-6 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-3 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-3 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      // Pattern 4: Index 12-13 (takes 12 columns total, height 213px)
      { className: "md:col-span-6 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
      { className: "md:col-span-6 md:row-span-1 md:h-[213px]", aspect: "aspect-[4/3] md:aspect-auto" },
    ];
    return patterns[index % patterns.length];
  };

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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {galleryItems.map((item, index) => {
          const { className, aspect } = getGridClasses(index);
          return (
            <div
              key={item.image + index}
              className={`group relative overflow-hidden rounded-lg border border-outline-variant/35 bg-surface-card shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              {/* Image Wrapper */}
              <div className={`relative overflow-hidden bg-surface-container w-full h-full ${aspect}`}>
                {/* Blurred background image */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-30 select-none pointer-events-none"
                />
                {/* Main image */}
                <img
                  src={item.image}
                  alt={item.title || "Gallery image"}
                  className="relative z-10 w-full h-full object-contain transition-transform duration-750 group-hover:scale-105"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
          >
            <span className="material-symbols-outlined block text-[24px]">close</span>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 z-50 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            disabled={selectedImageIndex === 0}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
            }}
          >
            <span className="material-symbols-outlined block text-[24px]">arrow_back</span>
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 z-50 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            disabled={selectedImageIndex === galleryItems.length - 1}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : prev));
            }}
          >
            <span className="material-symbols-outlined block text-[24px]">arrow_forward</span>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedImageIndex].image}
              alt={galleryItems[selectedImageIndex].title || "Gallery image"}
              className="max-w-full max-h-full object-contain rounded-lg animate-in zoom-in-95 duration-200"
            />
          </div>
        </div>
      )}
    </div>
  );
}
