import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "../ui/carousel";

const tabs = [
  { id: "coding", label: "Coding", image: "/images/carousel/carousel-1.jpg" },
  { id: "photo-editing", label: "Photo editing", image: "/images/carousel/carousel-2.jpg" },
  { id: "stem", label: "STEM", image: "/images/carousel/carousel-3.jpg" },
  { id: "business", label: "Business", image: "/images/carousel/carousel-4.jpg" },
  { id: "graphic-design", label: "Graphic design", image: "/images/carousel/carousel-5.jpg" },
  { id: "6d", label: "6D", image: "/images/carousel/carousel-6.jpg" },
  { id: "7d", label: "7D", image: "/images/carousel/carousel-7.jpg" },
  { id: "8d", label: "8D", image: "/images/carousel/carousel-8.jpg" },
  { id: "9d", label: "9D", image: "/images/carousel/carousel-9.jpg" },
  { id: "10d", label: "10D", image: "/images/carousel/carousel-10.jpg" },
];

export default function HorizontalScroll() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);


  // Log the current active tab index
  useEffect(() => {
    if (!api) { return; }

    setCurrentIndex(api.selectedScrollSnap());


    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mt-20 overflow-x-hidden"
    >
      {/* Tab Content */}
      <CarouselContent className="gap-8 mx-auto max-w-4xl">
        <AnimatePresence>
          {tabs.map((tab, index) => (
            <CarouselItem
              key={tab.id}
              className={`md:basis-1/2 lg:basis-[80%] gap-10 relative`}
              style={{ opacity: currentIndex === index ? 1 : 0.5 }}
            >
              <motion.div
                role="tabpanel"
                id={`${tab.id}-panel`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`relative w-full`}
              >
                <div className="relative w-full pt-[62.5%]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div
                        className="absolute inset-0"
                        style={{
                          maskImage: `url(${encodeURI("/images/mask-image.png")})`,
                          WebkitMaskImage: `url(${encodeURI("/images/mask-image.png")})`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                        }}
                      >
                        <img src={tab.image || "/placeholder.svg"} alt={tab.label} className="object-contain" />
                      </div>
                      <img
                        src="/images/mockup-screen.jpg"
                        alt="Laptop frame"
                        className="object-contain pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              <span className="mt-2 me-3 text-textGray text-xs text-center flex justify-end lowercase">{tab.label}</span>
            </CarouselItem>
          ))}
        </AnimatePresence>
      </CarouselContent>

      <div className="relative py-16 max-w-3xl mx-auto">
        <CarouselPrevious />

        {/* <CarouselPrevious onClick={handlePrevious}>
          <ChevronLeft className="h-6 w-6 text-white" />
        </CarouselPrevious> */}

        {/* Tab Navigation */}
        <nav aria-label="Tabs" className="relative flex justify-start gap-8 text-lg mt-10 h-[3em] whitespace-nowrap overflow-x-auto scrollbar-hide">
          <ul className="flex gap-8 pb-2">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                onClick={() => api?.scrollTo(index)}
                className={`relative px-1 transition-colors border-b ${currentIndex === index ? "text-white border-textGray" : "text-gray-400 hover:text-gray-300 border-transparent"}`}
                role="tab"
                aria-selected={currentIndex === index}
                aria-controls={`${tab.id}-panel`}
                data-index={index}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>
        <CarouselNext />

      </div>
    </Carousel>
  );
}
