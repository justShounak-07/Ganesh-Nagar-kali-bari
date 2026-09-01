"use client";

import React, { useState, useEffect, useCallback } from "react";

interface BentoItem {
  name?: string; // Used for festivals
  title?: string; // Used for welfare
  description: string;
  image?: string;
  category?: string; // Welfare category
}

interface BentoGridProps {
  items: BentoItem[];
  mode: "festivals" | "welfare";
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items, mode }) => {
  const [selectedFestivalIndex, setSelectedFestivalIndex] = useState<number | null>(null);

  // Handle navigation
  const handlePrev = useCallback(() => {
    setSelectedFestivalIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : items.length - 1
    );
  }, [items.length]);

  const handleNext = useCallback(() => {
    setSelectedFestivalIndex((prev) =>
      prev !== null && prev < items.length - 1 ? prev + 1 : 0
    );
  }, [items.length]);

  const handleClose = useCallback(() => {
    setSelectedFestivalIndex(null);
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    if (selectedFestivalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedFestivalIndex, handlePrev, handleNext, handleClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFestivalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFestivalIndex]);

  if (mode === "festivals") {
    // We group items into chunks of 4 to repeat the approved bento grid pattern
    const chunks: BentoItem[][] = [];
    for (let i = 0; i < items.length; i += 4) {
      chunks.push(items.slice(i, i + 4));
    }

    const currentFestival =
      selectedFestivalIndex !== null ? items[selectedFestivalIndex] : null;

    return (
      <div className="space-y-8">
        {chunks.map((chunk, chunkIndex) => {
          const baseIndex = chunkIndex * 4;

          // A partial chunk (e.g. less than 4 items)
          if (chunk.length < 4) {
            return (
              <div
                key={chunkIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {chunk.map((item, idx) => {
                  const absoluteIndex = baseIndex + idx;
                  return (
                    <div
                      key={item.name || idx}
                      onClick={() => setSelectedFestivalIndex(absoluteIndex)}
                      className="group relative flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-card shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 cursor-pointer"
                    >
                      {item.image && (
                        <div className="relative aspect-video overflow-hidden bg-surface-container">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                          {/* Zoom hint badge */}
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-black/60 text-white p-1.5 rounded-full backdrop-blur-xs flex items-center justify-center shadow-md">
                              <span className="material-symbols-outlined text-[16px]">
                                open_in_full
                              </span>
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col p-6 space-y-2.5 flex-grow justify-between">
                        <div className="space-y-2">
                          <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">
                            Sacred Festival
                          </span>
                          <h3 className="font-display text-lg font-bold text-primary transition-colors group-hover:text-secondary">
                            {item.name}
                          </h3>
                          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-primary/80 group-hover:text-secondary transition-colors">
                          <span>View Full Details</span>
                          <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          // Full chunk of 4 items with Stitch Bento Layout
          return (
            <div
              key={chunkIndex}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Card 0: Kali Puja horizontal overlay */}
              <div
                onClick={() => setSelectedFestivalIndex(baseIndex + 0)}
                className="md:col-span-8 h-95 rounded-xl overflow-hidden relative group shadow-sm hover:shadow-xl hover:border-primary/40 border border-outline-variant/20 transition-all duration-300 cursor-pointer"
              >
                {chunk[0].image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={chunk[0].image}
                      alt={chunk[0].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/60 text-white p-2 rounded-full backdrop-blur-xs flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_full
                    </span>
                  </span>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left space-y-2 z-10">
                  <span className="bg-primary/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max backdrop-blur-sm shadow-sm">
                    Grand Celebration
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-tertiary-container transition-colors">
                    {chunk[0].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/90 max-w-xl leading-relaxed line-clamp-2">
                    {chunk[0].description}
                  </p>
                  <span className="text-xs text-white/75 font-semibold flex items-center gap-1 pt-1 group-hover:text-white transition-colors">
                    Click to view full description
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>

              {/* Card 1: Durga Puja tall vertical overlay */}
              <div
                onClick={() => setSelectedFestivalIndex(baseIndex + 1)}
                className="md:col-span-4 md:row-span-2 rounded-xl overflow-hidden relative group shadow-sm hover:shadow-xl hover:border-primary/40 border border-outline-variant/20 transition-all duration-300 min-h-[400px] md:min-h-0 cursor-pointer"
              >
                {chunk[1].image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={chunk[1].image}
                      alt={chunk[1].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/60 text-white p-2 rounded-full backdrop-blur-xs flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_full
                    </span>
                  </span>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left space-y-2.5 z-10">
                  <span className="bg-secondary/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max backdrop-blur-sm shadow-sm">
                    Grand Sharadotsav
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-tertiary-container transition-colors">
                    {chunk[1].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed line-clamp-3">
                    {chunk[1].description}
                  </p>
                  <span className="text-xs text-white/75 font-semibold flex items-center gap-1 pt-1 group-hover:text-white transition-colors">
                    Click to view full description
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>

              {/* Card 2: Saraswati Puja card */}
              <div
                onClick={() => setSelectedFestivalIndex(baseIndex + 2)}
                className="md:col-span-4 rounded-xl border border-outline-variant/35 bg-surface-card overflow-hidden group shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {chunk[2].image && (
                  <div className="relative aspect-video overflow-hidden bg-surface-container shrink-0">
                    <img
                      src={chunk[2].image}
                      alt={chunk[2].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/60 text-white p-1.5 rounded-full backdrop-blur-xs flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_full
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Vasant Festival
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {chunk[2].name}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-2">
                      {chunk[2].description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-primary/80 group-hover:text-secondary transition-colors">
                    <span>View Full Details</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Maha Shivaratri card */}
              <div
                onClick={() => setSelectedFestivalIndex(baseIndex + 3)}
                className="md:col-span-4 rounded-xl border border-outline-variant/35 bg-surface-card overflow-hidden group shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {chunk[3].image && (
                  <div className="relative aspect-video overflow-hidden bg-surface-container shrink-0">
                    <img
                      src={chunk[3].image}
                      alt={chunk[3].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/60 text-white p-1.5 rounded-full backdrop-blur-xs flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_full
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Sacred Night
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {chunk[3].name}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-2">
                      {chunk[3].description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-primary/80 group-hover:text-secondary transition-colors">
                    <span>View Full Details</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Fullscreen Interactive Festival Detail Modal */}
        {selectedFestivalIndex !== null && currentFestival && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8 backdrop-blur-md transition-all duration-300 animate-in fade-in"
            onClick={handleClose}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs md:text-sm font-sans flex items-center gap-3 border border-white/10 pointer-events-auto">
                <span className="font-bold text-secondary">
                  Festival {selectedFestivalIndex + 1} of {items.length}
                </span>
                <span className="hidden md:inline text-white/40">•</span>
                <span className="hidden md:inline font-medium text-white/90">
                  {currentFestival.name}
                </span>
              </div>

              {/* Close Button */}
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

            {/* Prev Navigation Button */}
            <button
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/60 hover:bg-black/85 border border-white/10 p-3 md:p-4 rounded-full transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              title="Previous Festival (Left Arrow)"
            >
              <span className="material-symbols-outlined block text-[24px] md:text-[28px]">
                arrow_back
              </span>
            </button>

            {/* Next Navigation Button */}
            <button
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/60 hover:bg-black/85 border border-white/10 p-3 md:p-4 rounded-full transition-all cursor-pointer shadow-xl hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              title="Next Festival (Right Arrow)"
            >
              <span className="material-symbols-outlined block text-[24px] md:text-[28px]">
                arrow_forward
              </span>
            </button>

            {/* Big Screen Festival Content Modal Card */}
            <div
              className="relative max-w-5xl w-full max-h-[85vh] bg-surface-card rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[460px] bg-black flex items-center justify-center overflow-hidden shrink-0">
                {currentFestival.image ? (
                  <>
                    {/* Blurred backdrop image to fill any aspect ratio gaps */}
                    <img
                      src={currentFestival.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-40 select-none pointer-events-none"
                    />
                    {/* Full uncropped crisp image */}
                    <img
                      key={currentFestival.image}
                      src={currentFestival.image}
                      alt={currentFestival.name || "Festival Image"}
                      className="relative z-10 max-h-[40vh] md:max-h-[80vh] w-full object-contain p-2"
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-white/70 space-y-2">
                    <span className="material-symbols-outlined text-[64px] text-secondary">
                      temple_hindu
                    </span>
                    <p className="font-sans text-sm">Ganesh Nagar Kali Bari</p>
                  </div>
                )}
              </div>

              {/* Details & Description Section */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between bg-surface-card overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-secondary/15 text-secondary border border-secondary/30 px-3.5 py-1 font-sans text-xs font-bold uppercase tracking-wider">
                      Sacred Celebration
                    </span>
                    <span className="text-xs font-sans text-on-surface-variant/70">
                      Ganesh Nagar Kali Bari
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-4xl font-bold text-primary leading-tight">
                    {currentFestival.name}
                  </h2>

                  <div className="w-16 h-1 bg-secondary rounded-full"></div>

                  <div className="pt-2 space-y-3">
                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-on-surface-variant/80">
                      About the Festival
                    </h4>
                    <p className="font-sans text-base md:text-lg text-on-surface leading-relaxed whitespace-pre-line">
                      {currentFestival.description}
                    </p>
                  </div>
                </div>

                {/* Footer status / navigation helper */}
                <div className="pt-6 mt-6 border-t border-outline-variant/25 flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      swap_horiz
                    </span>
                    Use Arrow Keys to Navigate
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded-lg hover:bg-surface-container text-primary transition-colors cursor-pointer"
                      title="Previous"
                    >
                      <span className="material-symbols-outlined block text-[18px]">
                        arrow_back
                      </span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded-lg hover:bg-surface-container text-primary transition-colors cursor-pointer"
                      title="Next"
                    >
                      <span className="material-symbols-outlined block text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Welfare Mode: Render a clean 2-column grid when there are exactly 2 items
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div
          key={item.title || index}
          className="relative flex flex-col justify-end overflow-hidden rounded-lg group shadow-sm hover:shadow-lg transition-all duration-300 min-h-[350px]"
        >
          {item.image && (
            <div className="absolute inset-0 z-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>
          )}
          <div className="relative z-10 p-8 space-y-3">
            {item.category && (
              <span className="inline-block rounded-full bg-secondary/95 px-3.5 py-1 font-sans text-xs font-semibold text-on-secondary uppercase tracking-widest backdrop-blur-sm">
                {item.category}
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="font-sans text-base text-white/95 leading-relaxed max-w-xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

