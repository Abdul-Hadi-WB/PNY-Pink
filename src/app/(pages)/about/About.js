"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Target,
  Heart,
  Sparkles,
  ChevronRight,
  Play,
  Briefcase,
  GraduationCap,
  Globe,
  CheckCircle,
  TrendingUp,
  Shield,
  Lightbulb,
  Users as UsersIcon,
  Scale,
  Star,
  User,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#C2366F] blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C2366F] blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-gray-200/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-gray-200/30"></div>
        </div>

        <div className="container relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
          <div className="mx-auto text-center">

            <h1 className="mb-1 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Empowering Women Through
              <span className="block text-[#C2366F] border-b-2 border-[#C2366F] w-fit mx-auto pb-1">
                Education & Skills
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
              PNY Pink is a dedicated project for females, providing
              professional training and skills development in a supportive
              and empowering environment.
            </p>

            <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-4">
              {[
                { number: "50+", label: "Courses", icon: GraduationCap },
                { number: "10K+", label: "Students", icon: Users },
                { number: "5+", label: "Years", icon: Award },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[100px] rounded-xl bg-gray-50/80 p-3 text-center backdrop-blur-sm"
                >
                  <stat.icon
                    size={20}
                    className="mx-auto mb-1 text-[#C2366F]"
                  />
                  <div className="text-xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#22C55E]" />
                <span className="text-sm font-medium text-gray-700">
                  Trusted Institution
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#22C55E]" />
                <span className="text-sm font-medium text-gray-700">
                  100% Support
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#22C55E]" />
                <span className="text-sm font-medium text-gray-700">
                  Career Growth
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/enroll"
                className="rounded-xl bg-[#C2366F] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#A62258] hover:shadow-xl"
              >
                Get Started
              </Link>

              <Link
                href="#video"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-8 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-[#C2366F] hover:text-[#C2366F]"
              >
                <Play size={18} />
                Watch Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CEO SECTION - Wahab Yunus
      ===================================================== */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">

            <div className="relative order-2 lg:order-1 mx-auto w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-[#C2366F]/10 to-[#8A1D4B]/10 p-1">
                <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 h-16 w-16 md:h-24 md:w-24 rounded-full bg-[#C2366F]/20 blur-2xl"></div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 h-20 w-20 md:h-32 md:w-32 rounded-full bg-[#8A1D4B]/20 blur-2xl"></div>

                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#C2366F]/20 to-[#8A1D4B]/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Users
                      size={40}
                      className="text-[#C2366F] mx-auto mb-2 md:size-48"
                    />
                    <span className="text-xs md:text-sm font-medium text-[#C2366F] underline decoration-[#C2366F] decoration-2 underline-offset-4">
                      CEO Photo
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-xl bg-[#C2366F] px-4 py-2 md:px-6 md:py-3 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Award size={16} className="md:size-20" />
                  <span className="text-xs md:text-sm font-semibold">
                    CEO & Founder
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">

              <div className="flex items-center gap-4 mb-1">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#C2366F]/10 flex-shrink-0">
                  <Users size={18} className="text-[#C2366F] md:size-20" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  Meet Our{" "}
                  <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                    CEO
                  </span>
                </h2>
              </div>

              <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#C2366F] ml-0 md:ml-[60px]">
                Mr. Wahab Yunus
              </h3>

              <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
                <p>
                  Mr. Wahab Yunus, C.E.O of PNY Group of Companies, holds an MBA
                  from the Institute of Management Sciences (IMS), specializing
                  in Marketing. With over 10 years of experience as a Marketing
                  Manager in top multinational companies, he founded PNY
                  Trainings in 2014.
                </p>

                <p>
                  He is undoubtedly a pioneer of Digital & Social Media Training
                  in Pakistan. His institute now offers more than 50+ latest
                  courses, and he is very clear about his aim:{" "}
                  <span className="font-semibold text-[#C2366F]">
                    "The key to success is only hard work & hard work."
                  </span>
                </p>

                <p>
                  Specialized in Digital & Social Media Marketing, Advanced
                  Facebook Marketing, SEO, Google Ads & Google Analytics, he has
                  worked as a consultant with different brands and provides
                  corporate and in-house training.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {[
                  "50+ Latest Courses",
                  "Digital Marketing Expert",
                  "Corporate Trainer",
                  "Multi-Project Leader",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs md:text-sm text-gray-700"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#C2366F] md:size-16"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 rounded-xl bg-pink-50/80 p-3 md:p-4 border border-pink-100/50">
                <h4 className="mb-2 text-sm md:text-base font-semibold text-gray-800">
                  Projects Under PNY Group:
                </h4>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {[
                    "PNY Pink",
                    "ONAJAH (Online Learning)",
                    "PITA (Non-Profit)",
                    "PNY Advertising",
                  ].map((project) => (
                    <span
                      key={project}
                      className="rounded-full bg-[#22C55E]/10 px-2 py-0.5 md:px-3 md:py-1 text-xs font-medium text-[#22C55E]"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CEO OF PNY PINK - Samina Wahab
      ===================================================== */}
      <section className="bg-gradient-to-b from-white to-pink-50/50 py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">

            <div>
              <div className="flex items-center gap-4 mb-1">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#C2366F]/10 flex-shrink-0">
                  <User size={18} className="text-[#C2366F] md:size-20" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  CEO of{" "}
                  <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                    PNY Pink
                  </span>
                </h2>
              </div>

              <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#C2366F] ml-0 md:ml-[60px]">
                Mrs. Samina Wahab
              </h3>

              <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
                <p>
                  Mrs. Samina Wahab leads the PNY Pink project, which was
                  specifically designed to empower females and make them strong
                  and independent. She is a creative and talented woman who sets
                  an example for females everywhere.
                </p>

                <p className="font-medium text-gray-700">
                  <span className="text-[#C2366F]">
                    "
                  </span>
                  Women can be a wife, a mother, and an entrepreneur at the same
                  time.
                  <span className="text-[#C2366F]">
                    "
                  </span>
                </p>

                <p>
                  She is such a diverse woman who balances her personal and
                  professional life perfectly. She is also a source of
                  confidence for females to give their best both at work and at
                  home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <Lightbulb size={12} className="text-[#C2366F] md:size-14" />
                  <span>Creative Leader</span>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <UsersIcon size={12} className="text-[#C2366F] md:size-14" />
                  <span>Women Empowerment</span>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <Scale size={12} className="text-[#C2366F] md:size-14" />
                  <span>Work-Life Balance</span>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                  <Star size={12} className="text-[#C2366F] md:size-14" />
                  <span>Inspirational</span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-[#C2366F]/10 to-[#8A1D4B]/10 p-1">
                <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 h-16 w-16 md:h-24 md:w-24 rounded-full bg-[#C2366F]/20 blur-2xl"></div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 h-20 w-20 md:h-32 md:w-32 rounded-full bg-[#8A1D4B]/20 blur-2xl"></div>

                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#C2366F]/20 to-[#8A1D4B]/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <User
                      size={40}
                      className="text-[#C2366F] mx-auto mb-2 md:size-48"
                    />
                    <span className="text-xs md:text-sm font-medium text-[#C2366F] underline decoration-[#C2366F] decoration-2 underline-offset-4">
                      CEO Photo
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rounded-xl bg-[#C2366F] px-4 py-2 md:px-6 md:py-3 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <User size={16} className="md:size-20" />
                  <span className="text-xs md:text-sm font-semibold">
                    CEO PNY Pink
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT HEAD - Mahwish Tanveer
      ===================================================== */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">

            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-[#C2366F]/10 to-[#8A1D4B]/10 p-1">
                <div className="absolute -left-3 -top-3 md:-left-4 md:-top-4 h-16 w-16 md:h-24 md:w-24 rounded-full bg-[#C2366F]/20 blur-2xl"></div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 h-20 w-20 md:h-32 md:w-32 rounded-full bg-[#8A1D4B]/20 blur-2xl"></div>

                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#C2366F]/20 to-[#8A1D4B]/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <GraduationCap
                      size={40}
                      className="text-[#C2366F] mx-auto mb-2 md:size-48"
                    />
                    <span className="text-xs md:text-sm font-medium text-[#C2366F] underline decoration-[#C2366F] decoration-2 underline-offset-4">
                      Project Head Photo
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-xl bg-[#C2366F] px-4 py-2 md:px-6 md:py-3 text-white shadow-xl">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="md:size-20" />
                  <span className="text-xs md:text-sm font-semibold">
                    Project Head
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-1">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#C2366F]/10 flex-shrink-0 mt-0.5">
                  <GraduationCap
                    size={18}
                    className="text-[#C2366F] md:size-20"
                  />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Project Head of{" "}
                    <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                      PNY Pink
                    </span>
                  </h2>
                </div>
              </div>

              <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#C2366F] ml-0 md:ml-[60px]">
                Mahwish Tanveer
              </h3>

              <div className="mb-4 md:mb-6 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
                <p>
                  Mahwish Tanveer is a self-learner who completed her MSc
                  degree in Mass Communication. She started her career with
                  different institutions to make her place in the field and has
                  been working for the last 5 years.
                </p>

                <p>
                  She is also a graphic designer and social media expert with a
                  grip on four different software applications. She leads the
                  PNY Pink team and motivates young women to be self-oriented
                  and confident in their work.
                </p>

                <p className="font-medium text-gray-700">
                  <span className="text-[#C2366F]">
                    "
                  </span>
                  Don't rely on a degree alone; learn new skills to become part
                  of this timely changing world.
                  <span className="text-[#C2366F]">
                    "
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {[
                  "Mass Communication",
                  "Graphic Design",
                  "Social Media Expert",
                  "Team Leadership",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#22C55E]/10 px-2 py-0.5 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-[#22C55E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO SECTION
      ===================================================== */}
      <section
        id="video"
        className="bg-gradient-to-b from-pink-50/30 to-white py-10 md:py-14"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">

            <div className="text-center mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-3 mb-1">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-[#C2366F]/10 flex-shrink-0">
                  <Play size={18} className="text-[#C2366F] md:size-20" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  Watch Our{" "}
                  <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                    Journey
                  </span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-gray-600">
                See how PNY Pink is transforming lives through education and
                skills training.
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/3zTWn2ysnNA"
                title="PNYPink x PBTE x PSDA - PNY Pink Achievement"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 rounded-lg bg-black/50 px-3 py-1.5 md:px-4 md:py-2 text-white backdrop-blur-sm pointer-events-none">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 md:size-20"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>

                  <span className="text-xs md:text-sm font-medium">
                    Watch on YouTube
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 rounded-xl bg-gradient-to-r from-[#C2366F]/10 to-[#8A1D4B]/10 px-4 py-2 md:px-6 md:py-3">
                <div className="flex items-center gap-2">
                  <Award
                    size={16}
                    className="text-[#C2366F] md:size-20"
                  />

                  <span className="text-sm md:text-base font-semibold text-gray-700">
                    PNYPink x PBTE x PSDA
                  </span>
                </div>

                <span className="text-xs md:text-sm text-gray-500">
                  |
                </span>

                <span className="text-sm md:text-base font-bold text-[#C2366F]">
                  2023
                </span>
              </div>

              <div className="text-xs md:text-sm text-gray-500">
                467 views • 2024
              </div>
            </div>

            <div className="mt-4 md:mt-6 rounded-xl bg-white p-4 md:p-6 shadow-md">
              <p className="text-xs md:text-sm text-gray-600">
                <span className="font-semibold text-[#C2366F]">
                  PNY Pink
                </span>{" "}
                has reached another significant milestone by becoming a
                registered institution with the Punjab Board of Technical
                Education (PBTE) and affiliating with the Punjab Skill
                Development Authority (PSDA). These achievements have further
                reinforced our dedication to empowering women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">

            {/* Mission */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer">

              <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/0 via-[#22C55E]/0 to-[#22C55E]/0 group-hover:from-[#22C55E]/5 group-hover:via-[#22C55E]/10 group-hover:to-[#22C55E]/20 transition-all duration-700"></div>

              <div className="absolute inset-0 rounded-2xl border-2 border-[#22C55E]/0 group-hover:border-[#22C55E]/20 transition-all duration-500"></div>

              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#22C55E]/0 group-hover:bg-[#22C55E]/5 transition-all duration-700 group-hover:scale-150"></div>

              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#22C55E]/0 group-hover:bg-[#22C55E]/5 transition-all duration-700 group-hover:scale-150 delay-100"></div>

              <div className="relative z-10 mb-5">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-xl bg-[#22C55E]/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>

                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#22C55E] transition-all duration-500 group-hover:bg-[#22C55E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/30 group-hover:scale-110">
                    <Target
                      size={28}
                      className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <h3 className="relative z-10 mb-3 text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-[#22C55E] inline-block">
                Our Mission
              </h3>

              <p className="relative z-10 text-gray-600 transition-all duration-500 group-hover:text-gray-700 group-hover:translate-x-1">
                To provide skills to Pakistani youth and enhance work
                opportunities for them, with a special focus on empowering
                women through quality education and professional training.
              </p>

              <div className="relative z-10 mt-4 flex items-center gap-2 text-[#22C55E] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:gap-3">
                <span className="text-sm font-medium">
                  Read More
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-2"
                />
              </div>

              <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-2xl bg-[#22C55E]/0 group-hover:bg-[#22C55E]/5 transition-all duration-500"></div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer">

              <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F]/0 via-[#C2366F]/0 to-[#C2366F]/0 group-hover:from-[#C2366F]/5 group-hover:via-[#C2366F]/10 group-hover:to-[#C2366F]/20 transition-all duration-700"></div>

              <div className="absolute inset-0 rounded-2xl border-2 border-[#C2366F]/0 group-hover:border-[#C2366F]/20 transition-all duration-500"></div>

              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#C2366F]/0 group-hover:bg-[#C2366F]/5 transition-all duration-700 group-hover:scale-150"></div>

              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#C2366F]/0 group-hover:bg-[#C2366F]/5 transition-all duration-700 group-hover:scale-150 delay-100"></div>

              <div className="relative z-10 mb-5">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-xl bg-[#C2366F]/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>

                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#C2366F]/10 text-[#C2366F] transition-all duration-500 group-hover:bg-[#C2366F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/30 group-hover:scale-110">
                    <Globe
                      size={28}
                      className="transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              <h3 className="relative z-10 mb-3 text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-[#C2366F] inline-block">
                Our Vision
              </h3>

              <p className="relative z-10 text-gray-600 transition-all duration-500 group-hover:text-gray-700 group-hover:translate-x-1">
                To create a society where every woman has the skills and
                confidence to achieve her dreams and contribute meaningfully to
                the economy and community.
              </p>

              <div className="relative z-10 mt-4 flex items-center gap-2 text-[#C2366F] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:gap-3">
                <span className="text-sm font-medium">
                  Read More
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-2"
                />
              </div>

              <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-2xl bg-[#C2366F]/0 group-hover:bg-[#C2366F]/5 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE PNY PINK
      ===================================================== */}
      <section className="bg-gradient-to-b from-pink-50/50 to-white py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

          <div className="mb-8 md:mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose{" "}
              <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                PNY Pink
              </span>
              ?
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-600 px-4">
              We provide a supportive and professional environment for women to
              learn and grow.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Expert Trainers",
                description:
                  "Learn from industry professionals with years of experience.",
                color: "pink",
              },
              {
                icon: Award,
                title: "50+ Courses",
                description:
                  "Choose from a wide range of courses tailored for women.",
                color: "green",
              },
              {
                icon: Heart,
                title: "Women Only",
                description:
                  "A safe and supportive environment exclusively for females.",
                color: "pink",
              },
              {
                icon: Briefcase,
                title: "Practical Skills",
                description:
                  "Hands-on training that prepares you for the real world.",
                color: "green",
              },
              {
                icon: GraduationCap,
                title: "Certification",
                description:
                  "Recognized certifications to boost your career prospects.",
                color: "pink",
              },
              {
                icon: Target,
                title: "Career Support",
                description:
                  "Guidance and support to help you start your career journey.",
                color: "green",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    item.color === "green"
                      ? "bg-gradient-to-br from-green-50/80 to-green-100/40"
                      : "bg-gradient-to-br from-pink-50/80 to-pink-100/40"
                  }`}
                ></div>

                <div
                  className={`absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150 ${
                    item.color === "green"
                      ? "bg-[#22C55E]"
                      : "bg-[#C2366F]"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      item.color === "green"
                        ? "bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/25"
                        : "bg-[#C2366F]/10 text-[#C2366F] group-hover:bg-[#C2366F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/25"
                    }`}
                  >
                    <item.icon
                      size={24}
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h4 className="relative z-10 mb-2 text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-[#C2366F]">
                  {item.title}
                </h4>

                <p className="relative z-10 text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                  {item.description}
                </p>

                <div className="relative z-10 mt-3 flex items-center gap-1 text-sm font-medium text-[#C2366F] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">
                  <span>Learn More</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                    item.color === "green"
                      ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
                      : "bg-gradient-to-r from-[#C2366F] to-[#8A1D4B]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION - Simple Clean Design
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16 border-t border-gray-100">
        <div className="container relative mx-auto max-w-4xl px-4 sm:px-5 text-center lg:px-8">

          {/* Pink Accent Line */}
          <div className="w-20 h-1 bg-[#C2366F] rounded-full mx-auto mb-6"></div>

          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Start Your Journey?
          </h2>

          <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600 px-4">
            Join PNY Pink today and take the first step towards a brighter
            future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/enroll"
              className="w-full sm:w-auto rounded-xl bg-[#C2366F] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#A62258] hover:shadow-xl"
            >
              Enroll Now
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-xl border-2 border-[#C2366F] px-8 py-3.5 font-semibold text-[#C2366F] transition-all duration-300 hover:scale-105 hover:bg-[#C2366F] hover:text-white hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;