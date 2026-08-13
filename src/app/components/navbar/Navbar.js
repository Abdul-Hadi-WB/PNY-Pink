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
  const pathname = usePathname(); // Get current route

  // ✅ "Contact" moved to the last position
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // For mobile menu – same order, "Contact" at the end
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

  // Helper to check if link is active (JavaScript syntax - no type annotation)
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
        <div className="mx-auto flex min-h-[54px] max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1 sm:gap-4 sm:px-5 lg:px-8">
          {/* LEFT — CONTACT (stack on tiny screens) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <a href="tel:03041117774" className="flex items-center gap-1.5 text-xs font-medium sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 sm:h-7 sm:w-7">
                <Phone size={14} />
              </span>
              <span className="whitespace-nowrap">0304-1117774</span>
            </a>

            <a href="mailto:info@joinpnypink.com" className="hidden items-center gap-1.5 text-xs font-medium sm:flex sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 sm:h-7 sm:w-7">
                <Mail size={14} />
              </span>
              <span className="whitespace-nowrap">info@joinpnypink.com</span>
            </a>
          </div>

          {/* RIGHT — QUICK LINKS (hide progressively on smaller screens) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Link href="/fee-structure" className="hidden text-xs font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white sm:block sm:text-sm">
              Fee Structure
            </Link>
            <span className="hidden h-5 w-px bg-white/30 sm:block" />

            <Link href="/training-schedule" className="hidden text-xs font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white md:block sm:text-sm">
              Training Schedule
            </Link>
            <span className="hidden h-5 w-px bg-white/30 md:block" />

            <Link href="/admission" className="hidden text-xs font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white lg:block sm:text-sm">
              Admission
            </Link>

            <Link href="/login" className="flex items-center gap-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:text-white sm:text-sm">
              <LogIn size={15} />
              <span>Login</span>
            </Link>

            <Link href="/enroll" className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[#16A34A] to-[#15803D] px-3 py-1.5 text-xs font-bold text-white shadow-[0_5px_18px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#22C55E] hover:to-[#16A34A] hover:shadow-[0_8px_25px_rgba(22,163,74,0.45)] sm:flex sm:px-5 sm:py-2 sm:text-sm">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-pink-100/80 bg-white shadow-[0_5px_25px_rgba(194,54,111,0.08)]">
        <div className="mx-auto flex min-h-[72px] flex-wrap items-center gap-3 px-4 py-2 sm:min-h-[88px] sm:gap-5 sm:px-5 lg:gap-7 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="shrink-0 transition-all duration-300 hover:scale-[1.03]">
            <img
              src="/images/pnypink-footer-logo.png"
              alt="PNY Pink"
              className="h-14 w-auto object-contain sm:h-[68px] md:h-[78px]"
            />
          </Link>

          {/* CATEGORIES — hidden on mobile/tablet, visible on large screens */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              aria-haspopup="menu"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-4 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(194,54,111,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(194,54,111,0.32)] lg:px-5 lg:py-3.5"
            >
              <Grid3X3 size={18} className="transition-transform duration-300 group-hover:rotate-90" />
              <span>Categories</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* CATEGORY DROPDOWN */}
            {categoriesOpen && (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[220px] overflow-hidden rounded-xl border border-pink-100 bg-white shadow-[0_14px_35px_rgba(194,54,111,0.18)] lg:w-[245px]">
                <div className="bg-gradient-to-r from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-4 py-3 text-[13px] font-bold text-white">
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
                    className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]"
                  >
                    <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                      <Icon size={17} className="text-[#C2366F]" />
                      {label}
                    </span>
                    <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH — hidden on small screens, shows on large */}
          <div className="hidden flex-1 lg:block">
            <div className="group relative">
              <input
                type="text"
                placeholder="Search for the skills you want to learn..."
                className="h-[50px] w-full rounded-xl border border-[#C2366F] bg-white px-5 pr-14 text-[15px] text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white focus:border-[#A62258] focus:bg-white focus:ring-4 focus:ring-[#C2366F]/15 focus:shadow-[0_0_20px_rgba(194,54,111,0.18)]"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-[#D94F83] to-[#A62258] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <Search size={19} />
              </button>
            </div>
          </div>

          {/* NAV LINKS — desktop only, with active state underline */}
          <nav className="hidden items-center gap-4 xl:flex xl:gap-6">
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className="group relative whitespace-nowrap text-[15px] font-semibold text-gray-800 transition-colors duration-300 hover:text-[#C2366F]"
                >
                  {label}
                  {/* Underline - visible on hover AND when active */}
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
            className="ml-auto rounded-xl p-2 text-[#C2366F] transition-all duration-300 hover:bg-pink-50 lg:hidden"
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* MOBILE MENU — with active state styling */}
        {mobileOpen && (
          <div className="border-t border-pink-100 bg-white px-4 py-5 shadow-xl lg:hidden sm:px-5">
            <div className="flex flex-col gap-1">
              {mobileNavLinks.map(([name, href]) => {
                const active = isActive(href);
                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all duration-300 hover:bg-pink-50 hover:pl-6 ${
                      active
                        ? "bg-pink-50 text-[#C2366F] pl-6"
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
                className="mt-3 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#15803D] px-4 py-3.5 text-center font-bold text-white shadow-md"
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