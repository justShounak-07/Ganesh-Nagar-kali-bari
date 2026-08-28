import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";
  return (
    <div className={`space-y-4 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="font-sans text-xs md:text-sm font-semibold text-secondary uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`font-sans text-base md:text-lg text-on-surface-variant max-w-2xl ${isCenter ? "mx-auto" : ""} leading-relaxed`}>
          {description}
        </p>
      )}
      <div className={`w-16 h-0.5 bg-tertiary-container mt-4 ${isCenter ? "mx-auto" : "mr-auto"}`}></div>
    </div>
  );
};
