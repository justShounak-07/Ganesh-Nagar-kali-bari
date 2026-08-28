import React from "react";
import { siteContent } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ManagementPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-16 animate-in fade-in duration-300">
      {/* Title & Introduction */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Governance"
          title={siteContent.management.heading}
          description="Dedicated individuals serving the community and guiding the Kali Bari's vision and daily operations."
        />
      </section>

      {/* Office Bearers Table */}
      <section id="office-bearers" className="max-w-4xl mx-auto scroll-mt-24">
        <div className="overflow-x-auto bg-surface-card rounded-lg border border-outline-variant/35 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-secondary/5 border-b border-outline-variant/40">
                <th className="font-sans text-xs font-bold uppercase tracking-wider text-primary py-4 px-6">
                  Position
                </th>
                <th className="font-sans text-xs font-bold uppercase tracking-wider text-primary py-4 px-6">
                  Name
                </th>
                <th className="font-sans text-xs font-bold uppercase tracking-wider text-primary py-4 px-6">
                  Contact Details
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-base text-on-surface-variant divide-y divide-outline-variant/20">
              {siteContent.management.committee.map((member) => (
                <tr 
                  key={member.position} 
                  className="hover:bg-surface-container-low transition-colors duration-200"
                >
                  <td className="py-4 px-6 font-semibold text-primary text-base">
                    {member.position}
                  </td>
                  <td className="py-4 px-6 text-on-surface text-base">
                    {member.name}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium">
                    {member.contact ? (
                      <a 
                        href={`tel:${member.contact}`} 
                        className="hover:text-secondary hover:underline transition-colors"
                      >
                        {member.contact}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
