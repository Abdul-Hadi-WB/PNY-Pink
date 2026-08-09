'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#C2366F] text-white">

      {/* Top Green Accent */}
      <div className="h-1 w-full bg-[#7BD535]" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div className="lg:pr-8">

            {/* Logo */}
            <div className="mb-6 inline-flex rounded-xl bg-white px-5 py-3 shadow-lg">
              <img
                src="/images/pnypink-footer-logo.png"
                alt="PNY Pink"
                className="w-44 object-contain"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/90">
              Empowering women through education, skills, confidence and
              entrepreneurship. Building opportunities for a brighter future.
            </p>

            {/* Social Media Icons */}
            <div className="mt-7 flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3zM12.1 21.6c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.8 1 1-3.7-.2-.3a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.3-4.4 9.7-9.8 9.7zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.5-.3z" />
                </svg>
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mb-7 h-1 w-8 rounded-full bg-[#7BD535]" />

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Admissions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Gallery
                </a>
              </li>

            </ul>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Explore
            </h3>

            <div className="mb-7 h-1 w-8 rounded-full bg-[#7BD535]" />

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  News & Updates
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-[#7BD535]"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="mb-4 text-lg font-bold text-white">
              Get In Touch
            </h3>

            <div className="mb-7 h-1 w-8 rounded-full bg-[#7BD535]" />

            <div className="space-y-5">

              <div className="flex gap-3">
                <span className="text-xl text-[#7BD535]">
                  ⌖
                </span>

                <p className="text-sm leading-6 text-white/90">
                  Lahore, Pakistan
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-xl text-[#7BD535]">
                  ☎
                </span>

                <p className="text-sm text-white/90">
                  0304-1111774
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-xl text-[#7BD535]">
                  ✉
                </span>

                <p className="text-sm text-white/90">
                  info@pnypink.com
                </p>
              </div>

            </div>

            <a
              href="#"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#252525] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7BD535] hover:text-[#252525]"
            >
              Contact Us
              <span className="text-lg">
                →
              </span>
            </a>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/20 bg-[#252525]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center md:flex-row md:px-10 md:text-left">

          <p className="text-xs text-white/70">
            © 2026{' '}
            <span className="font-semibold text-[#7BD535]">
              PNY Pink
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-[#7BD535]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-[#7BD535]"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-[#7BD535]"
            >
              Sitemap
            </a>

          </div>

          <p className="text-xs text-white/70">
            Made with{' '}
            <span className="text-[#C2366F]">
              ♥
            </span>{' '}
            for womens
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer