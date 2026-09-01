"use client";

import React, { useState, useEffect, useCallback } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface GalleryItem {
  image: string;
  title: string;
  category: "Temple Deities" | "Pujas & Rituals" | "Culture & Celebrations" | "Community Events";
}

const ALL_CATEGORIES = [
  "All",
  "Temple Deities",
  "Pujas & Rituals",
  "Culture & Celebrations",
  "Community Events",
] as const;

type CategoryFilter = (typeof ALL_CATEGORIES)[number];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    // 1. Temple Deities & Darshan
    {
      image: "/assets/idols/kali-4.jpeg",
      title: "Maa Kali Sanctum Sanctorum",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/maa.jpeg",
      title: "Divine Maa Kali Darshan",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/mk.jpg",
      title: "Maa Kali Altar Vigraha",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/mk-2.jpeg",
      title: "Maa Kali Devotional Darshan",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/kali-3.jpeg",
      title: "Maa Kali Vigraha",
      category: "Temple Deities",
    },
    {
      image: "/assets/MAA.png",
      title: "Maa Kali Divine Form",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/dg.jpeg",
      title: "Maa Durga Sharadotsav Idol",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/md.jpg",
      title: "Maa Durga Pratima Darshan",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/md-1.jpg",
      title: "Durga Mahisasuramardini Idol",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/md-2.jpg",
      title: "Sharadotsav Durga Puja Darshan",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/saraswati.jpeg",
      title: "Maa Saraswati Vasant Idol",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/lx.jpeg",
      title: "Maa Lakshmi Kojagari Idol",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/shiva.jpeg",
      title: "Lord Shiva Bholenath Darshan",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/anna.jpeg",
      title: "Maa Annapurna Devi Idol",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/basanti.jpeg",
      title: "Maa Basanti Puja Pratima",
      category: "Temple Deities",
    },
    {
      image: "/assets/idols/bs-2.jpeg",
      title: "Basanti Durga Darshan",
      category: "Temple Deities",
    },

    // 2. Pujas & Rituals
    {
      image: "/assets/gallery/puja-1.jpg",
      title: "Maa Kali Puja Aarti & Pushpanjali",
      category: "Pujas & Rituals",
    },
    {
      image: "/assets/gallery/puja.jpg",
      title: "Sacred Temple Evening Puja",
      category: "Pujas & Rituals",
    },

    // 3. Culture & Celebrations
    {
      image: "/assets/gallery/rang.jpg",
      title: "Festive Rangoli & Floral Art",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cd.jpg",
      title: "Classical Indian Dance Recital",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cd2.jpg",
      title: "Devotional Dance Performance",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cd-3.jpg",
      title: "Youth Classical Dance Concert",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cd-4.jpg",
      title: "Classical Stage Recital",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/nsp.jpg",
      title: "Natya & Drama Stage Performance",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cs.jpg",
      title: "Cultural Stage & Musical Evening",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/cs-1.jpg",
      title: "Annual Cultural & Music Program",
      category: "Culture & Celebrations",
    },
    {
      image: "/assets/gallery/rabin.jpg",
      title: "Rabindra Jayanti Tribute",
      category: "Culture & Celebrations",
    },

    // 4. Community Events
    {
      image: "/assets/gallery/draw.jpg",
      title: "Sit & Draw Competition for Children",
      category: "Community Events",
    },
    {
      image: "/assets/gallery/ind.jpg",
      title: "Republic Day Flag Hoisting & Assembly",
      category: "Community Events",
    },
    {
      image: "/assets/gallery/ind2.jpg",
      title: "Independence Day Celebrations",
      category: "Community Events",
    },
    {
      image: "/assets/gallery/com.jpg",
      title: "Community Prasad Distribution & Seva",
      category: "Community Events",
    },
    {
      image: "/assets/gallery/com-1.jpg",
      title: "Devotee Gathering & Community Feast",
      category: "Community Events",
    },
  ];

  // Filtered items based on active category
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Handle navigation
  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext, handleClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-12 animate-in fade-in duration-300">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Moments"
          title="Gallery"
          description="A visual journey through our rich cultural heritage, sacred ceremonies, and vibrant community celebrations. Experience the spiritual essence of Ganesh Nagar Kali Bari through these captured moments."
        />
      </section>

      {/* Category Filter Tabs */}
      <section className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {ALL_CATEGORIES.map((category) => {
          const count =
            category === "All"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedImageIndex(null);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-on-primary shadow-md scale-105"
                  : "bg-surface-container/60 hover:bg-surface-container text-on-surface-variant hover:text-primary border border-outline-variant/30"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-surface-card text-on-surface-variant"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </section>

      {/* Automatic Masonry Grid Layout - Automatically flows images of any size & count */}
      <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 [column-fill:_balance]">
        {filteredItems.map((item, index) => (
          <div
            key={item.image + index}
            className="break-inside-avoid group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-card shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            {/* Image Container with Natural Height */}
            <div className="relative overflow-hidden bg-surface-container w-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
              />

              {/* Hover Overlay with Gradient and Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10">
                {/* Top Action Icon */}
                <div className="flex justify-end">
                  <span className="bg-black/50 text-white p-1.5 rounded-full backdrop-blur-xs shadow-sm">
                    <span className="material-symbols-outlined block text-[18px]">
                      zoom_in
                    </span>
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-tertiary-container">
                    {item.category}
                  </span>
                  <h4 className="font-display text-sm font-semibold text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
          onClick={handleClose}
        >
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
            {/* Counter and Title */}
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs md:text-sm font-sans flex items-center gap-3 border border-white/10 pointer-events-auto">
              <span className="font-bold text-secondary">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <span className="hidden md:inline text-white/40">•</span>
              <span className="hidden md:inline font-medium text-white/90 truncate max-w-xs">
                {filteredItems[selectedImageIndex].title}
              </span>
            </div>

            {/* Close button */}
            <button
              className="pointer-events-auto text-white/80 hover:text-white bg-black/60 hover:bg-black/80 border border-white/10 p-2.5 rounded-full transition-all cursor-pointer shadow-lg hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              title="Close (Esc)"
            >
              <span className="material-symbols-outlined block text-[22px]">
                close
              </span>
            </button>
          </div>

          {/* Prev button */}
          <button
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/60 hover:bg-black/85 border border-white/10 p-3 md:p-4 rounded-full transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            title="Previous (Left Arrow)"
          >
            <span className="material-symbols-outlined block text-[24px] md:text-[28px]">
              arrow_back
            </span>
          </button>

          {/* Next button */}
          <button
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/60 hover:bg-black/85 border border-white/10 p-3 md:p-4 rounded-full transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            title="Next (Right Arrow)"
          >
            <span className="material-symbols-outlined block text-[24px] md:text-[28px]">
              arrow_forward
            </span>
          </button>

          {/* Modal Content Center */}
          <div
            className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-full max-w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl bg-black/40">
              <img
                key={filteredItems[selectedImageIndex].image}
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl animate-in zoom-in-95 duration-200 select-none"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-3 text-center space-y-1">
              <p className="font-display text-base md:text-lg font-semibold text-white drop-shadow">
                {filteredItems[selectedImageIndex].title}
              </p>
              <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-wider text-secondary">
                {filteredItems[selectedImageIndex].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

