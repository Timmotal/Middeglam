"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "What can I say, Lisa...except that you are the best in the city & the only person I trust to touch my brows.",
    author: "Sharon",
  },
  {
    text: "Lisa is truly a queen! Her passion and skill are unmatched. My brows have never looked better!",
    author: "Jessica",
  },
  {
    text: "A true artist! Lisa transformed my brows, and I couldn't be happier. Highly recommend her!",
    author: "Monica",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>

      <div className="testimonial">
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        <h4 className="testimonial-author">- {testimonials[currentIndex].author}</h4>
      </div>

      <button className="arrow right" onClick={nextSlide}>&#10095;</button>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
