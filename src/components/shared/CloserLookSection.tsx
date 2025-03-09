"use client"

import { motion } from "framer-motion"
import { closerLookSlides } from "@/assets/constants/closerLookData"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import SectionHeading from "./SectionHeading"


export default function CloserLookSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + closerLookSlides.length) % closerLookSlides.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % closerLookSlides.length)
  }

  return (
    <section className="w-full relative min-h-screen bg-back py-24 md:py-52">
      <SectionHeading title="Take a closer look" />

      <div className="w-full md:max-w-7xl mx-auto px-6 md:px-8">

        <div className="relative md:aspect-[12/4] ">
          {closerLookSlides.map((imageUrl, index) => (
            <motion.img
              key={index}
              src={imageUrl.image}
              alt={`MacBook Pro View ${index + 1}`}
              className={`w-full h-full object-contain absolute ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentIndex ? 1 : 0, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
          <motion.h2
            className="text-white text-center mb-4 text-[10px] font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            MacBook Pro 16" in Space Black
          </motion.h2>

          <div className="flex items-center gap-4 bg-white/10 px-4 py-2
           rounded-full shadow-[inset_0_0_1px_rgba(232,232,237,0.11)]">

            <button
              onClick={handlePrevious}
              className="p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#f5f5f5]" />
            </button>

            {closerLookSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <button
              onClick={handleNext}
              className="p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Product Title */}

      </div>
    </section>
  )
}

