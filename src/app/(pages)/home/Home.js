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
  Award,
  MapPin,
  LineChart,
  GraduationCap,
  Target,
  Monitor,
  Handshake,
  RefreshCw
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
    title: "Beautician",
    description: "Beauticians may come in the form of talent; students will build this talent through our courses.",
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


const locations = [
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Karachi",
  "Other major cities",
];


const marketPoints = [
  {
    icon: LineChart,
    title: "Market Needs",
    description: "We study what industries are hiring for.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Courses are shaped around those needs.",
  },
  {
    icon: Sparkles,
    title: "Skills",
    description: "Learners gain applied, current abilities.",
  },
  {
    icon: Target,
    title: "Career Opportunities",
    description: "Skills translate into real openings.",
  },
];

const tags = [
  "Industry Demand",
  "Future Scope",
  "Practical Skills",
  "Career Growth",
  "Professional Development",
];


const steps = [
  {
    icon: Monitor,
    title: "Teaching",
    description: "Structured live and guided sessions.",
  },
  {
    icon: Handshake,
    title: "Coordination",
    description: "Organised schedules and support.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up",
    description: "Ongoing mentor check-ins on progress.",
  },
  {
    icon: Award,
    title: "Course Completion",
    description: "Finish with applied, usable skills.",
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

      <section className="relative w-full overflow-hidden bg-[#f8f4f6] shadow-[0_10px_60px_rgba(194,54,111,0.08)] mt-0 pt-0">
        
        <div className="slider-container relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-80px)] max-h-[900px] min-h-[200px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
          
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                absolute inset-0 transition-opacity duration-700 ease-in-out
                ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="slider-image"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Gradient overlays */}
              <div className="absolute inset-x-0 top-0 h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-t from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 left-0 w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-r from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-y-0 right-0 w-8 xs:w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 bg-gradient-to-l from-[#C2366F]/15 via-[#C2366F]/5 to-transparent pointer-events-none z-10"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-1 xs:left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30"
            aria-label="Previous slide"
          >
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#C2366F]/20 backdrop-blur-sm border border-[#C2366F]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#C2366F]/40 hover:scale-110 shadow-lg shadow-[#C2366F]/10">
              <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white/90" />
            </div>
          </button>

          <button 
            onClick={nextSlide} 
            className="absolute right-1 xs:right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30"
            aria-label="Next slide"
          >
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#C2366F]/20 backdrop-blur-sm border border-[#C2366F]/30 flex items-center justify-center transition-all duration-300 hover:bg-[#C2366F]/40 hover:scale-110 shadow-lg shadow-[#C2366F]/10">
              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white/90" />
            </div>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? "w-4 xs:w-5 sm:w-6 md:w-7 lg:w-10 h-1 bg-[#C2366F] shadow-md shadow-[#C2366F]/40"
                    : "w-1 xs:w-1.5 sm:w-2 h-1 bg-[#C2366F]/30 hover:bg-[#C2366F]/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="absolute top-1.5 xs:top-2 sm:top-3 md:top-4 lg:top-5 xl:top-6 right-1.5 xs:right-2 sm:right-3 md:right-4 lg:right-5 xl:right-6 z-30 text-white/80 text-[8px] xs:text-[10px] sm:text-xs md:text-sm font-light tracking-wider bg-[#C2366F]/10 backdrop-blur-sm px-1.5 py-0.5 xs:px-2 xs:py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 rounded-full border border-[#C2366F]/20 shadow-sm shadow-[#C2366F]/10">
            <span className="text-[#C2366F] font-medium">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[#C2366F]/40 mx-0.5 xs:mx-1">/</span>
            <span className="text-[#C2366F]/60">
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F]/25 to-transparent z-20"></div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}

      <section className="py-8 sm:py-10 md:py-12 lg:py-14 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50/30">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 40px 40px, #C2366F 1.5px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="absolute top-20 right-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#C2366F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#C2366F]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#252525] leading-[1.05] tracking-[-0.035em]">
              Designed for Your{" "}
              <span className="relative inline-block">
                <span className="text-[#C2366F]">Success</span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
              </span>
            </h2>

            <p className="text-[#252525]/50 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-2 sm:mt-3 max-w-sm mx-auto font-light tracking-wide">
              Industry-ready skills with globally recognized certification
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden border-2 border-[#C2366F]/10 shadow-xl hover:shadow-2xl"
                  style={{
                    boxShadow: "0 10px 40px rgba(194,54,111,0.08)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C2366F]/15 via-[#C2366F]/5 to-[#C2366F]/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F]/10 via-[#C2366F]/5 to-[#C2366F]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="absolute top-0 left-4 right-4 md:left-6 md:right-6 h-[2px] bg-gradient-to-r from-[#C2366F]/30 via-[#C2366F]/60 to-[#C2366F]/30 group-hover:from-[#C2366F] group-hover:via-[#C2366F] group-hover:to-[#C2366F] transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F] to-[#8A1D4B] rounded-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-500"></div>

                      <div className="absolute inset-0 bg-gradient-to-br from-[#C2366F] to-[#8A1D4B] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>

                      <div className="absolute inset-[2px] bg-white rounded-2xl flex items-center justify-center border border-[#C2366F]/10 group-hover:border-[#C2366F]/30 transition-all duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#C2366F] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-[21px] lg:text-[22px] font-bold text-[#252525] mb-1.5 sm:mb-2 md:mb-2.5 tracking-tight group-hover:text-[#C2366F] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-[#252525]/50 text-sm sm:text-[15px] md:text-[16px] leading-relaxed font-light group-hover:text-[#252525]/70 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="relative z-10 mt-3 sm:mt-4 md:mt-5 flex items-center text-[#C2366F] font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                      <span className="text-[10px] sm:text-xs tracking-wider">LEARN MORE</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1.5 sm:ml-2" />
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#C2366F]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="absolute -bottom-8 -left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tl from-[#C2366F]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-5 bg-gradient-to-r from-[#C2366F] to-[#8A1D4B] rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 shadow-2xl shadow-[#C2366F]/30 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <div className="flex items-center gap-3 sm:gap-4 text-white z-10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                </div>

                <div>
                  <h4 className="font-bold text-base sm:text-lg md:text-[21px] lg:text-[22px] tracking-tight">
                    Free Orientation Class
                  </h4>

                  <p className="text-white/60 text-sm sm:text-[15px] md:text-[16px] font-light">
                    Book your spot today
                  </p>
                </div>
              </div>

              <button className="group flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-white text-[#C2366F] font-bold rounded-full hover:bg-[#7BD535] hover:text-[#252525] transition-all duration-300 shadow-xl shadow-white/30 hover:shadow-[#7BD535]/40 hover:-translate-y-1 z-10 text-sm sm:text-base">
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>


  {/* ======================================================
    SECTION 3: START LEARNING (PREMIUM DESIGN)
====================================================== */}

<section className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden bg-gradient-to-r from-pink-100/20 via-white to-pink-50/30">

  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(194,54,111,0.08)_0%,_transparent_60%)]"></div>

  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(194,54,111,0.05)_0%,_transparent_50%)]"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Section Heading */}
    <div className="text-center mb-6 sm:mb-8 md:mb-10">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold leading-[1.05] tracking-[-0.035em] relative inline-block text-[#000000]">
        Start Learning

        <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
      </h2>

      <p className="text-[#252525]/50 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-3 sm:mt-4 md:mt-6 mx-auto px-4">
        Choose your path and begin your journey today
      </p>

    </div>

    {/* Courses Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">

      {courses.map((course, index) => {

        const Icon = course.icon;

        const isGreen = index % 2 === 1;

        return (
          <div
            key={index}
            className="group relative rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-pointer"
          >

            {/* Gradient background on hover */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isGreen
                  ? "bg-gradient-to-br from-green-50/80 to-green-100/40"
                  : "bg-gradient-to-br from-pink-50/80 to-pink-100/40"
              }`}
            ></div>

            {/* Decorative circle on hover */}
            <div
              className={`absolute -top-10 -right-10 h-20 sm:h-24 w-20 sm:w-24 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150 ${
                isGreen
                  ? "bg-[#22C55E]"
                  : "bg-[#C2366F]"
              }`}
            ></div>

            {/* Top accent line */}
            <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-[2px] bg-gradient-to-r from-[#C2366F]/30 via-[#C2366F]/70 to-[#C2366F]/30 group-hover:from-[#C2366F] group-hover:via-[#E86D9B] group-hover:to-[#C2366F] transition-all duration-500"></div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className={`mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  isGreen
                    ? "bg-[#22C55E]/10 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/25"
                    : "bg-[#C2366F]/10 text-[#C2366F] group-hover:bg-[#C2366F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/25"
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500 group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-[21px] lg:text-[22px] font-bold text-[#252525] mb-1.5 sm:mb-2 md:mb-2.5 tracking-tight transition-all duration-300 group-hover:text-[#C2366F]">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-[#252525]/60 text-sm sm:text-[15px] md:text-[16px] leading-relaxed font-light transition-all duration-300 group-hover:text-gray-700">
                {course.description}
              </p>

              {/* View Courses Link */}
              <div className="mt-3 sm:mt-4 md:mt-5 flex items-center text-[#C2366F] font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-2">

                <span className="tracking-wide">
                  View Courses
                </span>

                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />

              </div>

            </div>

            {/* Decorative number */}
            <div className="absolute top-2 sm:top-3 right-3 sm:right-4 text-[#C2366F]/10 font-bold text-2xl sm:text-3xl md:text-4xl font-mono group-hover:text-[#C2366F]/20 transition-colors duration-500">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Bottom accent bar */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${
                isGreen
                  ? "bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
                  : "bg-gradient-to-r from-[#C2366F] to-[#8A1D4B]"
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

<section className="py-4 sm:py-5 md:py-6 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-6 sm:mb-7 md:mb-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#1e1e2a] leading-[1.05] tracking-[-0.035em]">
        Featured{" "}
        <span className="relative inline-block text-[#C2366F]">
          Courses
          <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
        </span>
      </h2>

      <p className="text-[#4a4a5a]/60 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-2 sm:mt-3 md:mt-4 max-w-lg mx-auto px-4">
        Turn your passion into a profession with our expert-led programs
      </p>
    </div>

    {/* Carousel */}
    <div className="relative" ref={emblaRef}>
      <div className="flex" style={{ gap: "16px" }}>
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="flex-[0_0_250px] xs:flex-[0_0_270px] sm:flex-[0_0_280px] md:flex-[0_0_300px] lg:flex-[0_0_320px] xl:flex-[0_0_340px] min-w-0 group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(194,54,111,0.15)] border border-gray-100/80 hover:border-[#C2366F]/30 flex flex-col h-full">

              {/* Image */}
              <div className="relative h-44 xs:h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 w-full bg-gradient-to-br from-[#C2366F]/5 to-[#7BD535]/5 flex-shrink-0 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 480px) 250px, (max-width: 640px) 270px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 340px"
                />

                {/* Duration Chip */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-[#C2366F]/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                  {course.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-[21px] lg:text-[22px] font-bold text-[#1e1e2a] line-clamp-2 min-h-[40px] sm:min-h-[48px] md:min-h-[56px] group-hover:text-[#C2366F] transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[#4a4a5a]/70 text-xs sm:text-sm md:text-[15px] lg:text-[16px] mt-1.5 sm:mt-2 line-clamp-2 sm:line-clamp-3 min-h-[32px] sm:min-h-[50px] md:min-h-[60px] leading-relaxed flex-1">
                  {course.description}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-gray-100/80 flex-shrink-0">

                  <div>
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#C2366F]">
                      Rs. {course.price}
                    </span>

                    <span className="text-[8px] sm:text-[10px] md:text-xs font-normal text-[#4a4a5a]/40 ml-0.5 sm:ml-1">
                      /month*
                    </span>
                  </div>

                  <button className="group/btn text-[10px] sm:text-xs md:text-sm font-medium text-[#C2366F] hover:text-white hover:bg-[#C2366F] px-2 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full border border-[#C2366F]/30 hover:border-[#C2366F] transition-all duration-300 flex items-center gap-0.5 sm:gap-1">
                    <span>Explore</span>

                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Navigation */}
    <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">

      <button
        onClick={scrollPrev}
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105"
      >
        <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </button>

      <div className="flex gap-1.5 sm:gap-2">
        {featuredCourses.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              index === 0
                ? "bg-[#C2366F] w-5 sm:w-6 md:w-7 lg:w-8"
                : "bg-[#C2366F]/30 w-1.5 sm:w-2 hover:bg-[#C2366F]/60"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>

      <button
        onClick={scrollNext}
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-[#C2366F]/20 text-[#C2366F] hover:bg-[#C2366F] hover:text-white hover:border-[#C2366F] transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105"
      >
        <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </button>

    </div>
  </div>
</section>


   
{/* ======================================================
    SECTION 5: OUR COLLABORATIVE PARTNER (IMAGES UP)
    - partners bg1 (girl) on left wall, slightly up
    - partners bg2 (hands) on right wall, slightly up
    - Small, clean, no opacity
    - Stickers hidden on mobile/tablet, visible on desktop
====================================================== */}

<section className="relative py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden bg-gradient-to-r from-pink-50/50 via-white to-pink-50/30">

  {/* Girl Image - Left Wall (slightly up) - HIDDEN ON MOBILE/TABLET */}
  <div className="absolute top-[20%] sm:top-[22%] md:top-[25%] -translate-y-1/2 left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 pointer-events-none hidden lg:block">
    <img
      src="/images/partners bg1.png"
      alt="Girl"
      className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-40 w-auto object-contain opacity-70 sm:opacity-90"
    />
  </div>

  {/* Hands Image - Right Wall (slightly up) - HIDDEN ON MOBILE/TABLET */}
  <div className="absolute top-[20%] sm:top-[22%] md:top-[25%] -translate-y-1/2 right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 pointer-events-none hidden lg:block">
    <img
      src="/images/partners bg2.png"
      alt="Hands"
      className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain opacity-70 sm:opacity-90"
    />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#252525] leading-[1.05] tracking-[-0.035em]">
        Our{" "}
        <span className="relative inline-block">
          <span className="text-[#C2366F]">
            Collaborative
          </span>

          <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
        </span>{" "}
        Partner
      </h2>

      <p className="text-[#252525]/50 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-2 sm:mt-3 max-w-sm mx-auto font-light tracking-wide">
        Trusted partners who empower our students' success
      </p>
    </div>

    {/* Marquee Container */}
    <div className="relative overflow-visible py-4 sm:py-6 md:py-8">

      {/* Gradient overlays on edges */}
      <div className="absolute left-0 top-0 w-16 sm:w-20 md:w-24 lg:w-32 h-full bg-gradient-to-r from-pink-50/50 via-pink-50/20 to-transparent z-20 pointer-events-none"></div>

      <div className="absolute right-0 top-0 w-16 sm:w-20 md:w-24 lg:w-32 h-full bg-gradient-to-l from-pink-50/50 via-pink-50/20 to-transparent z-20 pointer-events-none"></div>

      {/* Animated Track - Pure logos */}
      <div className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28 animate-marquee">

        {/* First set of logos */}
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div
            key={`logo-${num}`}
            className="group flex-shrink-0 relative transition-all duration-500 hover:scale-110 hover:-translate-y-2"
          >

            {/* Glow effect behind logo on hover */}
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 bg-[#C2366F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            {/* Gradient glow ring on hover */}
            <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 rounded-full bg-gradient-to-r from-[#C2366F]/0 via-[#C2366F]/5 to-[#7BD535]/0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>

            {/* Logo image */}
            <img
              src={`/images/logo${num}.png`}
              alt={`Partner Logo ${num}`}
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain transition-all duration-500 drop-shadow-md hover:drop-shadow-[0_8px_40px_rgba(194,54,111,0.35)]"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
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
            <div className="absolute -inset-6 sm:-inset-8 md:-inset-10 bg-[#C2366F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            {/* Gradient glow ring on hover */}
            <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 rounded-full bg-gradient-to-r from-[#C2366F]/0 via-[#C2366F]/5 to-[#7BD535]/0 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 -z-10"></div>

            {/* Logo image */}
            <img
              src={`/images/logo${num}.png`}
              alt={`Partner Logo ${num}`}
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[160px] lg:max-w-[180px] xl:max-w-[200px] object-contain transition-all duration-500 drop-shadow-md hover:drop-shadow-[0_8px_40px_rgba(194,54,111,0.35)]"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* ======================================================
    SECTION 6: CLIENT TESTIMONIALS (REDUCED PADDING)
    - Raspberry Pink (#C2366F) as hero color
    - Stunning gradient with pink tones
    - Minimal padding - clean & elegant
====================================================== */}
<section className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
  
  {/* Main Background - Rich Pink Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0F6] via-[#FFE0EC] to-[#F8D0E0]"></div>
  
  {/* Large Glowing Raspberry Pink Orbs - Soft Background */}
  <div className="absolute top-[-200px] right-[-150px] w-[500px] sm:w-[600px] md:w-[700px] h-[500px] sm:h-[600px] md:h-[700px] bg-[#C2366F]/15 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-[-200px] left-[-150px] w-[500px] sm:w-[600px] md:w-[700px] h-[500px] sm:h-[600px] md:h-[700px] bg-[#C2366F]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  {/* Sparkle Particles - Small dots */}
  <div className="absolute top-8 sm:top-10 md:top-12 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C2366F]/15 rounded-full blur-sm"></div>
  <div className="absolute top-1/3 left-6 sm:left-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-1/3 right-6 sm:right-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#C2366F]/15 rounded-full blur-sm"></div>
  <div className="absolute top-16 sm:top-20 right-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C2366F]/20 rounded-full blur-sm"></div>
  <div className="absolute bottom-16 sm:bottom-20 left-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C2366F]/15 rounded-full blur-sm"></div>


  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* ====== HEADING ====== */}
    <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
      
      {/* Main Heading with Pink Highlight */}
      <h2 className="text-3xl sm:text-4xl md:text-[43px] lg:text-[52px] xl:text-[57px] font-bold text-[#1e1e2a] leading-[1.12] tracking-[-0.045em]">
        What Our{' '}
        <span className="text-[#C2366F] relative inline-block">
          Clients
          <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
        </span>{' '}
        Say
      </h2>
      
      <p className="text-[#252525]/50 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-2 sm:mt-3 max-w-sm mx-auto font-light tracking-wide">
        Real stories from our students who turned their passion into profession
      </p>
    </div>


    {/* ====== TESTIMONIALS CARDS ====== */}
    <div className="max-w-5xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
      
      {/* Testimonial 1 - LEFT */}
      <div className="flex justify-start">
        <div className="w-full sm:w-[95%] md:w-[88%] lg:w-[82%] xl:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          
          {/* Large Quote Mark */}
          <div className="absolute top-2 sm:top-3 right-4 sm:right-5 md:right-6 text-[#C2366F]/8 text-5xl sm:text-6xl md:text-7xl font-serif hidden sm:block leading-none">"</div>
          
          {/* Raspberry Pink Glow on Hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 relative">
            {/* Client Image */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client1.jpeg"
                  alt="Farrah Ibrahim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h4 className="text-base sm:text-lg md:text-[19px] lg:text-[20px] font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Farrah Ibrahim
              </h4>

              <p className="text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#C2366F] font-medium mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>

              <p className="text-[#4a4a5a]/70 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.5]">
                "I was so fortunate enough to join the first batch and honestly, my experience here was way beyond my expectations. Thanks to our teacher, I am now confident enough in opening my own parlour Insha'Allah. Totally worth it."
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Testimonial 2 - RIGHT */}
      <div className="flex justify-end">
        <div className="w-full sm:w-[95%] md:w-[88%] lg:w-[82%] xl:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          <div className="absolute top-2 sm:top-3 right-4 sm:right-5 md:right-6 text-[#C2366F]/8 text-5xl sm:text-6xl md:text-7xl font-serif hidden sm:block leading-none">"</div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client2.jpg"
                  alt="Maham Ali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-base sm:text-lg md:text-[19px] lg:text-[20px] font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Maham Ali
              </h4>

              <p className="text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#C2366F] font-medium mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>

              <p className="text-[#4a4a5a]/70 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.5]">
                "I'm student of be your beauty expert from 1st batch and its amazing. If you want to be expert then you must have to join the 2nd batch of PNY Pink Be Your Own Beauty Expert. And our Instructor is such a Professional Mashaa Allah. May Allah gave more success in their life"
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Testimonial 3 - LEFT */}
      <div className="flex justify-start">
        <div className="w-full sm:w-[95%] md:w-[88%] lg:w-[82%] xl:w-[78%] bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_8px_40px_rgba(194,54,111,0.08)] hover:shadow-[0_20px_60px_rgba(194,54,111,0.25)] transition-all duration-500 hover:-translate-y-2 border border-white/60 hover:border-[#C2366F]/30 group relative">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2366F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
          <div className="absolute top-2 sm:top-3 right-4 sm:right-5 md:right-6 text-[#C2366F]/8 text-5xl sm:text-6xl md:text-7xl font-serif hidden sm:block leading-none">"</div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C2366F]/5 via-transparent to-[#C2366F]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 relative">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 sm:border-3 border-[#C2366F]/20 group-hover:border-[#C2366F] shadow-lg group-hover:shadow-[0_0_40px_rgba(194,54,111,0.3)] transition-all duration-300">
                <img
                  src="/images/client3.jpeg"
                  alt="Waliya Najeeb"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-base sm:text-lg md:text-[19px] lg:text-[20px] font-bold text-[#1e1e2a] group-hover:text-[#C2366F] transition-colors duration-300">
                Waliya Najeeb
              </h4>

              <p className="text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#C2366F] font-medium mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C2366F]"></span>
                Be Your Own Beauty Expert
              </p>

              <p className="text-[#4a4a5a]/70 text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.5]">
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
        className="bg-gradient-to-b from-pink-50/30 to-white py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">

            <div className="text-center mb-5 sm:mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-[#C2366F]/10 flex-shrink-0">
                  <Play size={16} className="text-[#C2366F] sm:size-[17px] md:size-[18px] lg:size-20" />
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                Celebrating{" "}
                <span className="relative inline-block">
                  <span className="text-[#C2366F]">
                    Our Success
                  </span>

                  <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
                </span>
              </h2>
              </div>

              <p className="text-[#252525]/70 text-sm sm:text-base md:text-[17px] lg:text-[18px] mt-2 sm:mt-3 px-4">
              Hear from our students as they share their incredible journey and achievements at PNY Pink
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/o_jaK4lebjI"
                title="🌸✨ Celebrating success, hard work & new beginnings! 🎓💐PNY #WomenEmpowerment #CelebrateSuccess"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 rounded-lg bg-black/50 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-white backdrop-blur-sm pointer-events-none">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500 sm:size-[14px] md:size-[16px]"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>

                  <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                    Watch on YouTube
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-xl bg-gradient-to-r from-[#C2366F]/10 to-[#8A1D4B]/10 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award
                    size={14}
                    className="text-[#C2366F] sm:size-[15px] md:size-[16px]"
                  />

                  <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                    Student Success Stories
                  </span>
                </div>

                <span className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                  |
                </span>

                <span className="text-xs sm:text-sm md:text-base font-bold text-[#C2366F]">
                  2025
                </span>
              </div>

              <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                44 views • Aug 26, 2025
              </div>
            </div>

            <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 rounded-xl bg-white p-3 sm:p-4 md:p-5 lg:p-6 shadow-md">
              <p className="text-[#252525]/70 text-sm sm:text-base md:text-[17px] lg:text-[18px] font-light leading-relaxed">
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
              PNY PINK

              {/* Underline */}
              <span className=" absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
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

              <p className="pl-7 text-[16px] font-normal leading-[1.8] tracking-[-0.01em] text-[#252b27]/70 md:pl-8 md:text-[18px] lg:text-[19px] xl:text-[20px]">
                PNY PINK is one of the best institutions for women especially in Lahore, Pakistan offering a range of
                training programs designed for women building a career,
                as well as those developing practical, home-based, and
                professional skills.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>


   {/* ======================================================
    SECTION: LEARNING OPPORTUNITIES
====================================================== */}

<section className="relative w-full overflow-hidden bg-gradient-to-br from-[#fff8fb] via-[#fff1f7] to-[#f8fbf8] py-8 sm:py-10 md:py-12 lg:py-16">

  {/* Soft decorative gradients */}
  <div className="pointer-events-none absolute -left-40 top-20 h-64 sm:h-80 md:h-96 w-64 sm:w-80 md:w-96 rounded-full bg-[#c2366f]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-64 sm:h-80 md:h-96 w-64 sm:w-80 md:w-96 rounded-full bg-[#15803d]/10 blur-3xl" />

  <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

    {/* ================= HEADER ================= */}
    <div className="max-w-[850px]">

      {/* Small Label */}
      <span className="mb-4 sm:mb-5 inline-flex rounded-full border border-[#e8b8ce] bg-white/70 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c2366f] backdrop-blur-sm">
        Learning Opportunities
      </span>

      {/* Heading */}
      <h2 className="max-w-[850px] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[68px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#202020]">
        Learning Opportunities Across{" "}
        <span className="relative inline-block">
          <span className="text-[#c2366f]">
          Pakistan
          </span>
          <span className="absolute bottom-0 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F] rounded-full"></span>
        </span>
      </h2>

      {/* Description */}
      <p className="mt-4 sm:mt-5 md:mt-7 max-w-[850px] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[1.7] text-[#67586a]">
        PNY PINK offers courses and training opportunities in Lahore,
        Islamabad, Rawalpindi, Karachi, and other major cities of Pakistan.
      </p>

    </div>

    {/* ================= LOCATION CARDS ================= */}
    <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">

      {locations.map((location, index) => (
        <div
          key={location}
          className={`group relative flex min-h-[110px] sm:min-h-[125px] md:min-h-[135px] flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[#eadde4] bg-white/90 p-5 sm:p-6 md:p-7 shadow-[0_10px_35px_rgba(194,54,111,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c2366f]/30 hover:shadow-[0_18px_45px_rgba(194,54,111,0.12)] ${
            index === 3
              ? "lg:shadow-[0_18px_45px_rgba(194,54,111,0.13)]"
              : ""
          }`}
        >

          {/* Top subtle accent */}
          <div className="absolute right-0 top-0 h-[3px] w-0 bg-[#c2366f] transition-all duration-300 group-hover:w-full" />

          {/* Location Icon */}
          <MapPin
            size={18}
            strokeWidth={2}
            className="text-[#c2366f] sm:size-[20px] md:size-[23px]"
          />

          {/* Location Name */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#171717]">
            {location}
          </p>

        </div>
      ))}

    </div>

    {/* ================= QUOTE ================= */}
    <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 max-w-[900px]">

      <h3 className="text-2xl sm:text-3xl md:text-[29px] lg:text-[35px] xl:text-[39px] font-medium leading-[1.35] tracking-[-0.025em] text-[#171717]">
        “Wherever you are, there is an opportunity to learn,
        grow, and move forward.”
      </h3>

      {/* Pink + Green accent */}
      <div className="mt-5 sm:mt-6 md:mt-7 flex items-center gap-3">
        <span className="h-[7px] sm:h-[8px] md:h-[9px] w-16 sm:w-20 md:w-24 rounded-full bg-[#c2366f]" />
        <span className="h-[7px] sm:h-[8px] md:h-[9px] w-8 sm:w-10 md:w-12 rounded-full bg-[#15803d]" />
      </div>

    </div>

  </div>
</section>

{/* ======================================================
    SECTION: MARKET ALIGNED
====================================================== */}

<section className="relative w-full overflow-hidden bg-white py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
  <div className="mx-auto max-w-[1450px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

    <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">

      {/* ================= LEFT CONTENT ================= */}
      <div>

        {/* Label */}
        <span className="mb-6 sm:mb-7 md:mb-9 inline-flex rounded-full border border-[#e8b8ce] bg-[#fff8fb] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c2366f]">
          Market Aligned
        </span>

        {/* Heading */}
        <h2 className="max-w-[650px] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[62px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#242424]">
          Skills That Move With
          <br />
          the Market
        </h2>

        {/* Description */}
        <p className="mt-5 sm:mt-6 md:mt-8 max-w-[650px] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-[1.75] text-[#67586a]">
          When developing and offering courses, PNY PINK pays close
          attention to market needs, industry demand, and the future
          career scope of every skill we teach.
        </p>

        {/* Tags */}
        <div className="mt-6 sm:mt-7 md:mt-9 flex max-w-[650px] flex-wrap gap-2 sm:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#e9bfd1] bg-[#fff9fc] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-[15px] font-medium text-[#c2366f] transition-all duration-300 hover:border-[#c2366f] hover:bg-[#c2366f] hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* ================= RIGHT CARD ================= */}
      <div className="w-full">

        <div className="relative rounded-[24px] sm:rounded-[28px] border border-[#eadde4] bg-white px-5 sm:px-6 md:px-7 lg:px-9 xl:px-10 py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 shadow-[0_18px_55px_rgba(194,54,111,0.09)]">

          {/* Vertical Timeline */}
          <div className="absolute bottom-[65px] sm:bottom-[70px] md:bottom-[75px] left-[38px] sm:left-[44px] md:left-[50px] lg:left-[55px] xl:left-[61px] top-[65px] sm:top-[70px] md:top-[75px] w-px bg-[#eadde4]" />

          <div className="relative space-y-6 sm:space-y-7 md:space-y-8">

            {marketPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex items-start gap-4 sm:gap-5"
                >

                  {/* Icon */}
                  <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full bg-[#eef9f1] text-[#3BA55C]">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                      className="sm:size-[17px] md:size-[19px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-0.5">

                    <h3 className="font-serif text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-semibold leading-tight text-[#202020]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-sm sm:text-[15px] md:text-[16px] leading-[1.5] text-[#756578]">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* ======================================================
    SECTION: MENTORSHIP
====================================================== */}

<section className="relative w-full overflow-hidden bg-[#fdf0f5] px-4 sm:px-6 md:px-8 lg:px-[60px] py-10 sm:py-12 md:py-14 lg:py-[70px]">
  
  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,91,145,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(190,48,111,0.06),transparent_35%)]" />

  {/* Sticker Image - Top Right Corner - Hidden on mobile/tablet */}
  <div className="absolute right-0 bottom-60 z-20 hidden lg:block">
    <img
      src="/images/section9img.png"
      alt="Mentorship decoration"
      className="w-64 h-64 object-contain md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] opacity-90"
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[1400px]">

    {/* Label */}
    <div className="mb-6 sm:mb-7 md:mb-8">
      <span className="inline-flex rounded-full border border-[#dfabc1] bg-[#fff5f8] px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#b52f6d]">
        MENTORSHIP
      </span>
    </div>

    {/* Heading */}
    <h2 className="max-w-[850px] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[58px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#242124]">
      Learn From Qualified Trainers
      <br />
      &amp; Mentors
    </h2>

    {/* Description */}
    <p className="mt-5 sm:mt-6 md:mt-8 max-w-[800px] text-sm sm:text-base md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.65] text-[#596079]">
      Our online learning runs on an organised system, and qualified
      trainers and mentors support learners throughout the training
      journey.
    </p>

    {/* Timeline */}
    <div className="relative mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[78px]">

      {/* Desktop Horizontal Line */}
      <div className="absolute left-0 right-0 top-[29px] hidden h-px bg-[#dda9bf] lg:block" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="relative">

              {/* Mobile Vertical Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[29px] top-[58px] h-[calc(100%+48px)] w-px bg-[#dda9bf] lg:hidden" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex h-[50px] w-[50px] sm:h-[54px] sm:w-[54px] md:h-[58px] md:w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-[#bd3374] via-[#ca4380] to-[#dc6797] shadow-[0_6px_18px_rgba(189,51,116,0.18)]">
                <Icon
                  className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px] text-white"
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-5 sm:mt-6 md:mt-7">
                <h3 className="font-serif text-[18px] sm:text-[19px] md:text-[21px] font-semibold leading-tight text-[#181719]">
                  {step.title}
                </h3>

                <p className="mt-3 sm:mt-3.5 md:mt-4 max-w-[280px] text-[14px] sm:text-[14px] md:text-[15px] leading-[1.55] text-[#697087]">
                  {step.description}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  </div>
</section>

{/* ======================================================
    FINAL SECTION: NEXT STEP CTA
    - Premium interactive 3D flip panels
====================================================== */}

<section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#fff9fc] to-[#fff0f6] py-8 sm:py-10 md:py-12 lg:py-14">

  {/* ================= BACKGROUND GLOWS ================= */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[300px] sm:h-[350px] md:h-[420px] w-[300px] sm:w-[350px] md:w-[420px] rounded-full bg-[#C2366F]/8 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] sm:h-[400px] md:h-[500px] w-[350px] sm:w-[400px] md:w-[500px] rounded-full bg-[#E86D9B]/10 blur-3xl" />
  <div className="pointer-events-none absolute left-1/2 top-[45%] h-[250px] sm:h-[300px] md:h-[350px] w-[500px] sm:w-[600px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2366F]/5 blur-3xl" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

    {/* ================= INTRO ================= */}
    <div className="mx-auto max-w-[850px] text-center">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[70px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#202020]">

        Your Skills.
        <br />

        <span className="relative inline-block text-[#C2366F]">

          Your Opportunity.

          <span className="absolute -bottom-1 left-0 h-[3px] sm:h-[4px] w-full rounded-full bg-gradient-to-r from-[#C2366F] via-[#E86D9B] to-[#C2366F]" />

        </span>

      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 sm:mt-5 md:mt-7 max-w-[700px] text-sm sm:text-base md:text-[17px] lg:text-[19px] leading-[1.75] text-[#67586a]">
        Whether you want to share your expertise or empower your team
        with future-ready skills, PNY gives you the platform to move forward.
      </p>

    </div>

    {/* ==================================================
        INTERACTIVE FLIP PANELS
    ================================================== */}
    <div className="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 grid max-w-[1120px] grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8">

      {/* ==================================================
          PANEL 01 — INSTRUCTOR
      ================================================== */}
      <div className="group [perspective:1400px]">

        <div className="relative h-[380px] sm:h-[400px] md:h-[430px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* ================= FRONT ================= */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[34px] border border-[#ead6df] bg-white shadow-[0_20px_70px_rgba(194,54,111,0.08)] [backface-visibility:hidden]">

            {/* Background glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 sm:h-72 w-64 sm:w-72 rounded-full bg-[#C2366F]/10 blur-3xl transition-all duration-700 group-hover:bg-[#C2366F]/20" />

            {/* Decorative outline */}
            <div className="absolute -bottom-28 -left-28 h-56 sm:h-64 w-56 sm:w-64 rounded-full border border-[#C2366F]/10" />

            {/* Number */}
            <div className="absolute left-6 sm:left-8 md:left-10 top-6 sm:top-8 md:top-10 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C2366F]">
              01 / Share Your Expertise
            </div>

            {/* Giant Number */}
            <div className="absolute bottom-[-35px] sm:bottom-[-40px] md:bottom-[-45px] right-[-15px] select-none text-[160px] sm:text-[180px] md:text-[210px] font-semibold leading-none tracking-[-0.08em] text-[#C2366F]/[0.045]">
              01
            </div>

            {/* Main content */}
            <div className="relative flex h-full flex-col justify-center px-6 sm:px-8 md:px-12">

              <div className="mb-4 sm:mb-5 md:mb-6 flex h-14 w-14 sm:h-15 sm:w-15 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#C2366F]/10 bg-[#fff5f9] text-[#C2366F] transition-all duration-500 group-hover:scale-110">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:size-[26px] md:size-[28px]"
                >
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>

              </div>

              <h3 className="max-w-[450px] text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#202020]">

                Become an
                <br />

                <span className="text-[#C2366F]">
                  Instructor
                </span>

              </h3>

              {/* Hover hint */}
              <div className="mt-6 sm:mt-7 md:mt-8 flex items-center gap-3 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#9a8492]">

                <span>
                  Hover to explore
                </span>

                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#decbd5] text-[#C2366F] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>

              </div>

            </div>

          </div>

          {/* ================= BACK ================= */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[34px] bg-[#C2366F] p-6 sm:p-8 md:p-12 text-white shadow-[0_25px_80px_rgba(194,54,111,0.28)] [backface-visibility:hidden] [transform:rotateY(180deg)]">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 sm:h-72 w-64 sm:w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 sm:h-72 w-64 sm:w-72 rounded-full border border-white/10" />

            {/* Back content */}
            <div className="relative flex h-full flex-col justify-between">

              <div>

                <div className="mb-6 sm:mb-7 md:mb-8 flex items-center justify-between">

                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    Share Your Expertise
                  </span>

                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold">
                    01
                  </span>

                </div>

                <h3 className="max-w-[430px] text-2xl sm:text-3xl md:text-[35px] lg:text-[43px] font-semibold leading-[1.08] tracking-[-0.035em]">
                  Turn your experience into impact.
                </h3>

                <p className="mt-4 sm:mt-5 md:mt-6 max-w-[440px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] text-white/75">
                  Teach what you love, share your expertise, and create
                  meaningful learning experiences for the next generation.
                </p>

              </div>

              {/* CTA */}
              <div className="flex items-center justify-between gap-5">

                <button
                  type="button"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#C2366F] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                >
                  Start Teaching

                  <span className="text-[16px] sm:text-[17px] md:text-[18px]">
                    →
                  </span>

                </button>

                <span className="hidden text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-white/50 sm:block">
                  Flip back
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ==================================================
          PANEL 02 — BUSINESS
      ================================================== */}
      <div className="group [perspective:1400px] lg:mt-12">

        <div className="relative h-[380px] sm:h-[400px] md:h-[430px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* ================= FRONT ================= */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[34px] border border-[#ead6df] bg-gradient-to-br from-[#fffafd] via-white to-[#fff1f7] shadow-[0_20px_70px_rgba(194,54,111,0.08)] [backface-visibility:hidden]">

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 sm:h-72 w-64 sm:w-72 rounded-full bg-[#E86D9B]/10 blur-3xl transition-all duration-700 group-hover:bg-[#E86D9B]/20" />

            {/* Decorative circle */}
            <div className="pointer-events-none absolute right-[-60px] sm:right-[-70px] top-[-60px] sm:top-[-70px] h-56 sm:h-64 w-56 sm:w-64 rounded-full border border-[#C2366F]/10" />

            {/* Number */}
            <div className="absolute left-6 sm:left-8 md:left-10 top-6 sm:top-8 md:top-10 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C2366F]">
              02 / Grow Your Team
            </div>

            {/* Giant number */}
            <div className="absolute bottom-[-35px] sm:bottom-[-40px] md:bottom-[-45px] right-[-10px] select-none text-[160px] sm:text-[180px] md:text-[210px] font-semibold leading-none tracking-[-0.08em] text-[#C2366F]/[0.045]">
              02
            </div>

            {/* Content */}
            <div className="relative flex h-full flex-col justify-center px-6 sm:px-8 md:px-12">

              <div className="mb-4 sm:mb-5 md:mb-6 flex h-14 w-14 sm:h-15 sm:w-15 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#C2366F]/10 bg-white text-[#C2366F] shadow-sm transition-all duration-500 group-hover:scale-110">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:size-[26px] md:size-[28px]"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="M7 8h10" />
                  <path d="M7 12h6" />
                </svg>

              </div>

              <h3 className="max-w-[450px] text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#202020]">

                PNY for
                <br />

                <span className="text-[#C2366F]">
                  Business
                </span>

              </h3>

              <div className="mt-6 sm:mt-7 md:mt-8 flex items-center gap-3 text-[10px] sm:text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#9a8492]">

                <span>
                  Hover to explore
                </span>

                <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border border-[#decbd5] text-[#C2366F] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>

              </div>

            </div>

          </div>

          {/* ================= BACK ================= */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] sm:rounded-[34px] bg-[#C2366F] p-6 sm:p-8 md:p-12 text-white shadow-[0_25px_80px_rgba(194,54,111,0.28)] [backface-visibility:hidden] [transform:rotateY(180deg)]">

            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 sm:h-72 w-64 sm:w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 sm:h-72 w-64 sm:w-72 rounded-full border border-white/10" />

            {/* Back content */}
            <div className="relative flex h-full flex-col justify-between">

              <div>

                <div className="mb-6 sm:mb-7 md:mb-8 flex items-center justify-between">

                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    Grow Your Team
                  </span>

                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold">
                    02
                  </span>

                </div>

                <h3 className="max-w-[430px] text-2xl sm:text-3xl md:text-[35px] lg:text-[43px] font-semibold leading-[1.08] tracking-[-0.035em]">
                  Build a future-ready team.
                </h3>

                <p className="mt-4 sm:mt-5 md:mt-6 max-w-[440px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.75] text-white/75">
                  Give your team access to practical, future-ready skills
                  designed to support growth, confidence, and performance.
                </p>

              </div>

              {/* CTA */}
              <div className="flex items-center justify-between gap-5">

                <button
                  type="button"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#C2366F] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
                >
                  Explore PNY for Business

                  <span className="text-[16px] sm:text-[17px] md:text-[18px]">
                    →
                  </span>

                </button>

                <span className="hidden text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-white/50 sm:block">
                  Flip back
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 text-center">

      <div className="mx-auto mb-4 sm:mb-5 h-px w-16 sm:w-20 md:w-25 bg-gradient-to-r from-transparent via-[#C2366F]/40 to-transparent" />

    </div>

  </div>

</section>

    


    </main>
  );
}