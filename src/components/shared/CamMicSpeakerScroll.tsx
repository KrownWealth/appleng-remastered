import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";


const cld = new Cloudinary({
  cloud: {
    cloudName: "dtainagml",
  },
});



export default function CamMicSpeakerScroll() {
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


  return (
    <Carousel
      setApi={setApi}
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full my-20 "
    >
      {/* Tab Content */}
      <CarouselContent className="gap-16 mx-auto max-w-4xl">
        <AnimatePresence>
          {slides.map((tab, index) => (
            <CarouselItem
              key={tab.title}
              className={`md:basis-1/2 lg:basis-[100%] `}
              style={{ opacity: currentIndex === index ? 1 : 0.4 }}
            >
              <picture>
                <AdvancedImage
                  cldImg={cld.image(tab.img || "/placeholder.svg")}
                  className="object-contain rounded-[28px]"
                  loading="lazy"
                />
              </picture>
            </CarouselItem>
          ))}
        </AnimatePresence>
      </CarouselContent>

      <div className="relative pt-16 flex flex-col items-center justify-center">
        <ul className="flex gap-8 border-b border-gray-50">
          {slides.map((tab, index) => (
            <li
              key={tab.title}
              onClick={() => api?.scrollTo(index)}
              className={`cursor-pointer relative px-2 py-3 transition-colors text-2xl font-normal 
                 leading-[1.21] tracking-[-0.021em] 
                ${currentIndex === index
                  ? "ai-gradient-text border-white"
                  : "text-gray-400 hover:text-gray-300 border-transparent"
                }`}
              role="tab"
              aria-selected={currentIndex === index}
              aria-controls={`${tab.title}-panel`}
              data-index={index}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        {/* Description for the active slide */}
        <p className="mt-4 text-lg text-center max-w-xl text-textGray px-20">{slides[currentIndex]?.description}</p>
      </div>
    </Carousel>
  );
}



const slides = [
  {
    title: "Center Stage",
    img: "apple-remastered/images/micspeaker-1_zpeuwz",
    description: "Center Stage keeps you centered in the frame as you move around."
  },
  {
    title: "Desk View ",
    img: "apple-remastered/images/micspeaker-2_q609fu",
    description: "Desk View lets you share your workspace, adding a whole new dimension to make your video calls more engaging."
  },

];
