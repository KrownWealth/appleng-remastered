import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { slides } from "@/assets/constants/highlightsData"
import SectionHeading from "./SectionHeading"


export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <div className="w-full relative min-h-screen bg-applengGray py-52">
      <SectionHeading title="Get the highlights." />


      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative"
          >
            <div className="px-8 py-12 max-w-7xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <figure className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent px-4">
                      <div className="container relative h-full">
                        <div
                          className={`flex flex-col absolute top-0 left-0 right-0 md:right-auto md:max-w-2xl rounded-lg p-4 md:p-8 shadow-lg gap-2 mx-4 md:mx-0`}
                        >
                          <div className="text-white font-sf font-semibold">
                            {slides[currentIndex].description.split('\n').map((line, i) => (
                              <p key={i} className="text-3xl font-semibold">
                                {line}
                              </p>
                            ))}
                          </div>

                        </div>
                      </div>
                    </div>

                    <img
                      src={slides[currentIndex].image || "/placeholder.svg"}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-1.5 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

        {/* Auto-play Toggle Button */}
        <button
          className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle autoplay"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

    </div>
  )
}

