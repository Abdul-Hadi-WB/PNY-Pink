"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  User,
} from "lucide-react";

// ============================================
// BLOG DATA
// ============================================
const blogPosts = [
  {
    id: 1,
    title: "2025 Festive Makeup Looks in Pakistan: Fresh Trends You'll Love",
    date: "Aug 5, 2025",
    excerpt:
      "Discover the top 2025 festive makeup looks in Pakistan, from soft glam and bold eye makeup trends to Pakistani bridal makeup ideas perfect for Mehndi and wedding celebrations.",
    image: "/images/Festive.jpg",
    category: "Makeup",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 2,
    title: "Glass Skin Routine Pakistan: Summer Dewy Skin Tips & Korean Skincare Guide",
    date: "Jul 17, 2025",
    excerpt:
      "Discover the ultimate glass skin routine in Pakistan for summer 2025. Get dewy skin with Korean skincare, hydrating serums, and practical tips perfect for hot weather.",
    image: "/images/GlassSkinRoutinePakisatn.jpg",
    category: "Skincare",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 3,
    title: "Top 2025 Hair Color Trends for Pakistani Girls",
    date: "Jul 7, 2025",
    excerpt:
      "Discover the most beautiful 2025 hair color trends in Pakistan. From ash brown hair to balayage and vibrant dyes, explore stunning looks for every Pakistani girl.",
    image: "/images/HairColorTrends.jpg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 4,
    title: "Celebrating All Shades - Changing Perceptions of Beauty in Pakistan",
    date: "Jun 20, 2025",
    excerpt:
      "The standards of Pakistan's beauty are transformed from focusing on fair skin to embracing all type of skin tones, the main drivers of this transformation are social media, influencers and cultural movement.",
    image: "/images/PerceptionOfBeautyInPakistan.jpg",
    category: "Beauty",
    readTime: "7 min read",
    author: "PNY Pink Team",
  },
  {
    id: 5,
    title: "Milky Matcha Latte Nails: The Calming Green Trend in 2025 Nail Designs",
    date: "Jun 13, 2025",
    excerpt:
      "Discover the soft, elegant charm of milky matcha latte nails. Learn how this green nail design is leading 2025 nail trends across Pakistani salons.",
    image: "/images/InDemandExpertiseAcrylicNailArt&Eyelahes.jpeg",
    category: "Nail Art",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 6,
    title: "Building Confidence Through Skill Development",
    date: "Sep 24, 2024",
    excerpt:
      "People will judge you on the base of your confidence level. If you are confident about yourself then better things will come your way.",
    image: "/images/InDemandExpertiseBuildingConfidenceThroughSkill.jpeg",
    category: "Personal Development",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 7,
    title: "From Passion to Profession: Women Leading All Industries",
    date: "Sep 24, 2024",
    excerpt:
      "In this age, women are overtaking every field. They are efficiently working in every field and this has marked their achievement.",
    image: "/images/InDemandExpertiseWomenLeadingAllIndustries .jpeg",
    category: "Women Empowerment",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 8,
    title: "Creating Stunning Hair Styling Techniques for All Occasions",
    date: "Sep 24, 2024",
    excerpt:
      "After applying makeup through the best techniques and creating a fine look, the next step is to style your hair.",
    image: "/images/InDemandExpertiseCreatingStunningHairTechniques.jpeg",
    category: "Hair",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 9,
    title: "Makeup Essentials: Must-Have Products and Tools",
    date: "Aug 30, 2024",
    excerpt:
      "The most feminine thing to do is to find the right makeup match for your face. Makeup depicts the feeling of joy and self-love for women.",
    image: "/images/InDemandExpertiseMakeUpEssentialsMustHave.jpg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 10,
    title: "Henna Designs: From Traditional to Contemporary",
    date: "Aug 26, 2024",
    excerpt:
      "Henna also known as mehndi has been an integral part of the tradition and culture, used for celebrations for centuries.",
    image: "/images/InDemandExpertiseHennaDesignsFromTraditional.jpeg",
    category: "Henna",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 11,
    title: "Balancing Beauty and Business: Tips for Aspiring Entrepreneurs",
    date: "Aug 23, 2024",
    excerpt:
      "Thinking of your business idea is definitely not an easy task. You need to consider many aspects that could be beneficial for it.",
    image: "/images/InDemandExpertiseBlalancingBeautyAndBuisness.jpeg",
    category: "Business",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 12,
    title: "In-Demand Expertise: Acrylic Nail Art and Eyelash Extensions",
    date: "Aug 22, 2024",
    excerpt:
      "In the rapidly evolving landscape, beauty is not behind. There are so many beauty standards and practices that need to be followed.",
    image: "/images/InDemandExpertiseAcrylicNailArt&Eyelahes.jpeg",
    category: "Beauty",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 13,
    title: "Soft Skills for Women",
    date: "Aug 22, 2024",
    excerpt:
      "Soft skills are crucial for women as it help develop their overall personality and contribute to success.",
    image: "/images/InDemandExpertiseSoftSkillsWoman.jpeg",
    category: "Personal Development",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 14,
    title: "Skilled Trades for Women – Your Gateway to Skilled Careers",
    date: "Aug 22, 2024",
    excerpt:
      "In this male-dominated society, now women have also come forward in skill trade. Skill trade is basically a type of job that requires specific skills.",
    image: "/images/InDemandExpertiseSkilledTradersForWomen.jpeg",
    category: "Career",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 15,
    title: "Leadership Skills for Women - Strategies to Build Confidence and Grow",
    date: "Aug 22, 2024",
    excerpt:
      "Women are known for their unwavering determination and many other qualities. As every role in our society is discriminated against based on gender.",
    image: "/images/InDemandExpertiseLesdershipSkillsForWomen.jpeg",
    category: "Leadership",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 16,
    title: "High-Income Skills for Women",
    date: "Aug 22, 2024",
    excerpt:
      "In today's advancing technology, it becomes crucial to improve your technical skillset in order to secure your spot in this evolving landscape.",
    image: "/images/InDemandExpertiseHigh-IncomeSkills.jpeg",
    category: "Career",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 17,
    title: "Betaine Skincare - Natural Protection for Your Skin",
    date: "Aug 22, 2024",
    excerpt:
      "For our skincare routine, we are always looking for natural ingredients that are not harmful to the skin.",
    image: "/images/InDemandExpertiseBetaineSkinCare.jpeg",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 18,
    title: "Black Face Mask Skincare - Clear Skin with Natural Ingredients",
    date: "Aug 22, 2024",
    excerpt:
      "Skincare is a necessary ritual in our daily lives to put up with fresh and glowing skin.",
    image: "/images/InDemandExpertiseBlackFaceMaskSkincare.jpeg",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 19,
    title: "When to Use Eye Patches in a Skincare Routine",
    date: "Aug 22, 2024",
    excerpt:
      "Eye patches are usually used in skincare because the area around the eyes is mostly subjected to dark circles, dryness, puffiness, and wrinkles.",
    image: "/images/InDemandExpertiseWhenToUseEyePatchesSkinRoutine.jpeg",
    category: "Skincare",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 20,
    title: "Does Skincare Expire? Your Professional Guide",
    date: "Aug 22, 2024",
    excerpt:
      "Skincare does expire after a certain period of time. It contains chemicals that lose their effect after the expiration date.",
    image: "/images/InDemandExpertiseDoesSkinCarExpire.jpeg",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 21,
    title: "Summer Skincare Routine",
    date: "Aug 22, 2024",
    excerpt:
      "In summer, the climate is marked by high temperatures and increased humidity. Based on the region the level of temperature can vary.",
    image: "/images/InDemandExpertiseSummerSkincare.jpeg",
    category: "Skincare",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 22,
    title: "Home Remedies For Skin Care",
    date: "May 29, 2024",
    excerpt:
      "Every day our skin has gone through so much. It deals with sun exposure, dust, climate changes, skin problems, and so much more.",
    image: "/images/HomeMaidSkinCare.png",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 23,
    title: "Self Grooming Tips for Females",
    date: "May 31, 2024",
    excerpt:
      "We've heard more often that the self grooming comes up with self love. But it's not all about physical appearance but also about physical and mental health.",
    image: "/images/SelfGrooming.png",
    category: "Personal Development",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 24,
    title: "Grow Eyelashes Naturally at Home",
    date: "Jun 3, 2024",
    excerpt:
      "The eyes are the most attractive and important part of your face. Eyelashes add up to the beauty of the eyes and enhance the overall appearance.",
    image: "/images/GrowEyelashes.png",
    category: "Beauty",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 25,
    title: "PRP Hair Treatment",
    date: "May 16, 2024",
    excerpt:
      "Having healthy and good hair adds a core value to your personality. PRP stands for Platelet-Rich Plasma and is a non-surgical procedure.",
    image: "/images/PRPHair.png",
    category: "Hair",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 26,
    title: "Skin Care Routine for Oily Skin",
    date: "May 16, 2024",
    excerpt:
      "Oily Skin is considered one of the most difficult skin textures to take care of. It could be very challenging to manage oily skin.",
    image: "/images/SkinCareRoutineForOilySkin.png",
    category: "Skincare",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 27,
    title: "Desert Skin Care",
    date: "May 6, 2024",
    excerpt:
      "Desert climate is known for its dryness. This dryness will make your skin dry, leathery, and itchy, causing serious skin problems.",
    image: "/images/DesertSkinCare.png",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 28,
    title: "What Fruits Help with Acne",
    date: "May 3, 2024",
    excerpt:
      "Fruits are very important for your health as they are enriched in vitamins and antioxidants that help you get rid of acne.",
    image: "/images/WhatFruitsHelpWithacne.png",
    category: "Health",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 29,
    title: "Foods To Clear Skin Overnight",
    date: "Apr 30, 2024",
    excerpt:
      "To get clear and healthier skin, it is very important to get balanced and a healthy diet.",
    image: "/images/FoodsToClearSkin.png",
    category: "Health",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 30,
    title: "Middle East Beauty Secrets",
    date: "Apr 29, 2024",
    excerpt:
      "Beauty across the Middle East has its own diverse standards and is celebrated across the world due to its sharp features.",
    image: "/images/MiddleEasrBeautySecrets.png",
    category: "Beauty",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 31,
    title: "Skin Care For Swimmers",
    date: "Apr 24, 2024",
    excerpt:
      "Skincare for swimmers is essential due to the unique challenges posed by frequent exposure to chlorine, saltwater, and sun.",
    image: "/images/SkinCareSwimmers.jpg",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 32,
    title: "Skincare for Humid Weather",
    date: "Apr 19, 2024",
    excerpt:
      "A humid environment mostly has a bad effect on your skin. It increases the amount of bacteria on your skin that can cause acne breakouts.",
    image: "/images/SkinCareHumidWeather.jpg",
    category: "Skincare",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 33,
    title: "Female Scientists of Pakistan",
    date: "Apr 19, 2024",
    excerpt:
      "These pioneering women have not only had substantial influences on their domains but have also challenged fixed ideas and inspired communities.",
    image: "/images/FemaleScientistpakistan.jpg",
    category: "Women Empowerment",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 34,
    title: "Role Of Female In Electronic Media",
    date: "Nov 15, 2023",
    excerpt:
      "Electronic media has changed the way we put away information, entertainment, and news, and its effect on our lives is irrefutable.",
    image: "/images/RoleOfFemalesInElectronicMedia.jpg",
    category: "Media",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 35,
    title: "Famous Female Personalities Of Pakistan",
    date: "Nov 1, 2023",
    excerpt:
      "Pakistan, a nation recognized for its rich account and varied culture, has also been the background for an amazing squad of females.",
    image: "/images/FamousFemalesPersonalities.jpg",
    category: "Women Empowerment",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 36,
    title: "Literacy Rate Of Female In Pakistan",
    date: "Oct 23, 2023",
    excerpt:
      "Pakistan, a nation of rich national heritage and diverse scenery, has made important developments in numerous arenas over the years.",
    image: "/images/LiteracyRateOfFemales.jpeg",
    category: "Education",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 37,
    title: "National Female Heroes of Pakistan",
    date: "Oct 17, 2023",
    excerpt:
      "Pakistan, a country recognized for its ironic history and diverse culture, has formed uncountable personalities who have made important contributions.",
    image: "/images/HeroesOFPakistan.jpg",
    category: "Women Empowerment",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 38,
    title: "Benefits Of Female Empowerment In Pakistan",
    date: "Oct 12, 2023",
    excerpt:
      "Pakistan has viewpoints as a country of rich traditional variety, striking landscapes, and multifaceted olden times.",
    image: "/images/BenifitsOfEmpowermentPakistan.jpg",
    category: "Women Empowerment",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 39,
    title: "Online Business Ideas In Pakistan For Females",
    date: "Sep 30, 2025",
    excerpt:
      "Pakistan is a country of varied chances and unused prospects, particularly when it comes to authorizing women in the occupational world.",
    image: "/images/IdeasFemales.jpg",
    category: "Business",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 40,
    title: "Sher Sisters: A Pride Of Pakistan",
    date: "Oct 3, 2023",
    excerpt:
      "In a world where gender differences endure to keep it up, stories of women breaching social standards and attaining extraordinary achievement stimulate us all.",
    image: "/images/SherSisters.jpg",
    category: "Women Empowerment",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 41,
    title: "First Pakistani Woman to Summit K2 - Samina Baig",
    date: "Sep 18, 2023",
    excerpt:
      "In the world of climbing, successfully climbing the enormous mountains of the Himalayas and Karakoram is a feat that requires not only physical power.",
    image: "/images/Saminabaig.jpg",
    category: "Women Empowerment",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 42,
    title: "Women Empowerment Is Key to Pakistan's Development",
    date: "Sep 7, 2023",
    excerpt:
      "Women's empowerment has had an essential influence on the development and expansion of countries worldwide.",
    image: "/images/PakistansDvevelopment.jpeg",
    category: "Women Empowerment",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 43,
    title: "The Types Of Makeup",
    date: "Sep 7, 2023",
    excerpt:
      "Makeup is all about how you want to present yourself with a new look, whether it's glam, bold, simple, or for a party.",
    image: "/images/Top5TypesofBridalMakeup.jpeg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 44,
    title: "Tips to Create the Perfect Zero Makeup Look",
    date: "Jul 21, 2023",
    excerpt:
      "Makeup is always a priority for women to do and make simply gorgeous that also they want, but with the proper products, it could only happen.",
    image: "/images/ZeroMakeupLook.jpeg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 45,
    title: "Top 10 Inspiring Female Entrepreneurs in Pakistan",
    date: "Jul 19, 2023",
    excerpt:
      "Females are the most important part of society and provide immense services to Pakistan in every field.",
    image: "/images/FemaleEntrepreneures.jpeg",
    category: "Business",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 46,
    title: "Ingredient Used In Chicken Palao Recipe",
    date: "Jul 11, 2023",
    excerpt:
      "Chicken is the most useable meat all over the world, and there are huge dishes that can be made with it.",
    image: "/images/IngredientsPalaoRecipe.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 47,
    title: "The Perfect Meat Shami Kabab Recipe",
    date: "Jul 7, 2023",
    excerpt:
      "You can't try every dish at once, but you may be able to bring that restaurant-style taste home.",
    image: "/images/PerfectMeatShamiKababRecu.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 48,
    title: "Learn About Different Types Of Bobs Cut",
    date: "Jul 4, 2023",
    excerpt:
      "An asymmetrical hair duo can give you a messy or casual look; it's up to you how you want to carry it.",
    image: "/images/MakeUpLook.jpg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 49,
    title: "Learn To Make Malai Boti with Recipe",
    date: "Jun 27, 2023",
    excerpt:
      "In this blog, we will discuss one of the yummiest and mouth-watering dishes, which is Chicken Malai Boti.",
    image: "/images/MalaiBotti.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 50,
    title: "Perfect Meat Shami Kabab Recipe",
    date: "Jun 23, 2023",
    excerpt:
      "Having guests around the corner and you are still confused about what to make for dinner, then here is the best and easiest dish.",
    image: "/images/KababReciepeShamiRecipe.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 51,
    title: "How to Make Biryani Step By Step",
    date: "Jun 19, 2023",
    excerpt:
      "The traditional dishes are more mouthwatering, especially rice, which is a more in-demand food item all over the world.",
    image: "/images/StepByStepBiryani2023.jpeg",
    category: "Cooking",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 52,
    title: "7 Best Hairstyles for Wavy Hair",
    date: "Jun 16, 2023",
    excerpt:
      "Hair is an essential part of the beauty of every human being, but making it look fresh and bouncy every day will be a difficult task.",
    image: "/images/WavyHair.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 53,
    title: "Best Makeup Brands in Pakistan",
    date: "Jun 13, 2023",
    excerpt:
      "The only thing that women do for themselves is buy the best products that enhance their beauty.",
    image: "/images/BestMakeupBrands.jpeg",
    category: "Makeup",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 54,
    title: "How to Make Black Coffee",
    date: "Jun 8, 2023",
    excerpt:
      "Because it gives a refreshing element to the one who drinks it. Some people don't like to drink coffee.",
    image: "/images/Coffee.jpeg",
    category: "Cooking",
    readTime: "3 min read",
    author: "PNY Pink Team",
  },
  {
    id: 55,
    title: "How to Make Haleem Recipe",
    date: "Jun 5, 2023",
    excerpt:
      "Traditional foods are more famous all over Pakistan as they have a different taste and smell, which automatically attracts people.",
    image: "/images/HaleemRecipe.jpeg",
    category: "Cooking",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 56,
    title: "How to Make Achar Gosht",
    date: "May 24, 2023",
    excerpt:
      "Achar Gosht is very delicious in taste and easy to make. You can make it on any occasion, either on Eid or for a dinner party.",
    image: "/images/AcharGosht.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 57,
    title: "Mint Margarita Recipe",
    date: "May 17, 2023",
    excerpt:
      "The refreshing drinks are more for relaxing the mind and giving you a new taste.",
    image: "/images/MintMargettaRecepe.jpeg",
    category: "Cooking",
    readTime: "3 min read",
    author: "PNY Pink Team",
  },
  {
    id: 58,
    title: "The Tasty and Quick Chana Chaat Recipe",
    date: "May 15, 2023",
    excerpt:
      "Chana chaat is very good as a party snack and is mostly made on different occasions like Eid, Ramadan, or any other party.",
    image: "/images/ChannaChaatRecipe.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 59,
    title: "Top 5 Types of Bridal Makeup",
    date: "May 8, 2023",
    excerpt:
      "High-definition makeup is frequently seen on the big screen. The cameras simply capture fine lines and wrinkles on the face.",
    image: "/images/Top5TypesofBridalMakeup.jpeg",
    category: "Makeup",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 60,
    title: "How to Do Soft Glam Makeup",
    date: "May 8, 2023",
    excerpt:
      "It's no secret that many makeup styles weave in and out of acceptance; think cake brows, ultra-matte lips, cold highlighter, and more.",
    image: "/images/GlamMakeup.jpeg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 61,
    title: "10 Must Have Products for a Dewy Makeup Look",
    date: "May 8, 2023",
    excerpt:
      "It's time to say goodbye to splendid matte, dry makeup looks because hydrated, dewy makeup looks make skin healthy-looking.",
    image: "/images/DewyMakeupLook.jpeg",
    category: "Makeup",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 62,
    title: "Most Flattering Haircuts for Oval Faces",
    date: "May 8, 2023",
    excerpt:
      "Increasingly, we always want what we can't have, particularly when it comes to beauty.",
    image: "/images/OvalFaces.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 63,
    title: "Top 6 types of Layers Cut",
    date: "May 8, 2023",
    excerpt:
      "There are numerous means to create different looks and haircuts that comprise layers.",
    image: "/images/LayersCutt.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 64,
    title: "How to Do Bridal Makeup Step by Step Guide",
    date: "May 16, 2023",
    excerpt:
      "Are you approaching your wedding day and worried about your appearance during the ceremony and reception party?",
    image: "/images/BridalMakeup.jpeg",
    category: "Makeup",
    readTime: "6 min read",
    author: "PNY Pink Team",
  },
  {
    id: 65,
    title: "Best Skin Care Products to Use in the Summer",
    date: "May 30, 2023",
    excerpt:
      "Beauty products are items that are designed to enhance or improve one's physical appearance.",
    image: "/images/SkinCareProducts.jpeg",
    category: "Skincare",
    readTime: "5 min read",
    author: "PNY Pink Team",
  },
  {
    id: 66,
    title: "How to Create a Perfect Party Makeup Look",
    date: "May 22, 2023",
    excerpt:
      "All you need for flawless party makeup is a makeup kit filled with the best beauty products and a few handy makeup guidelines.",
    image: "/images/PartyMakeupLook.jpg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 67,
    title: "Top Hairstyles for Summer 2023",
    date: "Jun 6, 2023",
    excerpt:
      "A hairstyle is a way of arranging or styling hair on the head. It can be used to express personal style, cultural identity.",
    image: "/images/TopHairStyles.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 68,
    title: "Short Courses in Lahore For Female",
    date: "May 2, 2023",
    excerpt:
      "Short courses are the smartest way to learn things in a specific time period.",
    image: "/images/ShortCourses.jpeg",
    category: "Education",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 69,
    title: "Appetizing Ingredients Used In Mutton Pulao",
    date: "Aug 1, 2023",
    excerpt:
      "Mutton pulao is a flavorful rice dish that is made with tender mutton pieces and aromatic spices.",
    image: "/images/MuttonPalao.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 70,
    title: "What Are the Types of Makeup",
    date: "Sep 7, 2023",
    excerpt:
      "Look gorgeous is a desire of every woman but applying the right product is always their concern.",
    image: "/images/TypesOfMakeup.jpg",
    category: "Makeup",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 71,
    title: "Perfect Chapli Kabab Recipe",
    date: "Jul 25, 2023",
    excerpt:
      "Do you prefer the kabab as a snack with your tea or as a sandwich in your kid's lunch?",
    image: "/images/ChapliKabab.jpg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 72,
    title: "Ingredients Used In Vegetable Pulao Recipe",
    date: "Aug 18, 2023",
    excerpt:
      "The perfect is when you get the right taste of it, and should be simple and easy to make.",
    image: "/images/VegetablePulao.jpg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 73,
    title: "6 Stunning Balayage Hair Colors to Show",
    date: "Aug 17, 2023",
    excerpt:
      "Haircuts are the first look anyone to describe a personality so make sure that you should carry your hairstyle perfectly.",
    image: "/images/6STUNNINGHaircolours.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 74,
    title: "Traditional Recipe for Zarda (Sweet Rice)",
    date: "Jul 24, 2023",
    excerpt:
      "As you all know that the perfect meal is always feel good for the appetite. And the taste is matters alot.",
    image: "/images/Zarda.jpeg",
    category: "Cooking",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 75,
    title: "Which Hair Style Is Best For Round Face",
    date: "Sep 4, 2023",
    excerpt:
      "The face structure defines your personality and with the perfect haircut, you can enhance your features.",
    image: "/images/Roundface.jpeg",
    category: "Hair",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 76,
    title: "Arabic Mehndi Design",
    date: "Apr 26, 2023",
    excerpt:
      "Arabic Mehndi Designing is a vocational course commonly offered as a diploma or short-term certificate course.",
    image: "/images/Mehndi.jpeg",
    category: "Henna",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
  {
    id: 77,
    title: "Mehndi is not only an important part of our culture",
    date: "Apr 26, 2023",
    excerpt:
      "Mehndi is a form of body art and temporary skin decoration usually drawn on hands or legs.",
    image: "/images/MehndiIsAPart.jpeg",
    category: "Henna",
    readTime: "4 min read",
    author: "PNY Pink Team",
  },
];

// Categories for filter
const categories = [
  "All",
  "Makeup",
  "Skincare",
  "Hair",
  "Beauty",
  "Nail Art",
  "Henna",
  "Cooking",
  "Women Empowerment",
  "Personal Development",
  "Business",
  "Career",
  "Leadership",
  "Health",
  "Media",
  "Education",
];

// ============================================
// MAIN BLOG PAGE
// ============================================
const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(9);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, filteredPosts.length));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white overflow-x-hidden">

      {/* =====================================================
          HERO SECTION WITH BANNER IMAGE
      ===================================================== */}
      <section 
        className="relative overflow-hidden py-20 md:py-24 lg:py-28"
        style={{
          backgroundImage: `url('/images/Banner2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2">
             
            </div>
            <h1 className="mb-3 md:mb-4 text-3xl font-bold text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:text-4xl md:text-5xl lg:text-6xl">
              Latest <span className="text-[#C2366F]">Insights</span> & Stories
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-700 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] sm:text-lg md:text-xl">
              Discover expert tips, trends, and inspiring stories from the world of beauty, skills, and women empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 md:py-4">
        <div className="container mx-auto max-w-7xl px-4 md:px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 lg:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2.5 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#C2366F] text-white shadow-lg shadow-pink-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-[#C2366F]/10 hover:text-[#C2366F]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID - FIXED IMAGE DISPLAY
      ===================================================== */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 md:px-5 lg:px-8">
          <div className="grid gap-5 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Container - Fixed to show full image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 md:top-4 md:left-4 rounded-full bg-[#C2366F] px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium text-white shadow-lg z-10">
                    {post.category}
                  </span>

                  {/* Read Time */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-white backdrop-blur-sm z-10">
                    <Clock size={10} className="md:size-12" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5 lg:p-6">
                  {/* Date & Author */}
                  <div className="mb-2 md:mb-3 flex items-center justify-between text-[10px] md:text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#C2366F] md:size-14" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-[#C2366F] md:size-14" />
                      <span>PNY Team</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-1.5 md:mb-2 line-clamp-2 text-base md:text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#C2366F]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-3 md:mb-4 line-clamp-2 text-xs md:text-sm text-gray-600">
                    {post.excerpt}
                  </p>

                  {/* Read More Link - Small */}
                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2366F] transition-all duration-300 hover:gap-2"
                  >
                    Read More
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#C2366F] to-[#E86D9B] transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button - Small */}
          {visiblePosts < filteredPosts.length && (
            <div className="mt-10 md:mt-12 text-center">
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 rounded-lg bg-[#C2366F] px-5 md:px-6 py-2 md:py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#A62258] hover:shadow-lg"
              >
                Load More
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER SECTION
      ===================================================== */}
      <section className="bg-gradient-to-b from-white to-pink-50/50 py-10 md:py-16 border-t border-gray-100">
        <div className="container mx-auto max-w-4xl px-4 md:px-5 text-center lg:px-8">
          <div className="w-16 md:w-20 h-1 bg-[#C2366F] rounded-full mx-auto mb-4 md:mb-6"></div>
          <h2 className="mb-2 md:mb-3 text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Subscribe to Our <span className="text-[#C2366F]">Newsletter</span>
          </h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600">
            Get the latest beauty tips, trends, and inspiration delivered to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-2 md:gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-200 px-3 md:px-4 py-2 md:py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#C2366F] focus:ring-2 focus:ring-[#C2366F]/20"
            />
            <button className="rounded-lg bg-[#C2366F] px-4 md:px-5 py-2 md:py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#A62258] hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Blogs;