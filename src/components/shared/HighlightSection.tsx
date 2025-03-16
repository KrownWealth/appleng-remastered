import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { slides } from "@/assets/constants/highlightsData";
import SectionHeading from "./SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import { Play } from "lucide-react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, AdvancedImage } from "@cloudinary/react";


const cld = new Cloudinary({
  cloud: {
    cloudName: "dtainagml",
  },
});

export default function Highlights() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

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
    if (!api || isPlaying === false) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < slides.length) {
          api?.scrollTo(nextIndex);
          return nextIndex;
        } else {
          stopAutoplay();
          setHasPlayedOnce(true);
          return prevIndex;
        }
      });
    }, 7000); // 7 seconds per slide

    return () => clearInterval(intervalRef.current!);
  }, [api, isPlaying]);


  useEffect(() => {
    // Start autoplay on page load but only once
    if (!hasPlayedOnce) {
      setIsPlaying(true);
    }
  }, [hasPlayedOnce]);

  const stopAutoplay = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current!);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => {
      if (!prev) {
        setCurrentIndex(0);
        api?.scrollTo(0);
        setHasPlayedOnce(true);
      }
      return !prev;
    });
  };


  return (
    <section className="w-full relative min-h-screen bg-applengGray py-24 md:py-52">
      <SectionHeading paddingbottom="pb-4" title="Get the highlights." />
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
          <CarouselContent className="pb-32 w-full md:max-w-5xl mx-auto lg:gap-16 md:gap-8">
            <AnimatePresence>
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className={`md:basis-full lg:basis-[100%] aspect-square relative 
                    md:aspect-video items-center justify-center`}>
                  <div className="absolute inset-0 md:px-4">
                    <div className="container relative h-full">
                      <div className={`flex flex-col absolute top-0 left-0 bg-black/20
                         right-0 md:right-auto md:max-w-2xl rounded-lg p-4 md:p-8 shadow-lg gap-1 md:mx-0`}>
                        <div className="text-white font-sf font-semibold">
                          {slide.description.split('\n').map((line, i) => (
                            <p key={i} className="text-[19px] md:text-[21px] lg:text-[28px] font-semibold">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {slide.video ? (
                    <AdvancedVideo
                      autoPlay
                      muted
                      playsInline
                      loop={false}
                      onEnded={() => setIsVideoLoaded(true)}
                      cldVid={cld.video(slide.video)}
                      className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? "opacity-100" : "opacity-100"
                        }`}
                    />
                  ) : (
                    <AdvancedImage
                      cldImg={cld.image(slide.image || "placeholder")}
                      className="w-full h-full object-cover rounded-none md:rounded-[28px]"
                      loading="lazy"
                    />
                  )}
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

            <button
              onClick={togglePlay}
              className="ml-2 p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle autoplay">
              <Play className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
