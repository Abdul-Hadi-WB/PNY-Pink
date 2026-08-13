"use client";

import { Phone, Mail, MapPin, Send, MessageCircle, User, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf0f5] to-white">
      
      {/* Hero Section with Left Heading & Right Image - Extended Height */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#C2366F] via-[#D94F83] to-[#E986AE] py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:px-4">
            
            {/* Left Side - Heading */}
            <div className="flex-1 pl-0 text-center lg:pl-8 xl:pl-16 lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight -mt-2 sm:-mt-3 md:-mt-4">
                Begin Your Journey
              </h1>
              <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[19px] text-white/90">
                Connect with us today and take the first step toward<br className="hidden sm:block" />
                building a successful career in the beauty industry.
              </p>
              
              {/* Badges Below Paragraph */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 text-xs sm:text-sm flex items-center gap-2">
                  <span className="text-[#7BD535]">●</span>
                  We're here to help
                </div>
                <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-1.5 sm:py-2 text-white/80 text-xs sm:text-sm flex items-center gap-2">
                  <span>📩</span>
                  info@joinpnypink.com
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-shrink-0 lg:pr-4 xl:pr-10">
              <img
                src="/images/contactimg.png"
                alt="Contact Us"
                className="h-32 w-auto object-contain drop-shadow-2xl sm:h-36 md:h-40 lg:h-48 xl:h-56"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:px-8 lg:px-12">
        
        {/* Contact Info Cards with Animated Hover Effects */}
        <div className="mb-12 sm:mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { 
              icon: MapPin, 
              label: "Iqbal Town Branch", 
              value: "743-B, Kashmir Block Allama Iqbal Town Lahore, Pakistan",
              gradient: "from-[#C2366F] to-[#C2366F]",
              shadowColor: "hover:shadow-[#C2366F]/30",
              textColor: "group-hover:text-[#C2366F]",
              glowColor: "[#C2366F]"
            },
            { 
              icon: MapPin, 
              label: "UAE Branch", 
              value: "Office # 14, Building # 3, M17 Mussafah Abu Dhabi",
              gradient: "from-[#7BD535] to-[#5fa82a]",
              shadowColor: "hover:shadow-[#7BD535]/30",
              textColor: "group-hover:text-[#7BD535]",
              glowColor: "[#7BD535]"
            },
            { 
              icon: Mail, 
              label: "Email", 
              value: "info@joinpnypink.com",
              gradient: "from-[#C2366F] to-[#C2366F]",
              shadowColor: "hover:shadow-[#C2366F]/30",
              textColor: "group-hover:text-[#C2366F]",
              glowColor: "[#C2366F]"
            },
            { 
              icon: Phone, 
              label: "Call Us", 
              value: "0304-1111774",
              gradient: "from-[#7BD535] to-[#5fa82a]",
              shadowColor: "hover:shadow-[#7BD535]/30",
              textColor: "group-hover:text-[#7BD535]",
              glowColor: "[#7BD535]"
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white p-5 sm:p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.shadowColor}`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-[#C2366F]/10 to-[#7BD535]/10 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150 group-hover:translate-x-8 group-hover:translate-y-8"></div>
              <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-gradient-to-br from-[#7BD535]/10 to-[#C2366F]/10 opacity-0 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:scale-150 group-hover:-translate-x-8 group-hover:-translate-y-8"></div>

              {/* Icon with Pulsing Animation */}
              <div className="relative">
                <div className={`inline-flex rounded-xl bg-gradient-to-br ${item.gradient} p-2.5 sm:p-3 text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-${item.glowColor}/30`}>
                  <item.icon size={20} className="sm:size-[24px] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150`}></div>
              </div>

              {/* Content with Slide Animation */}
              <div className="relative mt-3 sm:mt-4 overflow-hidden">
                <h3 className={`font-semibold text-gray-700 transition-all duration-500 ${item.textColor} group-hover:translate-x-2 text-sm sm:text-base`}>
                  {item.label}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 transition-all duration-500 delay-75 group-hover:text-gray-800 group-hover:translate-x-2">
                  {item.value}
                </p>
              </div>

              {/* Animated Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>

              {/* Decorative Bottom Line with Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                <div className={`h-full w-0 bg-gradient-to-r ${item.gradient} transition-all duration-700 group-hover:w-full`}></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -right-1 -top-1 h-0 w-0 rounded-tr-2xl bg-gradient-to-br from-[#C2366F]/5 to-[#7BD535]/5 transition-all duration-700 group-hover:h-12 group-hover:w-12"></div>
            </div>
          ))}
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-5">
          
          {/* Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="mb-6 sm:mb-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242124]">Send Us a Message</h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">We'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name <span className="text-[#C2366F]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 sm:py-3 pl-11 transition-all duration-300 focus:border-[#C2366F] focus:outline-none focus:ring-2 focus:ring-[#C2366F]/20 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 sm:py-3 transition-all duration-300 focus:border-[#C2366F] focus:outline-none focus:ring-2 focus:ring-[#C2366F]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email <span className="text-[#C2366F]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 sm:py-3 pl-11 transition-all duration-300 focus:border-[#C2366F] focus:outline-none focus:ring-2 focus:ring-[#C2366F]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+92 "
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 sm:py-3 pl-11 transition-all duration-300 focus:border-[#C2366F] focus:outline-none focus:ring-2 focus:ring-[#C2366F]/20 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Comment <span className="text-[#C2366F]">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-2.5 sm:py-3 pl-11 transition-all duration-300 focus:border-[#C2366F] focus:outline-none focus:ring-2 focus:ring-[#C2366F]/20 text-sm sm:text-base"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-[#C2366F] px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-[#C2366F]/30 transition-all duration-500 hover:scale-[1.02] hover:bg-[#C2366F] hover:shadow-xl hover:shadow-[#C2366F]/40"
                >
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={18} className="sm:size-[20px] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    Submit Message
                  </span>
                  
                  {/* Bottom Border Glow */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/40 transition-all duration-700 group-hover:w-full"></div>
                </button>
              </form>
            </div>
          </div>

          {/* WhatsApp Card - 2 columns */}
          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-3xl bg-[#C2366F] p-6 sm:p-8 md:p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative flex items-center gap-3">
                <MessageCircle size={24} className="sm:size-[28px] text-white" />
                <h3 className="text-xl sm:text-2xl font-bold">WhatsApp</h3>
              </div>
              <p className="relative mt-3 sm:mt-4 text-base sm:text-lg">0300-0404692</p>
              <p className="relative mt-1 sm:mt-2 text-white/80 text-sm sm:text-base">Available 9 AM - 9 PM</p>
              <button className="relative mt-6 sm:mt-8 w-full rounded-xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-[#C2366F] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl text-sm sm:text-base">
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="mx-auto max-w-7xl">

            {/* Section Heading - Enhanced */}
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col items-start justify-between gap-3 sm:gap-4 md:flex-row md:items-end">
              <div className="flex items-center gap-3 sm:gap-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-extrabold text-[#252525] leading-none">
                  Find Us <span className="text-[#C2366F]">Here</span>
                </h3>
                <MapPin
                  className="text-[#C2366F] flex-shrink-0"
                  size={24}
                  strokeWidth={1.8}
                />
              </div>
            </div>

            {/* Map Container - Premium Card */}
            <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-white p-1.5 sm:p-2 shadow-[0_15px_40px_rgba(194,54,111,0.10)] ring-1 ring-[#C2366F]/10 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(194,54,111,0.16)] hover:ring-[#C2366F]/20">

              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-[18px] sm:rounded-[20px] md:rounded-[24px]">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.518743634887!2d74.327774!3d31.478498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901c6c02f2e4f%3A0x1b8b4a4c4f2f5e6d!2s743-B%2C%20Kashmir%20Block%20Allama%20Iqbal%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PNY Pink Location Map"
                />

                {/* Glassmorphism Overlay Badge - Top Right */}
                <div className="absolute right-3 sm:right-4 top-3 sm:top-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="rounded-lg sm:rounded-xl bg-[#C2366F]/10 p-1.5 sm:p-2">
                      <MapPin size={14} className="sm:size-[18px] text-[#C2366F]" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-500">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-gray-800">Iqbal Town</p>
                    </div>
                  </div>
                </div>

                {/* Premium Location Badge - Bottom Left */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 md:bottom-6 md:left-6">
                  <div className="group/badge relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3.5 shadow-xl border border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#C2366F] to-[#E986AE] opacity-0 transition-opacity duration-500 group-hover/badge:opacity-10"></div>
                    <div className="relative flex items-center gap-2 sm:gap-3">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-[#C2366F] text-white shadow-lg shadow-[#C2366F]/30 transition-all duration-500 group-hover/badge:shadow-[#C2366F]/50">
                        <MapPin size={14} className="sm:size-[18px]" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-medium text-gray-500">Visit Us</p>
                        <p className="text-xs sm:text-sm font-bold text-[#252525]">743-B, Kashmir Block</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Decorative Line */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#C2366F] via-[#E986AE] to-[#C2366F]"></div>

                {/* Bottom Decorative Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>

              {/* Footer Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 md:px-6 md:py-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-[#C2366F]">📍</span>
                    <span className="hidden xs:inline">743-B, Kashmir Block, Lahore</span>
                    <span className="inline xs:hidden">Lahore</span>
                  </div>
                  <div className="hidden sm:block h-5 sm:h-6 w-px bg-gray-200"></div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-[#C2366F]">📞</span>
                    <span>0304-1111774</span>
                  </div>
                  <div className="hidden lg:block h-5 sm:h-6 w-px bg-gray-200"></div>
                  <div className="hidden lg:flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-[#C2366F]">✉️</span>
                    <span>info@joinpnypink.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-400">
                  <span>🕐</span>
                  <span className="hidden xs:inline">Mon-Sat: 9AM - 9PM</span>
                  <span className="inline xs:hidden">9AM-9PM</span>
                </div>
              </div>

              {/* Minimal Pink Detail */}
              <div className="absolute bottom-0 left-1/2 h-[3px] w-16 sm:w-20 md:w-24 -translate-x-1/2 rounded-t-full bg-[#C2366F]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}