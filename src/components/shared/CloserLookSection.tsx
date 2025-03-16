import { motion, AnimatePresence } from "framer-motion";
import { closerLookSlides } from "@/assets/constants/closerLookData";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";


const cld = new Cloudinary({
  cloud: {
    cloudName: "dtainagml",
  },
});



export default function CloserLookSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


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
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          timeoutRef.current = setTimeout(() => {
            setIsLoaded(true);
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handlePrev = () => {
    if (api) api.scrollPrev();
  };

  const handleNext = () => {
    if (api) api.scrollNext();
  };


  return (
    <section className="w-full relative bg-back py-24 md:py-52">
      <SectionHeading title="Take a closer look" />

      <div
        className={`loader relative inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-700
           ${isLoaded ? "" : "bg-black/50 opacity-50 "}`}
      >
        <div className="loader-background absolute inset-0 bg-black/50 opacity-0"></div>

        {/* Loader Content */}
        <div className={`loader-content absolute z-20 flex flex-col items-center justify-center text-center mt-10 w-[90%] md:w-[20rem]
          ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100 backdrop-blur-sm"}`}>
          <p className="loader-headline text-[16px] md:text-2xl font-medium -mt-20">
            <span className="loader-headline-text hidden md:block text-white">Click and turn to explore <br /> MacBook Pro.</span>
            <span className="loader-headline-text block md:hidden text-white">
              Tap and turn <br className="small" />
              to explore MacBook&nbsp;Pro.
            </span>
          </p>
          <div
            className="loader-progress w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden"
            role="progressbar"
            aria-label="Loading MacBook Pro gallery"
          >
            <div
              className="loader-progress-indicator h-full bg-white rounded-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(${progress - 100}%)` }}
            ></div>
          </div>
        </div>

        {/* Carousel Component */}
        <Carousel
          setApi={setApi}
          ref={carouselRef}
          className={`w-full max-w-xl md:max-w-3xl lg:max-w-xl mx-auto content-wrapper transition-opacity duration-1000 ease-in-out 
        ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <CarouselContent >
            <AnimatePresence>
              {closerLookSlides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className={`basis-full relative items-center justify-center `}>
                  <AdvancedImage
                    cldImg={cld.image(slide.image || "placeholder")}
                    className="w-full h-full object-cover rounded-none md:rounded-[28px]"
                    loading="lazy"
                  />
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>

          <div className="absolute -bottom-40 lg:-bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <motion.h2
              className="text-white text-center mb-4 text-[10px] font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              MacBook Pro 16" in Space Black
            </motion.h2>

            {/* make this sticky on scroll & back to it ositio whe reach the  bottom of the page*/}
            <div className="flex items-center gap-4 bg-applengGray px-4 py-2 rounded-full shadow-[inset_0_0_1px_rgba(232,232,237,0.11)]">
              <button
                className="p-2 rounded-full transition-colors"
                aria-label="Previous slide"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>

              {closerLookSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    api?.scrollTo(index);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}


              <button
                className="p-2 rounded-full transition-colors"
                aria-label="Next slide"
                onClick={handleNext}
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>


          </div>
        </Carousel>
      </div>


    </section >
  );
}
