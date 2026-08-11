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
  Play,
  Award
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";


// SECTION 1: IMAGES DATA (MAIN SLIDER)

const images = [
  { id: 1, src: "/images/section1img1.png", alt: "Slide 1" },
  { id: 2, src: "/images/section1img2.jpg", alt: "Slide 2" },
  { id: 3, src: "/images/section1img3.png", alt: "Slide 3" },
  { id: 4, src: "/images/section1img4.png", alt: "Slide 4" },
  { id: 5, src: "/images/section1img5.png", alt: "Slide 5" },
  { id: 6, src: "/images/section1img6.png", alt: "Slide 6" },
  { id: 7, src: "/images/section1img7.png", alt: "Slide 7" },
  { id: 8, src: "/images/section1img8.png", alt: "Slide 8" },
  { id: 9, src: "/images/section1img9.png", alt: "Slide 9" },
];


// SECTION 2: FEATURES DATA

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


// SECTION 3: COURSES DATA (for Start Learning)

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


// SECTION 4: FEATURED COURSES (UPDATED with new data)

const featuredCourses = [
  {
    id: 1,
    image: "/images/section4img1.jpeg",
    title: "Beautician Salon Artist Course 2.0",
    duration: "2 Months",
    price: "150,000",
    description: "Master professional salon skills with advanced beauty techniques and hands-on training.",
  },
  {
    id: 2,
    image: "/images/section4img2.jpeg",
    title: "Nail Technician Course",
    duration: "1 Month",
    price: "65,000",
    description: "Learn professional nail art, extensions, grooming, and salon-ready techniques.",
  },
  {
    id: 3,
    image: "/images/section4img3.jpeg",
    title: "MK Skin Aesthetics Course",
    duration: "1 Month",
    price: "50,000",
    description: "Master skin aesthetics, facials, and advanced beauty treatments for glowing skin.",
  },
  {
    id: 4,
    image: "/images/section4img4.jpg",
    title: "Hair Cutting Course",
    duration: "1 Month",
    price: "40,000",
    description: "Learn precision hair cutting, styling, and modern hairdressing techniques.",
  },
  {
    id: 5,
    image: "/images/section4img5.png",
    title: "Makeup Artistry Course",
    duration: "1.5 Months",
    price: "60,000",
    description: "Master the art of makeup with professional techniques for bridal, fashion, and editorial.",
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
    slidesToScroll: 2,
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


      {/* SECTION 1: FULL-WIDTH IMAGE SLIDER (FULL WIDTH FIXED)*/}

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
              className="object-cover" 
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"  
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POgAAAABJRU5ErkJggg=="
            />

            {/* Gradient overlays */}
            <div className="absolute inset-x-0 top-0 h-20 sm:h-28 md:h-36 lg:h-48 bg-gradient-to-b from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 md:h-36 lg:h-48 bg-gradient-to-t from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 left-0 w-20 sm:w-28 md:w-36 lg:w-48 bg-gradient-to-r from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-28 md:w-36 lg:w-48 bg-gradient-to-l from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
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

        {/* Dots */}
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

        {/* Counter */}
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

      {/* SECTION 2: FEATURES*/}


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
    SECTION 3: START LEARNING (PREMIUM DESIGN)
    - Same content, better card design
    - Hover effects like "Why Choose PNY Pink" section
    - Pink & Green color variations
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
      <p className="text-[#252525]/50 text-sm mt-3 max-w-sm mx-auto font-light tracking-wide">
        Choose your path and begin your journey today
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {courses.map((course, index) => {
        const Icon = course.icon;
        // Alternate between pink and green for each card
        const isGreen = index % 2 === 1;
        const color = isGreen ? 'green' : 'pink';
        const colorHex = isGreen ? '#22C55E' : '#C2366F';
        const colorLight = isGreen ? 'green-50/80' : 'pink-50/80';
        const colorLight2 = isGreen ? 'green-100/40' : 'pink-100/40';
        
        return (
          <div
            key={index}
            className="group relative rounded-2xl bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Gradient background on hover */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${colorLight} to-${colorLight2}`}
            ></div>

            {/* Decorative circle on hover */}
            <div
              className={`absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150 bg-[${colorHex}]`}
            ></div>

            {/* Top accent line */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#C2366F]/30 via-[#C2366F]/70 to-[#C2366F]/30 group-hover:from-[#C2366F] group-hover:via-[#E86D9B] group-hover:to-[#C2366F] transition-all duration-500"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  isGreen
                    ? `bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/25`
                    : `bg-[#C2366F]/10 text-[#C2366F] group-hover:bg-[#C2366F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/25`
                }`}
              >
                <Icon className="w-7 h-7 transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#252525] mb-2.5 tracking-tight transition-all duration-300 group-hover:text-[#C2366F]">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-[#252525]/60 text-sm leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
                {course.description}
              </p>

              {/* View Courses Link */}
              <div className="mt-5 flex items-center text-[#C2366F] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">
                <span className="tracking-wide">View Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative number */}
            <div className="absolute top-3 right-4 text-[#C2366F]/10 font-bold text-4xl font-mono group-hover:text-[#C2366F]/20 transition-colors duration-500">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Bottom accent bar */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                isGreen
                  ? 'bg-gradient-to-r from-[#22C55E] to-[#16A34A]'
                  : 'bg-gradient-to-r from-[#C2366F] to-[#8A1D4B]'
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      

{/* ======================================================
    SECTION 4: FEATURED COURSES (REDUCED PADDING)
    - Cards properly spaced
    - Clean, professional design
    - Minimal padding
====================================================== */}
<section className="py-6 md:py-8 pb-10 md:pb-12 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-8">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e2a]">
        Featured <span className="text-[#C2366F]">Courses</span>
      </h2>
      <div className="w-24 h-1 bg-[#C2366F] mx-auto mt-3 rounded-full"></div>
      <p className="text-[#4a4a5a]/60 text-base mt-4 max-w-lg mx-auto">
        Turn your passion into a profession with our expert-led programs
      </p>
    </div>

    {/* Carousel */}
    <div className="" ref={emblaRef}>
      <div className="flex" style={{ gap: '24px' }}>
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="flex-[0_0_280px] sm:flex-[0_0_300px] lg:flex-[0_0_340px] min-w-0 group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(194,54,111,0.15)] border border-gray-100/80 hover:border-[#C2366F]/30 flex flex-col h-full">
              
              {/* Image */}
              <div className="relative h-52 sm:h-56 lg:h-64 w-full bg-gradient-to-br from-[#C2366F]/5 to-[#7BD535]/5 flex-shrink-0 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 340px"
                />
                {/* Duration Chip */}
                <div className="absolute bottom-3 left-3 bg-[#C2366F]/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                  {course.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1e1e2a] line-clamp-2 min-h-[48px] sm:min-h-[56px] group-hover:text-[#C2366F] transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[#4a4a5a]/70 text-xs sm:text-sm mt-2 line-clamp-3 min-h-[50px] sm:min-h-[60px] leading-relaxed flex-1">
                  {course.description}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100/80 flex-shrink-0">
                  <div>
                    <span className="text-lg sm:text-xl font-bold text-[#C2366F]">
                      Rs. {course.price}
                    </span>
                    <span className="text-[10px] sm:text-xs font-normal text-[#4a4a5a]/40 ml-1">/month*</span>
                  </div>
                  <button className="group/btn text-xs sm:text-sm font-medium text-[#C2366F] hover:text-white hover:bg-[#C2366F] px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#C2366F]/30 hover:border-[#C2366F] transition-all duration-300 flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation */}
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={scrollPrev}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
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
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  </div>
</section>
   
{/* ======================================================
    SECTION 5: OUR COLLABORATIVE PARTNER (IMAGES UP)
    - partners bg1 (girl) on left wall, slightly up
    - partners bg2 (hands) on right wall, slightly up
    - Small, clean, no opacity
====================================================== */}
<section className="relative py-14 md:py-16 overflow-hidden bg-gradient-to-r from-pink-50/50 via-white to-pink-50/30">
  
  {/* Girl Image - Left Wall (slightly up) */}
  <div className="absolute top-[25%] -translate-y-1/2 left-4 md:left-8 pointer-events-none">
    <img
      src="/images/partners bg1.png"
      alt="Girl"
      className="h-32 md:h-42 lg:h-50 w-auto object-contain"
    />
  </div>
  
  {/* Hands Image - Right Wall (slightly up) */}
  <div className="absolute top-[25%] -translate-y-1/2 right-4 md:right-8 pointer-events-none">
    <img
      src="/images/partners bg2.png"
      alt="Hands"
      className="h-32 md:h-40 lg:h-48 w-auto object-contain"
    />
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#252525] leading-tight">
        Our{' '}
        <span className="relative">
          <span className="text-[#C2366F]">Collaborative</span>
          <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#C2366F] to-[#8A1D4B] rounded-full"></span>
        </span>{' '}
        Partner
      </h2>
      <p className="text-[#252525]/40 text-sm mt-3 max-w-sm mx-auto font-light tracking-wide">
        Trusted partners who empower our students' success
      </p>
    </div>

    {/* Marquee Container */}
    <div className="relative overflow-visible py-8">
      {/* Gradient overlays on edges */}
      <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-pink-50/50 via-pink-50/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-pink-50/50 via-pink-50/20 to-transparent z-20 pointer-events-none"></div>
      
      {/* Animated Track - Pure logos */}
      <div className="flex items-center gap-20 md:gap-28 animate-marquee">
        {/* First set of logos */}
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div
            key={`logo-${num}`}
            className="group flex-shrink-0 relative transition-all duration-500 hover:scale-110 hover:-translate-y-2"
          >
            {/* Glow effect behind logo on hover */}
            <div className="absolute -inset-10 bg-[#C2366F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Gradient glow ring on hover */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#C2366F]/0 via-[#C2366F]/5 to-[#7BD535]/0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
            
            {/* Logo image */}
            <img
              src={`/images/logo${num}.png`}
              alt={`Partner Logo ${num}`}
              className="h-20 md:h-28 w-auto max-w-[160px] md:max-w-[200px] object-contain transition-all duration-500 drop-shadow-md hover:drop-shadow-[0_8px_40px_rgba(194,54,111,0.35)]"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))'
              }}
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div
            key={`logo-dup-${num}`}
            className="group flex-shrink-0 relative transition-all duration-500 hover:scale-110 hover:-translate-y-2"
          >
            {/* Glow effect behind logo on hover */}
            <div className="absolute -inset-10 bg-[#C2366F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Gradient glow ring on hover */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#C2366F]/0 via-[#C2366F]/5 to-[#7BD535]/0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>
            
            {/* Logo image */}
            <img
              src={`/images/logo${num}.png`}
              alt={`Partner Logo ${num}`}
              className="h-20 md:h-28 w-auto max-w-[160px] md:max-w-[200px] object-contain transition-all duration-500 drop-shadow-md hover:drop-shadow-[0_8px_40px_rgba(194,54,111,0.35)]"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* ======================================================
    SECTION: CLIENT TESTIMONIALS (REDUCED PADDING)
    - Raspberry Pink (#C2366F) as hero color
    - Stunning gradient with pink tones
    - Minimal padding - clean & elegant
====================================================== */}
<section className="relative py-10 md:py-14 overflow-hidden">
  
  {/* Main Background - Rich Pink Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F6] via-[#FFE0EC] to-[#F8D0E0]"></div>
  
  {/* Large Glowing Raspberry Pink Orbs - Soft Background */}
  <div className="absolute top-[-200px] right-[-150px] w-[700px] h-[700px] bg-[#C2366F]/15 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-[-200px] left-[-150px] w-[700px] h-[700px] bg-[#C2366F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  {/* Sparkle Particles - Small dots */}
  <div className="absolute top-12 left-1/4 w-2 h-2 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-12 right-1/4 w-2 h-2 bg-[#C2366F]/15 rounded-full blur-sm"></div>
  <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-1/3 right-8 w-1.5 h-1.5 bg-[#C2366F]/15 rounded-full blur-sm"></div>
  <div className="absolute top-20 right-1/3 w-2 h-2 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#C2366F]/15 rounded-full blur-sm"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* ====== HEADING ====== */}
    <div className="text-center max-w-2xl mx-auto mb-10">
      
      {/* Main Heading with Pink Highlight */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1e2a] leading-tight">
        What Our{' '}
        <span className="text-[#C2366F] relative inline-block">
          Clients
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C2366F]/30 rounded-full"></span>
        </span>{' '}
        Say
      </h2>
      
      <p className="text-[#4a4a5a]/60 text-sm mt-4 max-w-sm mx-auto font-light tracking-wide">
        Real stories from our students who turned their passion into profession
      </p>
    </div>

    {/* ====== TESTIMONIALS CARDS ====== */}
    <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
      
      {/* Testimonial 1 - LEFT */}
      <div className="flex justify-start">
        <div className="w-[95%] md:w-[85%] lg:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          
          {/* Large Quote Mark */}
          <div className="absolute top-3 right-6 text-[#C2366F]/8 text-7xl font-serif hidden md:block leading-none">"</div>
          
          {/* Raspberry Pink Glow on Hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6 relative">
            {/* Client Image */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client1.jpeg"
                  alt="Farrah Ibrahim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1">
              <h4 className="text-base md:text-lg font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Farrah Ibrahim
              </h4>
              <p className="text-sm text-[#C2366F] font-medium mb-3 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>
              <p className="text-[#4a4a5a]/70 text-sm md:text-base leading-relaxed">
                "I was so fortunate enough to join the first batch and honestly, my experience here was way beyond my expectations. Thanks to our teacher, I am now confident enough in opening my own parlour Insha'Allah. Totally worth it."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - RIGHT */}
      <div className="flex justify-end">
        <div className="w-[95%] md:w-[85%] lg:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          <div className="absolute top-3 right-6 text-[#C2366F]/8 text-7xl font-serif hidden md:block leading-none">"</div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client2.jpg"
                  alt="Maham Ali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base md:text-lg font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Maham Ali
              </h4>
              <p className="text-sm text-[#C2366F] font-medium mb-3 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>
              <p className="text-[#4a4a5a]/70 text-sm md:text-base leading-relaxed">
                "I'm student of be your beauty expert from 1st batch and its amazing. If you want to be expert then you must have to join the 2nd batch of PNY Pink Be Your Own Beauty Expert. And our Instructor is such a Professional Mashaa Allah. May Allah gave more success in their life"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - LEFT */}
      <div className="flex justify-start">
        <div className="w-[95%] md:w-[85%] lg:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          <div className="absolute top-3 right-6 text-[#C2366F]/8 text-7xl font-serif hidden md:block leading-none">"</div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client3.jpeg"
                  alt="Waliya Najeeb"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-base md:text-lg font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Waliya Najeeb
              </h4>
              <p className="text-sm text-[#C2366F] font-medium mb-3 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>
              <p className="text-[#4a4a5a]/70 text-sm md:text-base leading-relaxed">
                "I am so glad that I finished this course as a batch 1 student, i learned so much that I couldn't even imagine. Instructor is literally the best teacher ever she is so kind hearted and helped me so much through out the course. This course is a must join for ambitious girls."
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* =====================================================
          VIDEO SECTION - CELEBRATING OUR SUCCESS
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
                  Celebrating{" "}
                  <span className="text-[#C2366F] border-b-2 border-[#C2366F] pb-1">
                    Our Success
                  </span>
                </h2>
              </div>

              <p className="text-sm md:text-base text-gray-600">
              Hear from our students as they share their incredible journey and achievements at PNY Pink
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/o_jaK4lebjI"
                title="🌸✨ Celebrating success, hard work & new beginnings! 🎓💐PNY #WomenEmpowerment #CelebrateSuccess"
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
                    Student Success Stories
                  </span>
                </div>

                <span className="text-xs md:text-sm text-gray-500">
                  |
                </span>

                <span className="text-sm md:text-base font-bold text-[#C2366F]">
                  2025
                </span>
              </div>

              <div className="text-xs md:text-sm text-gray-500">
                44 views • Aug 26, 2025
              </div>
            </div>

            <div className="mt-4 md:mt-6 rounded-xl bg-white p-4 md:p-6 shadow-md">
              <p className="text-xs md:text-sm text-gray-600">
                <span className="font-semibold text-[#C2366F]">
                  PNY Pink
                </span>{" "}
                proudly presents the success stories of our incredible students. Watch as they share their journey, hard work, and new beginnings. This video is a testament to the power of education and women empowerment. #WomenEmpowerment #CelebrateSuccess #PNYPink
              </p>
            </div>
          </div>
        </div>
      </section>


   <section className="relative w-full overflow-hidden bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-14 xl:px-16">

        {/* ===================== HEADING ===================== */}
        <div className="mb-14 text-center md:mb-16 lg:mb-18">
          <h2 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#202020] md:text-[62px] lg:text-[72px] xl:text-[80px]">
            Who We Are{" "}
            <span className="relative inline-block text-[#c2366f]">
              PNY Pink

              {/* Underline */}
              <span className="absolute -bottom-5 left-0 h-[5px] w-full rounded-full bg-[#c2366f]" />
            </span>
          </h2>
        </div>

        {/* ===================== CONTENT ===================== */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col">

            <div className="border-l-[4px] border-[#c2366f] pl-7 md:pl-9 lg:pl-10">

              <h3 className="max-w-[700px] text-[30px] font-medium leading-[1.42] tracking-[-0.025em] text-[#151515] md:text-[34px] lg:text-[37px] xl:text-[39px]">
                “PNY PINK is one of the leading institutions dedicated to
                empowering women through practical skills, professional
                training, and career-focused education.”
              </h3>

            </div>

            {/* Pink + Green Accent */}
            <div className="mt-8 flex items-center gap-3 pl-7 md:pl-9 lg:pl-10">
              <span className="h-[11px] w-[105px] rounded-full bg-[#c2366f]" />
              <span className="h-[11px] w-[55px] rounded-full bg-[#15803d]" />
            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex items-center justify-center">

            <div className="relative w-full max-w-[720px] rounded-[28px] border-2 border-[#7eaf89] bg-[#f6fbf7] px-8 py-9 md:px-10 md:py-10 lg:px-11 lg:py-11">

              {/* Green Inner Vertical Line */}
              <div className="absolute left-8 top-9 bottom-9 w-[5px] rounded-full bg-[#15803d] md:left-9 lg:left-10" />

              <p className="pl-7 text-[18px] font-normal leading-[1.8] tracking-[-0.01em] text-[#252b27] md:pl-8 md:text-[20px] lg:text-[21px] xl:text-[22px]">
                PNY PINK is one of the best institutions for women —
                especially in Lahore, Pakistan — offering a range of
                training programs designed for women building a career,
                as well as those developing practical, home-based, and
                professional skills.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>


    </main>
  );
}