import React from "react";

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
  if (mode === "festivals") {
    // We group items into chunks of 4 to repeat the approved bento grid pattern
    const chunks: BentoItem[][] = [];
    for (let i = 0; i < items.length; i += 4) {
      chunks.push(items.slice(i, i + 4));
    }

    return (
      <div className="space-y-8">
        {chunks.map((chunk, chunkIndex) => {
          // A full chunk has 4 items. If it's a partial chunk (e.g. less than 4), we render them as standard cards.
          if (chunk.length < 4) {
            return (
              <div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chunk.map((item, idx) => (
                  <div
                    key={item.name || idx}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-card shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {item.image && (
                      <div className="relative aspect-video overflow-hidden bg-surface-container">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                      </div>
                    )}
                    <div className="flex flex-col p-6 space-y-2.5">
                      <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-widest">
                        Festival
                      </span>
                      <h3 className="font-display text-lg font-bold text-primary transition-colors group-hover:text-secondary">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          }

          // Full chunk of 4 items: we implement the exact Stitch layout:
          // Item 0 (Kali Puja) -> md:col-span-8 (Horizontal row 1, image background with overlay text)
          // Item 1 (Durga Puja) -> md:col-span-4 md:row-span-2 (Tall vertical, image background with text overlay at bottom)
          // Item 2 (Saraswati Puja) -> md:col-span-4 (Row 2, image on top, text below on white surface)
          // Item 3 (Maha Shivaratri) -> md:col-span-4 (Row 2, image on top, text below on white surface)
          return (
            <div key={chunkIndex} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Card 0: Kali Puja horizontal overlay */}
              <div className="md:col-span-8 h-[380px] rounded-lg overflow-hidden relative group shadow-sm hover:shadow-lg transition-all duration-300">
                {chunk[0].image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={chunk[0].image}
                      alt={chunk[0].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                  </div>
                )}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left space-y-2 z-10">
                  <span className="bg-primary/90 text-white font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max backdrop-blur-sm">
                    Grand Celebration
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {chunk[0].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
                    {chunk[0].description}
                  </p>
                </div>
              </div>

              {/* Card 1: Durga Puja tall vertical overlay */}
              <div className="md:col-span-4 md:row-span-2 rounded-lg overflow-hidden relative group shadow-sm hover:shadow-lg transition-all duration-300 min-h-[400px] md:min-h-0">
                {chunk[1].image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={chunk[1].image}
                      alt={chunk[1].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                  </div>
                )}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left space-y-2.5 z-10">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {chunk[1].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed">
                    {chunk[1].description}
                  </p>
                </div>
              </div>

              {/* Card 2: Saraswati Puja white card (Image on top, text below) */}
              <div className="md:col-span-4 rounded-lg border border-outline-variant/35 bg-surface-card overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                {chunk[2].image && (
                  <div className="relative aspect-video overflow-hidden bg-surface-container shrink-0">
                    <img
                      src={chunk[2].image}
                      alt={chunk[2].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                  </div>
                )}
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-center">
                  <h3 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {chunk[2].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {chunk[2].description}
                  </p>
                </div>
              </div>

              {/* Card 3: Maha Shivaratri white card (Image on top, text below) */}
              <div className="md:col-span-4 rounded-lg border border-outline-variant/35 bg-surface-card overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                {chunk[3].image && (
                  <div className="relative aspect-video overflow-hidden bg-surface-container shrink-0">
                    <img
                      src={chunk[3].image}
                      alt={chunk[3].name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                  </div>
                )}
                <div className="p-6 space-y-2 flex-grow flex flex-col justify-center">
                  <h3 className="font-display text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {chunk[3].name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {chunk[3].description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
