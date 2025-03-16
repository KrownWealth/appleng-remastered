import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";


const cld = new Cloudinary({
  cloud: {
    cloudName: "dtainagml",
  },
});

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);


  return (
    <section className="min-h-[80vh] bg-black relative overflow-hidden pt-20 -z-[1]">
      <div className="w-full md:max-w-5xl mx-auto px-8 md:px-4 py-10 text-center justify-center relative z-10">
        {/* MacBook Pro Heading */}
        <div className="-top-16 md:top-4 relative">
          <h2 className="fadeIn text-white text-2xl md:text-2xl font-semibold select-none ease-out">
            MacBook Pro
          </h2>
        </div>

        {/* Neon Text Effect */}
        <div className="neonText absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <img
            src="/hero_apple_intelligence_headline.png"
            alt="MacBook Pro with colorful keyboard lighting"
            className="opacity-80"
            loading="lazy"
          />
        </div>

        {/* Welcome video Mobile */}
        <div className="block md:hidden relative translate-y-[-30px] items-center -mt-8">
          <AdvancedVideo
            autoPlay
            muted
            playsInline
            loop={false}
            onEnded={() => setIsVideoLoaded(true)}
            cldVid={cld.video("apple-remastered/videos/hero-mobile-video_lvvqjo")}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? "opacity-100" : "opacity-100"}`}
          />
        </div>

        {/* Welcome video desktop */}
        <div className="hidden md:block heroVideo relative mt-16 translate-y-[-30px]">
          <AdvancedVideo
            autoPlay
            muted
            playsInline
            loop={false}
            onEnded={() => setIsVideoLoaded(true)}
            cldVid={cld.video("apple-remastered/videos/hero-video_lvfsm4").quality("auto")}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-100"}`}
          />
        </div>

        <div className="duration-2000 fade-in-5 fill-mode-forwards ease-in-out opacity-0" />
      </div>
    </section>
  );
}
