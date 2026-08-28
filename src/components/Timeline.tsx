import React from "react";
import { Milestone } from "@/data/siteContent";

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="relative max-w-4xl mx-auto space-y-16 py-8 before:absolute before:inset-y-0 before:left-[15px] md:before:left-1/2 before:w-px before:bg-outline-variant">
      {milestones.map((milestone, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={milestone.year}
            className={`relative flex flex-col md:flex-row items-start pl-10 md:pl-0 md:justify-between ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Center Line Dot */}
            <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4.5 h-4.5 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-[45%] bg-surface-card border border-outline-variant/35 rounded-lg p-6 hover:bg-surface-container-low transition-colors duration-300 shadow-sm">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-2xl font-bold text-primary">
                  {milestone.year}
                </span>
                <div className="h-px flex-grow bg-outline-variant/40 md:hidden"></div>
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">
                {milestone.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                {milestone.desc}
              </p>
            </div>

            {/* Spacer for desktop layout alignment */}
            <div className="hidden md:block w-[45%]"></div>
          </div>
        );
      })}
    </div>
  );
};
