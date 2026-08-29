import React from "react";
import { siteContent } from "@/data/siteContent";
import { DonationForm } from "@/components/DonationForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function DonatePage() {
  const donationImpacts = [
    {
      title: "Daily Prayers",
      desc: "Your help brings us the holy Mangal Arati and daily worship so we can pray together every day.",
      bgColor: "bg-tertiary/10",
      borderColor: "border-tertiary/30",
      icon: "spa",
      iconColor: "text-tertiary"
    },
    {
      title: "Festival Celebrations",
      desc: "You make big celebrations like Durga, Kali Puja etc. possible, bringing everyone together in joy.",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
      icon: "celebration",
      iconColor: "text-secondary"
    },
    {
      title: "Construction & Maintenance",
      desc: "Mandir Complex, including the historic temple, Offices and addition of future facilities.",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      icon: "home_repair_service",
      iconColor: "text-primary"
    },
    {
      title: "Social Welfare",
      desc: "Empower our HealthCamps and Daily Bhog Sewa to feed the hungry and bring healing to those in need.",
      bgColor: "bg-surface-container",
      borderColor: "border-outline-variant/50",
      icon: "volunteer_activism",
      iconColor: "text-primary"
    }
  ];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 space-y-20 animate-in fade-in duration-300">
      
      {/* 1. Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <SectionHeader
          eyebrow="Seva & Support"
          title="Contribute to the Kali Bari"
          description="Your generous contributions help us sustain daily worship, maintain the historical structures, and fund local community medical and educational services."
        />
      </section>

      {/* 2. How Your Donation Helps Section */}
      <section className="space-y-10 max-w-5xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-bold text-primary">How Your Donation Helps</h2>
          <p className="font-sans text-base text-on-surface-variant max-w-xl mx-auto">
            Every contribution directly funds the upkeep of the Kali Bari and supports our community development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donationImpacts.map((impact) => (
            <div
              key={impact.title}
              className={`p-8 rounded-lg border ${impact.bgColor} ${impact.borderColor} flex gap-5 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <span className={`material-symbols-outlined text-[40px] ${impact.iconColor} shrink-0`} style={{ fontVariationSettings: '"FILL" 1' }}>
                {impact.icon}
              </span>
              <div className="space-y-2">
                <h3 className="font-display text-lg md:text-xl font-bold text-on-surface">
                  {impact.title}
                </h3>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">
                  {impact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Main Two-Column Payment & Form Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Ways to Donate */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-primary">Ways to Donate</h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              We support direct digital transfers. Make a contribution via your mobile UPI app or standard Net Banking.
            </p>
          </div>

          {/* UPI Card */}
          <div className="bg-surface-card border border-outline-variant/35 p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-secondary text-[32px]">qr_code_scanner</span>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-on-surface">UPI Transfer</h3>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-wider">Scan and pay instantly</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-surface-container-low border border-dashed border-outline-variant/60 rounded text-center space-y-4">
              {/* Generated QR Code Placeholder */}
              <div className="bg-white p-3 rounded-lg border border-outline-variant/30 shadow-sm relative group overflow-hidden">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=ganeshnagarkalibari@upi%26pn=Ganesh%20Nagar%20Kali%20Bari" 
                  alt="UPI QR Code Placeholder"
                  className="w-[180px] h-[180px] transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Scan UPI ID:</span>
                <code className="bg-surface px-3 py-1 rounded border border-outline-variant/30 text-sm font-semibold text-primary font-mono select-all">
                  {siteContent.bankDetails.upiId}
                </code>
              </div>
              <p className="font-sans text-sm text-on-surface-variant max-w-xs leading-relaxed">
                Open Google Pay, PhonePe, Paytm, or any BHIM UPI app and scan or copy the ID above to transfer funds directly.
              </p>
            </div>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-surface-card border border-outline-variant/35 p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-secondary text-[32px]">account_balance</span>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-on-surface">Bank Transfer</h3>
                <p className="font-sans text-[10px] text-on-surface-variant uppercase tracking-wider">NEFT / IMPS / RTGS</p>
              </div>
            </div>
            
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant font-medium">Account Name:</span>
                <span className="text-on-surface font-semibold text-right">{siteContent.bankDetails.accountName}</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant font-medium">Bank Name:</span>
                <span className="text-on-surface font-semibold text-right">{siteContent.bankDetails.bankName}</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant font-medium">Account Number:</span>
                <span className="text-on-surface font-mono font-semibold text-right select-all">{siteContent.bankDetails.accountNumber}</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-2">
                <span className="text-on-surface-variant font-medium">IFSC Code:</span>
                <span className="text-on-surface font-mono font-semibold text-right select-all">{siteContent.bankDetails.ifsc}</span>
              </li>
              <li className="flex justify-between items-baseline pb-1">
                <span className="text-on-surface-variant font-medium">Branch Location:</span>
                <span className="text-on-surface font-semibold text-right">{siteContent.bankDetails.branch}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Donation Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h2 className="font-display text-2xl font-bold text-primary">Request a Receipt</h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              Once you have completed your payment transaction, please fill in the details below to request a formal receipt from the Kali Bari administrative office.
            </p>
          </div>
          <DonationForm />
        </div>

      </section>
    </div>
  );
}
