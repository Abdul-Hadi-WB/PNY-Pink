"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Users,
  FileText,
  Briefcase,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What kind of course PNY Pink offering?",
      answer:
        "PNY Pink brings an opportunity for all females of Pakistan to learn and practice the real skills and turn it into a professional career. PNY Pink introduce the high-end courses for the females and give them direction into the real world of competition. You can enroll and learn the multiple programs especially design for females includes:\n• Hair Cut Pro Course\n• Ultimate makeup course\n• Be your own beauty expert\n• And much more",
    },
    {
      id: 2,
      question: "How I can enroll myself in a makeup course?",
      answer:
        "For the course of ultimate makeup certification, anyone includes teenage girls, housewives, professional women, and anyone who wants to learn and gain skills can enroll easily. You can visit our website www.joinpnypink.com or can visit the head office at Arfa kareem technology for the registration process. After the approval, you have to submit the fees for the course and get the schedule to attend a live session with the best instructor of the relevant industry.",
    },
    {
      id: 3,
      question: "What will be the eligibility criteria for PNY Pink courses enrollment?",
      answer:
        "For the PNY Pink courses enrolment, there is no strict requirement or eligibility criteria. Anyone with the courage to learn the skills and experience them in practical life can be a part of PNY pink.",
    },
    {
      id: 4,
      question: "How I can get the course outline of the relevant course?",
      answer:
        "After the enrolment in a particular course at PNY pink, you can get the hard copy of the course outline. Moreover, You can download pdf's from our PNY PINK website or our coordinator will share the PDF files with the course details through email that every candidate will receive after the enrollment confirmation.",
    },
    {
      id: 5,
      question: "What will be future scope after completed the course with PNY Pink?",
      answer:
        "If you are interested in the professional career, then PNY pink ensure that you will get the internship offers from the industry reputed organization. You can get the chance to apply for the job after completing the certification through PNY pink.",
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      number: "50+",
      label: "Courses Offered",
    },
    {
      icon: Users,
      number: "10K+",
      label: "Students Enrolled",
    },
    {
      icon: FileText,
      number: "100%",
      label: "Course Outline",
    },
    {
      icon: Briefcase,
      number: "90%",
      label: "Job Placement",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white overflow-x-hidden">

      {/* =====================================================
          HERO SECTION WITH BANNER IMAGE - CLEAN TEXT
      ===================================================== */}
      <section 
        className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20"
        style={{
          backgroundImage: `url('/images/FaqsBanner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-2 md:mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2">
              
            </div>
            <h1 className="mb-2 md:mb-3 text-3xl font-bold text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-[#C2366F]">Questions</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-gray-700 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:text-base md:text-lg">
              Find answers to the most common questions about PNY Pink courses,
              enrollment, and career opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS SECTION
      ===================================================== */}
      <section className="py-8 md:py-12 border-b border-gray-100 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#C2366F]/10">
                  <stat.icon size={20} className="text-[#C2366F]" />
                </div>
                <div className="text-2xl font-bold text-[#C2366F] md:text-3xl lg:text-4xl">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
              Everything You Need to <span className="text-[#C2366F]">Know</span>
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              Quick answers to questions you may have about PNY Pink.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-4 py-4 text-left md:px-6 md:py-5"
                >
                  <span className="text-sm font-semibold text-gray-800 md:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C2366F]/10 text-[#C2366F]"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-100 px-4 py-4 md:px-6 md:py-6">
                        <div className="space-y-2 text-sm text-gray-600 md:text-base">
                          {faq.answer.split('\n').map((line, i) => {
                            if (line.trim().startsWith('•')) {
                              return (
                                <div key={i} className="flex items-start gap-2 ml-2">
                                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-[#22C55E]" />
                                  <span>{line.trim().substring(1)}</span>
                                </div>
                              );
                            }
                            if (line.trim()) {
                              return <p key={i}>{line}</p>;
                            }
                            return <br key={i} />;
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#C2366F]/5 to-[#8A1D4B]/5 p-6 text-center md:p-8">
            <h3 className="text-lg font-bold text-gray-800 md:text-xl">
              Still Have Questions?
            </h3>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Can't find the answer you're looking for? Please get in touch with our team.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#C2366F] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#A62258] hover:shadow-lg"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16 border-t border-gray-100">
        <div className="container relative mx-auto max-w-4xl px-4 sm:px-5 text-center lg:px-8">
          <div className="w-20 h-1 bg-[#C2366F] rounded-full mx-auto mb-6"></div>
          <h2 className="mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Start Your <span className="text-[#C2366F]">Journey</span>?
          </h2>
          <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-600">
            Join PNY Pink today and take the first step towards a successful career.
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

export default Faqs;