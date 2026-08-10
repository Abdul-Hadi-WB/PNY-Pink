"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Laptop,
  Settings,
  Calendar,
  ArrowRight,
  Sparkles,
  ChefHat,
  Palette,
  Scissors,
  Flower2,
  Droplets,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// ============================================
// SECTION 1: IMAGES DATA (MAIN SLIDER)
// ============================================
const images = [
  { id: 1, src: "/images/section1img1.png", alt: "Slide 1" },
  { id: 2, src: "/images/section1img2.png", alt: "Slide 2" },
  { id: 3, src: "/images/section1img3.png", alt: "Slide 3" },
  { id: 4, src: "/images/section1img4.png", alt: "Slide 4" },
  { id: 5, src: "/images/section1img5.png", alt: "Slide 5" },
  { id: 6, src: "/images/section1img6.png", alt: "Slide 6" },
  { id: 7, src: "/images/section1img7.png", alt: "Slide 7" },
  { id: 8, src: "/images/section1img8.png", alt: "Slide 8" },
  { id: 9, src: "/images/section1img9.png", alt: "Slide 9" },
];

// ============================================
// SECTION 2: FEATURES DATA
// ============================================
const features = [
  {
    icon: BookOpen,
    title: "Unlimited Access",
    description: "Choose What you'd like to learn from our extensive subscription library.",
  },
  {
    icon: Laptop,
    title: "Learn Anywhere",
    description: "Learn from industry experts who are passionate about teaching.",
  },
  {
    icon: Settings,
    title: "Customizability",
    description: "Switch between your computer, tablet, or mobile device.",
  },
];

// ============================================
// SECTION 3: COURSES DATA (for Start Learning)
// ============================================
const courses = [
  {
    icon: Sparkles,
    title: "Beautifulian",
    description: "Beautifulians may come in the form of talent; students will build this talent through our courses.",
  },
  {
    icon: ChefHat,
    title: "Cooking & Baking",
    description: "Cooking & Baking Courses may come in the form of talent; students will build this talent through our courses.",
  },
  {
    icon: Palette,
    title: "Makeup",
    description: "Makeup artistry may come in the form of talent; students will build this talent through our courses.",
  },
  {
    icon: Scissors,
    title: "Hair",
    description: "Welcome to our site, if you need help simply reply to this message, we are online and ready to help.",
  },
  {
    icon: Flower2,
    title: "Nail Art",
    description: "The nail art course is a fun way to paint, embellish, and enhance your nails.",
  },
  {
    icon: Droplets,
    title: "Skin",
    description: "Beauty skin care courses give you an authentic certification with advanced luxury spa training.",
  },
];

