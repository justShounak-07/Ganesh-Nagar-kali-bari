import React from "react";
import { siteContent } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function CalendarPage() {
  const events = siteContent.calendar.events;
  const year = siteContent.calendar.year;

  // Helper to extract the 3-letter month abbreviation from a date string (e.g., "01 January" -> "JAN")
  const getMonthAbbreviation = (dateStr: string): string => {
    const parts = dateStr.split(" ");
    const month = parts[parts.length - 1]; // Get last word
    if (!month) return "";
    return month.substring(0, 3).toUpperCase();
  };

  let lastMonth = "";

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-16 animate-in fade-in duration-300">
      {/* Page Header */}
      <section className="text-center md:text-left max-w-2xl space-y-4">
        <SectionHeader
          title={`Mandir Calendar ${year}`}
          description={`A chronological guide to important dates, festivals, and observances at Ganesh Nagar Kali Bari for the year ${year}.`}
          align="left"
        />
      </section>

      {/* Chronological List */}
      <section className="relative max-w-4xl before:absolute before:inset-y-0 before:left-[15px] md:before:left-[23px] before:w-px before:bg-outline-variant">
        <div className="space-y-8">
          {events.map((event, index) => {
            const currentMonth = getMonthAbbreviation(event.date);
            const isNewMonth = currentMonth !== lastMonth;

            // Update tracker
            if (isNewMonth) {
              lastMonth = currentMonth;
            }

            const isDurgaPuja = event.title.toLowerCase().includes("durga puja");

            return (
              <div 
                key={event.title + index} 
                className={`relative pl-12 md:pl-20 ${isNewMonth && index > 0 ? "mt-12" : ""}`}
              >
                {/* Node Dot / Month Badge */}
                {isNewMonth ? (
                  <div className="absolute left-0 top-1.5 w-8 h-8 md:w-12 md:h-12 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant z-10 shadow-sm">
                    <span className="font-sans text-xs font-bold text-primary tracking-wider">
                      {currentMonth}
                    </span>
                  </div>
                ) : (
                  <div className="absolute left-0 top-1.5 w-8 h-8 md:w-12 md:h-12 bg-background rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-outline-variant rounded-full"></div>
                  </div>
                )}

                {/* Event Card */}
                <div
                  className={`transition-colors duration-300 shadow-sm p-6 ${
                    isDurgaPuja
                      ? "bg-primary/5 border-l-4 border-primary rounded-r-lg hover:bg-primary/10"
                      : "bg-surface-card border border-outline-variant/35 rounded-lg hover:bg-surface-container-low"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                    <h3 className={`font-display text-lg md:text-xl font-bold ${isDurgaPuja ? "text-primary" : "text-on-surface"}`}>
                      {event.title}
                    </h3>
                    <span className="font-sans text-xs md:text-sm font-semibold text-secondary whitespace-nowrap">
                      {event.date} {year}
                    </span>
                  </div>
                  {event.description && (
                    <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
