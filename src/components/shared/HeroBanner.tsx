import { useState, useEffect } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true); // Start fading out after 4.5 seconds
    }, 4500);

    setTimeout(() => {
      setShowVideo(false); // Hide video completely after 5 seconds
    }, 5000);
  }, []);

  return (
    <section className="min-h-[80vh] bg-black relative overflow-hidden pt-20 -z-[1]">
      <div className="w-full md:max-w-5xl mx-auto px-8 md:px-4 py-10 text-center justify-center relative z-10">
        {/* MacBook Pro Heading */}
        <div className="-top-16 md:top-4 relative">
          <h2 className="fadeIn text-white text-2xl md:text-2xl font-semibold select-none  ease-out">
            MacBook Pro
          </h2>
        </div>

        {/* Neon Text Effect */}
        <div className="neonText absolute left-1/2 -translate-x-1/2  z-10 pointer-events-none">
          <img
            src="/hero_apple_intelligence_headline.png"
            alt="MacBook Pro with colorful keyboard lighting"
            className=" opacity-80"
          />
        </div>

        {/* Welcome video Mobile */}

        <div className="block md:hidden relative translate-y-[-30px] items-center">
          {showVideo ?
            (

              <video
                src="/video/hero-mobile-video.mp4"
                autoPlay
                muted
                loop
                className={`w-full h-full object-cover transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                  }`}
              />
            ) :
            (<picture
              className="relative z-10 mx-auto">
              <source srcSet="/images/hero_mobile.jpg" type="image/jpg" media="(max-width: 734px)" />
              <source srcSet="/images/hero_mobile.jpg" type="image/jpg" media="(max-width: 1068px)" />
              <source srcSet="/images/hero_mobile.jpg" type="image/jpg" media="(min-width: 0)" />
              <img
                src="/images/hero_mobile.jpg"
                alt="MacBook Pro with colorful keyboard lighting"
                width={600}
                height={200}
                className="w-[90%] h-full object-cover transition-opacity duration-500 opacity-100"
              />
            </picture>
            )
          }

        </div>

        {/* Welcome video desktop */}
        <div className="hidden md:block heroVideo relative mt-32 translate-y-[-30px]">
          {showVideo ?
            (

              <video
                src="/video/hero-video.mp4"
                autoPlay
                muted
                loop
                className={`w-full h-full object-cover transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                  }`}
              />
            ) :
            (<picture
              className="relative z-10 mx-auto">
              <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(max-width: 734px)" />
              <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(max-width: 1068px)" />
              <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(min-width: 0)" />
              <img
                src="/welcome_hero_endframe.jpg"
                alt="MacBook Pro with colorful keyboard lighting"
                width={1200}
                height={675}
                className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
              />
            </picture>
            )
          }

        </div>


        <div className="duration-2000 fade-in-5 fill-mode-forwards ease-in-out opacity-0 " />

      </div>
    </section >
  );
}

