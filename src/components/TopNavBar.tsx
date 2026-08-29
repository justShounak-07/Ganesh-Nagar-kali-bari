"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/siteContent";

export const TopNavBar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      dropdownKey: "about",
      subsections: [
        { name: "History", path: "/about/history" },
        { name: "Management", path: "/about/management" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownKey: "services",
      subsections: [
        { name: "Puja Services", path: "/services/puja" },
        { name: "Social-Cultural Services", path: "/services/social-cultural" },
      ],
    },
    { name: "Festivals", path: "/festivals" },
    { name: "Calendar", path: "/calendar" },
    { name: "Gallery", path: "/gallery" },
    { name: "Visit Us", path: "/visit-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4.5 md:px-margin-desktop">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-primary transition-colors hover:text-secondary"
        >
          <img
            src="/assets/KaliBari-logo.png"
            alt="Kali Bari Logo"
            className="h-9 w-9 object-contain rounded-full"
          />
          <span>{siteContent.brand.name}</span>
        </Link>

        {/* Desktop Navigation (Switches to mobile at xl breakpoint to handle 9 links beautifully) */}
        <div className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isSubActive = link.subsections?.some(
                  (sub) => pathname === sub.path,
                );
                const isAbout = link.dropdownKey === "about";
                const isOpen = isAbout
                  ? aboutDropdownOpen
                  : servicesDropdownOpen;
                const setIsOpen = isAbout
                  ? setAboutDropdownOpen
                  : setServicesDropdownOpen;

                return (
                  <li
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-sans text-sm font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer py-1.5 ${
                        isSubActive
                          ? "text-primary border-b-2 border-primary"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <span className="material-symbols-outlined text-[18px]">
                        keyboard_arrow_down
                      </span>
                    </button>

                    {/* Dropdown Panel */}
                    {isOpen && (
                      <div className="absolute left-0 top-full w-56 rounded-md border border-outline-variant bg-surface-card p-2.5 shadow-lg animate-in fade-in duration-200">
                        {link.subsections?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className={`block w-full px-4 py-2 text-left font-sans text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                              pathname === sub.path
                                ? "bg-surface-container text-primary"
                                : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`font-sans text-sm font-semibold uppercase tracking-wider transition-colors duration-300 pb-1.5 ${
                      isActive
                        ? "text-primary border-b-2 border-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2.5 rounded-default font-sans text-sm font-semibold uppercase tracking-wider hover:bg-primary-container transition-all shadow-sm hover:shadow-md"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden text-primary flex items-center justify-center p-1"
        >
          <span className="material-symbols-outlined text-[30px]">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Overlay (as vertical list) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[64px] bottom-0 w-full bg-surface border-t border-outline-variant z-40 overflow-y-auto px-margin-mobile py-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isSubActive = link.subsections?.some(
                  (sub) => pathname === sub.path,
                );
                const isAbout = link.dropdownKey === "about";
                const isOpen = isAbout
                  ? aboutDropdownOpen
                  : servicesDropdownOpen;
                const setIsOpen = isAbout
                  ? setAboutDropdownOpen
                  : setServicesDropdownOpen;

                return (
                  <li
                    key={link.name}
                    className="border-b border-outline-variant/30 pb-4"
                  >
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className={`flex w-full items-center justify-between font-sans text-sm font-semibold uppercase tracking-wider text-left ${
                        isSubActive ? "text-primary" : "text-on-surface"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span
                        className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        keyboard_arrow_down
                      </span>
                    </button>

                    {/* Mobile Dropdown Subsections */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3 pl-4" : "max-h-0"}`}
                    >
                      <ul className="flex flex-col gap-4">
                        {link.subsections?.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.path}
                              className={`block font-sans text-xs font-semibold uppercase tracking-wider ${
                                pathname === sub.path
                                  ? "text-primary"
                                  : "text-on-surface-variant"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              const isActive = pathname === link.path;
              return (
                <li
                  key={link.name}
                  className="border-b border-outline-variant/30 pb-4"
                >
                  <Link
                    href={link.path}
                    className={`block font-sans text-sm font-semibold uppercase tracking-wider ${
                      isActive ? "text-primary" : "text-on-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/donate"
              className="inline-flex w-full items-center justify-center bg-primary text-on-primary py-3 rounded-default font-sans text-xs font-semibold uppercase tracking-wider text-center hover:bg-primary-container transition-all"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