// ============================================
// SECTION 4: FEATURED COURSES (5 UNIQUE)
// ============================================
const featuredCourses = [
  {
    id: 1,
    image: "/images/section4img1.jpeg",
    title: "Networking & Cyber Security",
    duration: "High-paid field",
    price: "£29.99",
    description: "Enter one of tech's highest-paid fields with in-demand security skills.",
    // badge removed – no green banner
  },
  {
    id: 2,
    image: "/images/section4img2.jpeg",
    title: "Access Education",
    duration: "UCA's-rec",
    price: "£1.99",
    description: "Get into university recognition with flexible, fully online study.",
  },
  {
    id: 3,
    image: "/images/section4img3.jpeg",
    title: "Health & Fitness",
    duration: "Certified Coach",
    price: "£29.99",
    description: "Turn your passion for fitness into a career as a personal trainer.",
  },
  {
    id: 4,
    image: "/images/section4img4.jpg",
    title: "IT & Web Design",
    duration: "Future-proof",
    price: "£29.99",
    description: "Lead the digital revolution with skills in web design, coding and IT.",
  },
  {
    id: 5,
    image: "/images/section4img5.png",
    title: "Lifestyle & Wellbeing",
    duration: "Self Development",
    price: "£29.99",
    description: "Explore a range of courses to help you achieve your personal goals.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Embla Carousel for Section 4
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    loop: true,
    dragFree: false,
    slidesToScroll: 2,        // 2 cards move at a time
  });

  // Auto-slide for main Slider (Section 1)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <main>
      {/* ======================================================
          SECTION 1: FULL-WIDTH IMAGE SLIDER
      ====================================================== */}
      <section className="relative w-full h-[calc(100vh-80px)] max-h-[900px] min-h-[450px] overflow-hidden bg-white shadow-[0_10px_60px_rgba(194,54,111,0.08)] mt-0 pt-0">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`
              absolute inset-0 transition-opacity duration-700 ease-in-out
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POgAAAABJRU5ErkJggg=="
            />

            <div className="absolute inset-x-0 top-0 h-20 sm:h-28 md:h-36 lg:h-48 bg-gradient-to-b from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 md:h-36 lg:h-48 bg-gradient-to-t from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 left-0 w-20 sm:w-28 md:w-36 lg:w-48 bg-gradient-to-r from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-28 md:w-36 lg:w-48 bg-gradient-to-l from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
          </div>
        ))}

        <button onClick={prevSlide} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C2366F]/20 backdrop-blur-sm border border-[#C2366F]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#C2366F]/40 hover:scale-110 shadow-lg shadow-[#C2366F]/10">
            <ChevronLeft className="w-5 h-5 text-white/90" />
          </div>
        </button>

        <button onClick={nextSlide} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C2366F]/20 backdrop-blur-sm border border-[#C2366F]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#C2366F]/40 hover:scale-110 shadow-lg shadow-[#C2366F]/10">
            <ChevronRight className="w-5 h-5 text-white/90" />
          </div>
        </button>

        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentIndex
                  ? "w-8 md:w-10 h-1 bg-[#C2366F] shadow-md shadow-[#C2366F]/40"
                  : "w-2 h-1 bg-[#C2366F]/30 hover:bg-[#C2366F]/60"
              }`}
            />
          ))}
        </div>

        <div className="absolute top-5 md:top-6 right-5 md:right-6 z-30 text-white/80 text-sm font-light tracking-wider bg-[#C2366F]/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C2366F]/20 shadow-sm shadow-[#C2366F]/10">
          <span className="text-[#C2366F] font-medium">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-[#C2366F]/40 mx-1">/</span>
          <span className="text-[#C2366F]/60">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F]/25 to-transparent z-20"></div>
      </section>

      {/* ======================================================
          SECTION 2: FEATURES
      ====================================================== */}
      <section className="py-10 md:py-14 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50/30">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 40px 40px, #C2366F 1.5px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#C2366F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#C2366F]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#252525] leading-tight">
              Designed for Your{' '}
              <span className="relative">
                <span className="text-[#C2366F]">Success</span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#C2366F] to-[#8A1D4B] rounded-full"></span>
              </span>
            </h2>
            <p className="text-[#252525]/40 text-sm mt-3 max-w-sm mx-auto font-light tracking-wide">
              Industry-ready skills with globally recognized certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-7 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden border-2 border-[#C2366F]/10 shadow-xl hover:shadow-2xl"
                  style={{ boxShadow: '0 10px 40px rgba(194,54,111,0.08)' }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C2366F]/15 via-[#C2366F]/5 to-[#C2366F]/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F]/10 via-[#C2366F]/5 to-[#C2366F]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#C2366F]/30 via-[#C2366F]/60 to-[#C2366F]/30 group-hover:from-[#C2366F] group-hover:via-[#C2366F] group-hover:to-[#C2366F] transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative w-16 h-16 mb-5 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F] to-[#8A1D4B] rounded-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F] to-[#8A1D4B] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
                      <div className="absolute inset-[2px] bg-white rounded-2xl flex items-center justify-center border border-[#C2366F]/10 group-hover:border-[#C2366F]/30 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#C2366F] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#252525] mb-2.5 tracking-tight group-hover:text-[#C2366F] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-[#252525]/50 text-sm leading-relaxed font-light group-hover:text-[#252525]/70 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="relative z-10 mt-5 flex items-center text-[#C2366F] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                      <span className="text-xs tracking-wider">LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#C2366F]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tl from-[#C2366F]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-[#C2366F] to-[#8A1D4B] rounded-2xl px-8 py-5 md:px-12 md:py-6 shadow-2xl shadow-[#C2366F]/30 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="flex items-center gap-4 text-white z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg tracking-tight">Free Orientation Class</h4>
                  <p className="text-white/60 text-sm font-light">Book your spot today</p>
                </div>
              </div>
              <button className="group flex items-center gap-2 px-8 py-3 bg-white text-[#C2366F] font-bold rounded-full hover:bg-[#7BD535] hover:text-[#252525] transition-all duration-300 shadow-xl shadow-white/30 hover:shadow-[#7BD535]/40 hover:-translate-y-1 z-10">
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 3: START LEARNING
      ====================================================== */}
      <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-r from-pink-100/20 via-white to-pink-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(194,54,111,0.08)_0%,_transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(194,54,111,0.05)_0%,_transparent_50%)]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#252525] relative inline-block">
              Start Learning
              <span className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg overflow-hidden"
                  style={{
                    boxShadow: '0 8px 30px rgba(194,54,111,0.08)',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C2366F]/20 via-[#E86D9B]/10 to-[#C2366F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#C2366F]/30 via-[#C2366F]/70 to-[#C2366F]/30 group-hover:from-[#C2366F] group-hover:via-[#E86D9B] group-hover:to-[#C2366F] transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#C2366F]/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F]/10 to-[#E86D9B]/10 rounded-2xl group-hover:bg-[#C2366F]/20 transition-all duration-500"></div>
                      <Icon className="w-7 h-7 text-[#C2366F] group-hover:text-[#8A1D4B] transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#252525] mb-2.5 tracking-tight group-hover:text-[#C2366F] transition-colors duration-300">
                      {course.title}
                    </h3>

                    <p className="text-[#252525]/60 text-sm leading-relaxed font-light group-hover:text-[#252525]/80 transition-colors duration-300">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center text-[#C2366F] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      <span className="tracking-wide">View Courses</span>
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${'group-hover:translate-x-1'}`} />
                    </div>
                  </div>

                  <div className="absolute top-3 right-4 text-[#C2366F]/10 font-bold text-4xl font-mono group-hover:text-[#C2366F]/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 4: FEATURED COURSES 
      ====================================================== */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e2a]">
              Featured <span className="text-[#C2366F]">Courses</span>
            </h2>
            <div className="w-24 h-1 bg-[#C2366F] mx-auto mt-3 rounded-full"></div>
            <p className="text-[#4a4a5a]/60 text-base mt-4 max-w-lg mx-auto">
              Turn your passion into a profession with our expert-led programs
            </p>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-12">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex-[0_0_420px] min-w-0 group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#C2366F]/30">
                    {/* Image - taller */}
                    <div className="relative h-80 w-full bg-gray-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 420px"
                      />
                      {/* Duration chip only - no green banner */}
                      <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {course.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#1e1e2a] line-clamp-1 group-hover:text-[#C2366F] transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-[#4a4a5a]/60 text-sm mt-1 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-2xl font-bold text-[#C2366F]">
                          {course.price}
                          <span className="text-xs font-normal text-[#4a4a5a]/40 ml-1">/month*</span>
                        </span>
                        <button className="text-sm font-medium text-[#C2366F] hover:text-white hover:bg-[#C2366F] px-4 py-1.5 rounded-full border border-[#C2366F]/30 hover:border-[#C2366F] transition-all duration-300">
                          Explore →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows & Dots */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {featuredCourses.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === 0 
                      ? 'bg-[#C2366F] w-8' 
                      : 'bg-[#C2366F]/30 w-2 hover:bg-[#C2366F]/60'
                  }`}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Partner */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#C2366F]/20"></div>
              <span className="text-[#4a4a5a]/40 text-xs uppercase tracking-widest font-medium">
                Our Collaborative Partner
              </span>
              <div className="h-px w-16 bg-[#C2366F]/20"></div>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <span className="text-[#4a4a5a]/40 text-sm">✦ Partner 1</span>
              <span className="text-[#4a4a5a]/40 text-sm">✦ Partner 2</span>
              <span className="text-[#4a4a5a]/40 text-sm">✦ Partner 3</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}