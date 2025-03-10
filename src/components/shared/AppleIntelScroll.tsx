import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";



export default function AppleIntellScroll() {
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
      className="w-full my-20 z-50"
    >
      {/* Tab Content */}
      <CarouselContent className="gap-8 md:gap-16 mx-auto max-w-[364px] h-[262px] md:max-w-4xl">
        <AnimatePresence>
          {slides.map((tab, index) => (
            <CarouselItem
              key={tab.title}
              className={` basis-full md:basis-1/2 lg:basis-[100%] `}
              style={{ opacity: currentIndex === index ? 1 : 0.4 }}
            >
              <picture>
                <source srcSet={tab.img} type="image/jpg" media="(max-width:734px)" />
                <source srcSet={tab.img} type="image/jpg" media="(max-width:1068px)" />
                <source srcSet={tab.img} type="image/jpg" media="(max-width:0)" />
                <img src={tab.img || "/placeholder.svg"} alt={tab.title} className="object-contain rounded-[28px]" />
              </picture>
            </CarouselItem>
          ))}
        </AnimatePresence>
      </CarouselContent>

      <div className="relative pt-16 flex flex-col items-center justify-center ">
        <ul className="flex gap-4 md:gap-8 border-b border-gray-50">
          {slides.map((tab, index) => (
            <li
              key={tab.title}
              onClick={() => api?.scrollTo(index)}
              className={`cursor-pointer relative px-8 md:px-2 py-3 transition-colors text-[19px] md:text-2xl font-normal 
                 leading-[1.21] tracking-[-0.021em] 
                ${currentIndex === index
                  ? "ai-gradient-text border-white"
                  : "text-gray-400 hover:ai-gradient-text border-transparent"
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
        <p className="mt-4 text-[14px] md:text-lg text-center w-full md:max-w-xl text-textGray px-6 md:px-20">{slides[currentIndex]?.description}</p>
      </div>
    </Carousel>
  );
}



const slides = [
  {
    title: "Writing Tools",
    img: "/images/apple-intel/slide-1.jpg",
    description:
      "Writing Tools can proofread your text and rewrite different versions until the tone and wording are just right, and summarize selected text with a click.",
  },
  {
    title: "Siri",
    img: "/images/apple-intel/slide-2.jpg",
    description:
      "With an all-new design, richer language understanding, and the ability to type to Siri whenever it's convenient for you, communicating with Siri is more natural than ever.",
  },
  {
    title: "Priority Message",
    img: "/images/apple-intel/slide-3.jpg",
    description:
      "Get time-sensitive messages at the top of your inbox, like an invitation for a meeting in an hour or a reminder to check in for your flight. And Mail helps you summarize messages in a snap.",
  },
];
