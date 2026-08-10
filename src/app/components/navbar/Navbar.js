"use client";

import Link from "next/link";
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

  return (
    <header>
      {/* ===== TOP BAR ===== */}
      <div className="bg-[radial-gradient(ellipse_at_center,_#E986AE_0%,_#C2366F_48%,_#73153F_100%)] text-white">
        <div className="mx-auto flex min-h-[54px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          {/* LEFT — CONTACT */}
          <div className="flex items-center gap-6">
            <a href="tel:03041117774" className="flex items-center gap-2 text-sm font-medium">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <Phone size={14} />
              </span>
              <span className="transition-all duration-300 group-hover:text-base">
                0304-1117774
              </span>
            </a>

            <a href="mailto:info@joinpnypink.com" className="hidden items-center gap-2 text-sm font-medium sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <Mail size={14} />
              </span>
              <span className="transition-all duration-300 group-hover:text-base">
                info@joinpnypink.com
              </span>
            </a>
          </div>

          {/* RIGHT — QUICK LINKS */}
          <div className="flex items-center gap-4">
            <Link href="/fee-structure" className="hidden text-sm font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white sm:block">
              Fee Structure
            </Link>
            <span className="hidden h-5 w-px bg-white/30 sm:block" />

            <Link href="/training-schedule" className="hidden text-sm font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white md:block">
              Training Schedule
            </Link>
            <span className="hidden h-5 w-px bg-white/30 md:block" />

            <Link href="/admission" className="hidden text-sm font-medium text-white/90 transition-all duration-300 hover:scale-105 hover:text-white lg:block">
              Admission
            </Link>

            <Link href="/login" className="flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-white">
              <LogIn size={15} />
              <span>Login</span>
            </Link>

            <Link href="/enroll" className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-[#16A34A] to-[#15803D] px-5 py-2 text-sm font-bold text-white shadow-[0_5px_18px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#22C55E] hover:to-[#16A34A] hover:shadow-[0_8px_25px_rgba(22,163,74,0.45)] sm:flex">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <div className="border-b border-pink-100/80 bg-white shadow-[0_5px_25px_rgba(194,54,111,0.08)]">
        <div className="mx-auto flex h-[88px] max-w-7xl items-center gap-7 px-5 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="shrink-0 transition-all duration-300 hover:scale-[1.03]">
            <img src="/images/pnypink-footer-logo.png" alt="PNY Pink" className="h-[78px] w-auto object-contain" />
          </Link>

          {/* ===== CATEGORIES ===== */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              aria-haspopup="menu"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(194,54,111,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(194,54,111,0.32)]"
            >
              <Grid3X3 size={18} className="transition-transform duration-300 group-hover:rotate-90" />
              <span>Categories</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>

            {categoriesOpen && (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[245px] overflow-hidden rounded-xl border border-pink-100 bg-white shadow-[0_14px_35px_rgba(194,54,111,0.18)]">
                <div className="bg-gradient-to-r from-[#E86D9B] via-[#C2366F] to-[#8A1D4B] px-4 py-3 text-[13px] font-bold text-white">
                  Explore Categories
                </div>

                <Link href="/categories/beautician" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Sparkles size={17} className="text-[#C2366F]" /> Beautician
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/skin" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Circle size={17} className="text-[#C2366F]" /> Skin
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/makeup" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Palette size={17} className="text-[#C2366F]" /> Makeup
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/hair" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Scissors size={17} className="text-[#C2366F]" /> Hair
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/nail-art" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Flower2 size={17} className="text-[#C2366F]" /> Nail Art
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/eyelash" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Eye size={17} className="text-[#C2366F]" /> Eyelash
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/cooking-baking" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Utensils size={17} className="text-[#C2366F]" /> Cooking & Baking
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>

                <Link href="/categories/short-courses" onClick={() => setCategoriesOpen(false)} className="group flex items-center justify-between px-4 py-2.5 transition-all duration-200 hover:bg-[#FFF0F6]">
                  <span className="flex items-center gap-2.5 text-[14px] font-medium text-gray-700">
                    <Megaphone size={17} className="text-[#C2366F]" /> Short Courses
                  </span>
                  <ChevronRight size={15} className="text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C2366F]" />
                </Link>
              </div>
            )}
          </div>

          {/* ===== SEARCH ===== */}
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

          {/* ===== NAV LINKS ===== */}
          <nav className="hidden items-center gap-6 xl:flex">
            {["Home", "About Us", "Gallery", "Blog"].map((label) => {
              const href = label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "-")}`;
              return (
                <Link key={label} href={href} className="group relative whitespace-nowrap text-[15px] font-semibold text-gray-800 transition-colors duration-300 hover:text-[#C2366F]">
                  {label}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#C2366F] transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="ml-auto rounded-xl p-2.5 text-[#C2366F] transition-all duration-300 hover:bg-pink-50 lg:hidden"
          >
            {mobileOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {mobileOpen && (
          <div className="border-t border-pink-100 bg-white px-5 py-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Gallery", "/gallery"],
                ["Blog", "/blogs"],
                ["Fee Structure", "/fee-structure"],
                ["Training Schedule", "/training-schedule"],
                ["Admission", "/admission"],
                ["Login", "/login"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[15px] font-medium text-gray-700 transition-all duration-300 hover:bg-pink-50 hover:pl-6 hover:text-[#C2366F]"
                >
                  {name}
                </Link>
              ))}
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