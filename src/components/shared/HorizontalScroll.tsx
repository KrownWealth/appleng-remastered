import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "../ui/carousel";

const tabs = [
  { id: "xcode", label: "Coding", image: "/images/carousel/carousel-1.jpg" },
  { id: "photo-editing", label: "Photo Editing", image: "/images/carousel/carousel-2.jpg" },
  { id: "stem", label: "STEM", image: "/images/carousel/carousel-3.jpg" },
  { id: "business", label: "Business", image: "/images/carousel/carousel-4.jpg" },
  { id: "graphic-design", label: "Graphic design", image: "/images/carousel/carousel-5.jpg" },
  { id: "3d-animation-and-design", label: "3D animation and design", image: "/images/carousel/carousel-6.jpg" },
  { id: "music-production", label: "Music production", image: "/images/carousel/carousel-7.jpg" },
  { id: "video-editing", label: "Video editing", image: "/images/carousel/carousel-8.jpg" },
  { id: "gaming", label: "Gaming", image: "/images/carousel/carousel-9.jpg" },
];

export default function HorizontalScroll() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) { return; }

    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < tabs.length - 1;

  return (
    <Carousel
      setApi={setApi}
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mt-20 "
    >
      {/* Tab Content */}
      <CarouselContent className="gap-16 mx-auto max-w-4xl">
        <AnimatePresence>
          {tabs.map((tab, index) => (
            <CarouselItem
              key={tab.id}
              className={`md:basis-1/2 lg:basis-[100%]`}
              style={{ opacity: currentIndex === index ? 1 : 0.4 }}
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
              <span className="mt-2 me-3 text-textGray text-sm text-center flex justify-end lowercase">{tab.label}</span>
            </CarouselItem>
          ))}
        </AnimatePresence>
      </CarouselContent>

      <div className="relative pt-16 max-w-4xl mx-auto flex items-center">
        {hasPrevious && <CarouselPrevious />}

        {/* Tab Navigation */}
        <ScrollArea className="whitespace-nowrap border-b border-r border-textGray pb-6 flex-1"
          style={{
            borderLeft: hasPrevious ? "1px solid #E0E0E0" : "none",
            borderRight: hasNext ? "1px solid #E0E0E0" : "none"
          }}>
          <ul className="flex gap-8 w-max">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                onClick={() => api?.scrollTo(index)}
                className={`relative px-1 transition-colors text-2xl
                  ${currentIndex === index ? "text-white border-textGray" :
                    "text-gray-400 hover:text-gray-300 border-transparent"
                  }`}
                role="tab"
                aria-selected={currentIndex === index}
                aria-controls={`${tab.id}-panel`}
                data-index={index}
              >
                {tab.label}
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {hasNext && <CarouselNext />}
      </div>
    </Carousel>
  );
}
