import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "../ui/carousel";

const tabs = [
  { id: "xcode", label: "Coding", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051246/apple-remastered/images/carousel-1_iz6bzj.jpg" },
  { id: "photo-editing", label: "Photo Editing", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051247/apple-remastered/images/carousel-2_xltijl.jpg" },
  { id: "stem", label: "STEM", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051250/apple-remastered/images/carousel-3_fszkjw.jpg" },
  { id: "business", label: "Business", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051251/apple-remastered/images/carousel-4_szrhpf.jpg" },
  { id: "graphic-design", label: "Graphic design", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051254/apple-remastered/images/carousel-5_expgc8.jpg" },
  { id: "3d-animation-and-design", label: "3D animation and design", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051333/apple-remastered/images/carousel-6_stxa8m.jpg" },
  { id: "music-production", label: "Music production", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051301/apple-remastered/images/carousel-7_ufy6jq.jpg" },
  { id: "video-editing", label: "Video editing", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051334/apple-remastered/images/carousel-8_hejdmg.jpg" },
  { id: "gaming", label: "Gaming", image: "https://res.cloudinary.com/dtainagml/image/upload/v1742051337/apple-remastered/images/carousel-9_dvbbe0.jpg" },
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

      <div className="relative pt-16 w-full px-6 md:px-0 md:max-w-4xl mx-auto flex items-start md:items-center">
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
