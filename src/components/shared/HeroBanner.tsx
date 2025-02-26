

export default function Hero() {
  return (
    <section className="min-h-[100vh] bg-black relative overflow-hidden pt-32 ">
      <div className="max-w-5xl mx-auto px-4 py-20 text-center justify-center relative z-10">
        {/* MacBook Pro Heading */}
        <div className="top-4 relative">
          <h2 className="fadeIn  text-white text-3xl md:text-4xl font-semibold select-none  ease-out">
            MacBook Pro
          </h2>
        </div>

        {/* Neon Text Effect */}
        <div className="neonText absolute left-1/2 -translate-x-1/2 w-[824px] h-[378px] z-10 pointer-events-none">
          <img
            src="/hero_apple_intelligence_headline.png"
            alt="MacBook Pro with colorful keyboard lighting"
            className=" opacity-80"
          />
        </div>

        {/* Welcome video */}
        <div className="heroVideo relative mt-32 translate-y-[-30px]">
          <picture>
            <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(max-width: 734px)" />
            <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(max-width: 1068px)" />
            <source srcSet="/welcome_hero_endframe.jpg" type="image/jpg" media="(min-width: 0)" />
            <img
              src="/welcome_hero_endframe.jpg"
              alt="MacBook Pro with colorful keyboard lighting"
              width={1200}
              height={675}
              className="relative z-10 mx-auto"
            />
          </picture>

          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex items-center justify-center w-full h-full">
              <video src="/video/hero-video.mp4" autoPlay muted loop className="w-full h-full object-cover" />
            </div>

          </div>

          <div className="duration-2000 fade-in-5 fill-mode-forwards ease-in-out opacity-0 " />
        </div>


      </div>
    </section>
  );
}

