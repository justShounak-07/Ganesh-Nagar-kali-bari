import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary-container text-on-primary-container font-sans text-sm">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 px-margin-mobile py-16 md:grid-cols-4 md:px-margin-desktop">
        {/* Brand Details */}
        <div className="space-y-4 md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-2xl font-bold text-on-primary-container hover:text-secondary-container transition-colors"
          >
            <img
              src="/assets/KaliBari-logo.png"
              alt="Kali Bari Logo"
              className="h-25 w-25 object-contain rounded-full"
            />
            <span>{siteContent.brand.name}</span>
          </Link>
          <p className="max-w-md text-base text-on-primary-container/85 leading-relaxed">
            {siteContent.brand.description}
          </p>
          <div className="pt-2 text-base text-on-primary-container/85">
            <p className="font-bold mb-1">Kali Bari Address:</p>
            <p>{siteContent.contact.address}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-base">
          <h4 className="text-m font-bold uppercase tracking-wider text-on-primary-container/70">
            Quick Navigation
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-semibold">
            <li>
              <Link
                href="/"
                className="hover:text-secondary-container transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about/history"
                className="hover:text-secondary-container transition-colors"
              >
                History
              </Link>
            </li>
            <li>
              <Link
                href="/about/management"
                className="hover:text-secondary-container transition-colors"
              >
                Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/puja"
                className="hover:text-secondary-container transition-colors"
              >
                Puja Seva
              </Link>
            </li>
            <li>
              <Link
                href="/services/social-cultural"
                className="hover:text-secondary-container transition-colors"
              >
                Welfare
              </Link>
            </li>
            <li>
              <Link
                href="/festivals"
                className="hover:text-secondary-container transition-colors"
              >
                Festivals
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="hover:text-secondary-container transition-colors"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-secondary-container transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/visit-us"
                className="hover:text-secondary-container transition-colors"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect & Help */}
        <div className="space-y-4 text-base">
          <h4 className="text-sm font-bold uppercase tracking-wider text-on-primary-container/70">
            Connect & Help
          </h4>
          <ul className="space-y-3 font-semibold">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                phone
              </span>
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="hover:text-secondary-container transition-colors"
              >
                {siteContent.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="hover:text-secondary-container transition-colors"
              >
                {siteContent.contact.email}
              </a>
            </li>
            <li>
              <Link
                href="/donate"
                className="inline-flex bg-secondary text-on-secondary px-5 py-2.5 rounded-default text-xs font-semibold uppercase hover:bg-secondary/90 transition-colors shadow-sm"
              >
                Make Donation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-on-primary-container/20 px-margin-mobile py-6 text-center text-on-primary-container/70 md:px-margin-desktop">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 md:flex-row text-sm">
          <p>
            © {new Date().getFullYear()} {siteContent.brand.name}. All Rights
            Reserved.
          </p>
          <div className="flex gap-6 font-semibold">
            <a
              href="#"
              className="hover:text-secondary-container transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-secondary-container transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
