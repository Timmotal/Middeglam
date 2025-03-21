"use client";
import { useState } from "react";

export default function TestimonialSection() {
  // Array of testimonials. Each has text & author.
  const testimonials = [
    {
      text: `What can I say, Middeglam... except that you are the best in the city & the only person I trust to touch my brows. You are truly the Queen & it’s evident that you love your work because you are so passionate about it. Thank you for bringing my brows back to life. They are such an important facial feature because they frame your eyes. So many people neglect their brows. You. Are. Awesome, Middeglam Tran!`,
      author: "PAULA",
    },
    {
      text: `Middeglam is absolutely amazing! She transformed my brows into a masterpiece. Her attention to detail is unmatched, and I feel more confident than ever. Thank you so much!`,
      author: "JOSEPHINE",
    },
    {
      text: `I've been to many brow studios, but none compare to Middeglam's expertise and professionalism. Highly recommend for anyone looking to up their brow game!`,
      author: "CHIAMAKA",
    },
  ];

  // Track which testimonial is displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for prev/next arrows
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Current testimonial data
  const { text, author } = testimonials[currentIndex];

  return (
    <section className="bg-[#EAD6D7] py-12 px-4 flex flex-col items-center justify-center">
      {/* Container */}
      <div className="bg-white max-w-3xl w-full p-8 rounded-md shadow-md text-center relative">
        {/* Title */}
        <h2 className="text-2xl font-bold uppercase tracking-widest text-[#AB696D] mb-6">
          Testimonials
        </h2>

        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-[#AB696D] hover:text-[#AB696D]/80"
          aria-label="Previous testimonial"
        >
          &#10094;
        </button>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-[#AB696D] hover:text-[#AB696D]/80"
          aria-label="Next testimonial"
        >
          &#10095;
        </button>

        {/* Main Testimonial Text */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{text}</p>

        {/* Author Name */}
        <p className="text-[#AB696D] font-semibold text-lg">{author}</p>
      </div>
    </section>
  );
}
