import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/assets/constants/highlightsData";
import SectionHeading from "./SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { Play } from "lucide-react";

export default function Highlights() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);



  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (isPlaying) {
      // Start the interval to change the slide every 3 seconds
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1; // Calculate the next index
          if (nextIndex < slides.length) {
            api?.scrollTo(nextIndex); // Navigate to the next slide
            return nextIndex; // Update currentIndex
          } else {
            // Stop autoplay when reaching the end
            stopAutoplay();
            return prevIndex; // Return the current index if at the last slide
          }
        });
      }, 3000); // Adjust timing as needed
    }

    return () => {
      clearInterval(intervalRef.current!); // Clean up on unmount or when isPlaying changes
    };
  }, [isPlaying, api]);

  const stopAutoplay = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current!);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) {
      setCurrentIndex(0);
      api?.scrollTo(0);
    }
  };


  return (
    <div className="w-full relative min-h-screen bg-applengGray py-24 md:py-52">
      <SectionHeading title="Get the highlights." />
      <div className="relative overflow-hidden">
        <Carousel
          setApi={setApi}
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="pt-8 pb-32 w-full md:max-w-5xl mx-auto lg:gap-16 md:gap-8">
            <AnimatePresence>
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className={`md:basis-full lg:basis-[100%] aspect-square relative 
                  md:aspect-video items-center justify-center`}>
                  <motion.div
                    role="tabpanel"
                    id={`${slide.id}-panel`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 "
                  >
                    <div className="absolute inset-0 md:px-4">
                      <div className="container relative h-full">
                        <div
                          className={`flex flex-col absolute top-0 left-0 right-0 md:right-auto md:max-w-2xl 
                            rounded-lg p-4 md:p-8 shadow-lg gap-2 md:mx-0`}
                        >
                          <div className="text-white font-sf font-semibold">
                            {slides[currentIndex].description.split('\n').map((line, i) => (
                              <p key={i} className="text-[21px] md:text-3xl font-semibold">
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
                      className="w-full h-full object-cover rounded-none md:rounded-[28px]"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>


          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="p-4 md:p-6 bg-white/10 rounded-full flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-colors
                 ${index === currentIndex ? "bg-white w-10 h-1.5" : "bg-white/30 w-2 h-2"}`}
                  aria-label={`Go to slide ${index + 1}`}

                />
              ))}
            </div>


            {/* Auto-play Toggle Button */}
            <button
              onClick={togglePlay}
              className="ml-2 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle autoplay">
              <Play className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </Carousel>
      </div>

    </div>
  );
}
