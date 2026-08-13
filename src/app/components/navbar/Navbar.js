"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  LogIn,
  Grid3X3,
  Sparkles,
  Circle,
  Palette,
  Scissors,
  Flower2,
  Eye,
  Utensils,
  Megaphone,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const mobileNavLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
    ["Fee Structure", "/fee-structure"],
    ["Training Schedule", "/training-schedule"],
    ["Admission", "/admission"],
    ["Login", "/login"],
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header>
      {/* TOP BAR — fully responsive */}
      <div className="bg-[radial-gradient(ellipse_at_center,_#E986AE_0%,_#C2366F_48%,_#73153F_100%)] text-white">
        <div className="mx-auto flex min-h-[48px] sm:min-h-[54px] max-w-7xl flex-wrap items-center justify-between gap-1.5 px-3 py-1 sm:gap-4 sm:px-5 lg:px-8">
          {/* LEFT — CONTACT */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6">
            <a href="tel:03041117774" className="flex items-center gap-1 text-[11px] font-medium sm:gap-1.5 sm:text-xs md:text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 sm:h-6 sm:w-6 md:h-7 md:w-7">
                <Phone size={12} className="sm:size-[14px]" />
              </span>
              <span className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm">0304-1117774</span>
            </a>

            <a href="mailto:info@joinpnypink.com" className="hidden items-center gap-1 text-[11px] font-medium sm:flex sm:gap-1.5 sm:text-xs md:text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 sm:h-6 sm:w-6 md:h-7 md:w-7">
                <Mail size={12} className="sm:size-[14px]" />
              </span>
              <span className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm">info@joinpnypink.com</span>
            </a>
          </div>

          {/* RIGHT — QUICK LINKS */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 md:gap-4">
            <Link href="/fee-structure" className="hidden text-[10px] font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white sm:block sm:text-xs md:text-sm">
              Fee Structure
            </Link>
            <span className="hidden h-4 w-px bg-white/30 sm:block md:h-5" />

            <Link href="/training-schedule" className="hidden text-[10px] font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white md:block sm:text-xs md:text-sm">
              Training Schedule
            </Link>
            <span className="hidden h-4 w-px bg-white/30 md:block md:h-5" />

            <Link href="/admission" className="hidden text-[10px] font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white lg:block sm:text-xs md:text-sm">
              Admission
            </Link>

            <Link href="/login" className="flex items-center gap-0.5 text-[10px] font-medium transition-all duration-300 hover:scale-105 hover:text-white sm:gap-1 sm:text-xs md:text-sm">
              <LogIn size={13} className="sm:size-[14px] md:size-[15px]" />
              <span className="hidden xs:inline">Login</span>
            </Link>

            <Link href="/enroll" className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#16A34A] to-[#15803D] px-2.5 py-1 text-[10px] font-bold text-white shadow-[0_5px_18px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#22C55E] hover:to-[#16A34A] hover:shadow-[0_8px_25px_rgba(22,163,74,0.45)] sm:flex sm:px-4 sm:py-1.5 sm:text-xs md:px-5 md:py-2 md:text-sm">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-pink-100/80 bg-white shadow-[0_5px_25px_rgba(194,54,111,0.08)]">
        <div className="mx-auto flex min-h-[64px] flex-wrap items-center gap-2 px-3 py-1.5 sm:min-h-[72px] sm:gap-3 sm:px-4 sm:py-2 md:min-h-[80px] md:gap-4 md:px-5 lg:min-h-[88px] lg:gap-5 lg:px-6 xl:gap-7 xl:px-8">
          
          {/* LOGO */}
          <Link href="/" className="shrink-0 transition-all duration-300 hover:scale-[1.03]">
            <img
              src="/images/pnypink-footer-logo.png"
              alt="PNY Pink"
              className="h-10 w-auto object-contain sm:h-14 md:h-[68px] lg:h-[78px]"
            />
          </Link>

          {/* CATEGORIES */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              aria-haspopup="menu"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-3 py-2 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(194,54,111,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(194,54,111,0.32)] lg:px-4 lg:py-2.5 lg:text-sm xl:px-5 xl:py-3.5"
            >
              <Grid3X3 size={16} className="lg:size-[18px] transition-transform duration-300 group-hover:rotate-90" />
              <span className="hidden xl:inline">Categories</span>
              <span className="inline xl:hidden">Cat</span>
              <ChevronDown size={14} className="lg:size-[16px] transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}" />
            </button>

            {/* CATEGORY DROPDOWN */}
            {categoriesOpen && (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[200px] overflow-hidden rounded-xl border border-pink-100 bg-white shadow-[0_14px_35px_rgba(194,54,111,0.18)] lg:w-[220px] xl:w-[245px]">
                <div className="bg-gradient-to-r from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-3 py-2.5 text-[11px] font-bold text-white lg:px-4 lg:py-3 lg:text-[13px]">
                  Explore Categories
                </div>

                {[
                  { label: "Beautician", href: "/categories/beautician", icon: Sparkles },
                  { label: "Skin", href: "/categories/skin", icon: Circle },
                  { label: "Makeup", href: "/categories/makeup", icon: Palette },
                  { label: "Hair", href: "/categories/hair", icon: Scissors },
                  { label: "Nail Art", href: "/categories/nail-art", icon: Flower2 },
                  { label: "Eyelash", href: "/categories/eyelash", icon: Eye },
                  { label: "Cooking & Baking", href: "/categories/cooking-baking", icon: Utensils },
                  { label: "Short Courses", href: "/categories/short-courses", icon: Megaphone },
                ].map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setCategoriesOpen(false)}
                    className="group flex items-center justify-between px-3 py-2 transition-all duration-200 hover:bg-[#FFF0F6] lg:px-4 lg:py-2.5"
                  >
                    <span className="flex items-center gap-2 text-[12px] font-medium text-gray-700 lg:gap-2.5 lg:text-[14px]">
                      <Icon size={14} className="lg:size-[17px] text-[#C2366F]" />
                      {label}
                    </span>
                    <ChevronRight size={13} className="lg:size-[15px] text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH */}
          <div className="hidden flex-1 lg:block">
            <div className="group relative">
              <input
                type="text"
                placeholder="Search for skills..."
                className="h-[38px] w-full rounded-xl border border-[#C2366F] bg-white px-4 pr-12 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white focus:border-[#A62258] focus:bg-white focus:ring-4 focus:ring-[#C2366F]/15 focus:shadow-[0_0_20px_rgba(194,54,111,0.18)] lg:h-[44px] lg:px-5 lg:text-[15px] xl:h-[50px] xl:pr-14"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-[#D94F83] to-[#A62258] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md lg:h-9 lg:w-9 xl:h-10 xl:w-10"
              >
                <Search size={15} className="lg:size-[17px] xl:size-[19px]" />
              </button>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-3 xl:flex xl:gap-4 2xl:gap-6">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className="group relative whitespace-nowrap text-[13px] font-semibold text-gray-800 transition-colors duration-300 hover:text-[#C2366F] lg:text-[14px] xl:text-[15px]"
                >
                  {label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#C2366F] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="ml-auto rounded-xl p-1.5 text-[#C2366F] transition-all duration-300 hover:bg-pink-50 sm:p-2 lg:hidden"
          >
            {mobileOpen ? <X size={22} className="sm:size-[27px]" /> : <Menu size={22} className="sm:size-[27px]" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-pink-100 bg-white px-3 py-4 shadow-xl sm:px-4 sm:py-5 lg:hidden">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {mobileNavLinks.map(([name, href]) => {
                const active = isActive(href);
                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-pink-50 hover:pl-4 sm:px-4 sm:py-3.5 sm:text-[15px] ${
                      active
                        ? "bg-pink-50 text-[#C2366F] pl-4 sm:pl-6"
                        : "text-gray-700 hover:text-[#C2366F]"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
              <Link
                href="/enroll"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#15803D] px-4 py-2.5 text-center text-sm font-bold text-white shadow-md sm:mt-3 sm:py-3.5 sm:text-[15px]"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}