// components/Carousel.tsx
"use client"
import React, { useState, useEffect } from "react"

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slides = [
    "/porcelain4.jpg",
    "/porcelain3.jpg",
    "/porcelain2.jpg",
    "/porcelain.jpg",
    "/five.jpg",
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full bg-slate-400">
      {/* Carousel wrapper */}
      <div className="relative h-screen overflow-hidden bg-slate-400 rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transform transition duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide} className=" w-50 h-50" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 p-2 bg-gray-800/50 rounded-full text-white shadow-lg hover:bg-gray-800 focus:outline-none"
        onClick={prevSlide}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 p-2 bg-gray-800/50 rounded-full text-white shadow-lg hover:bg-gray-800 focus:outline-none"
        onClick={nextSlide}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="sr-only">Next</span>
      </button>
      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-800 transition duration-300 ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
