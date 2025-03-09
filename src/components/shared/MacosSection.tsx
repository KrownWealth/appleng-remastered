import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "./HorizontalScroll";
import SectionHeadingInner from "./SectionHeadingInner";

const MacosSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black">
      <SectionHeadingInner chipTitle="Macos" title="Sharp as a Mac." />
      <div className="w-full md:w-[692px] lg:w-[980px] mx-auto relative md:ps-[8.3%] ">
        <div className="text-textGray my-16 w-full px-6 md:px-0 md:max-w-[75%] font-sf text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100">
          <p>
            <span className="text-white">Tens of thousands of apps are optimized</span>&nbsp;
            to unlock the full capabilities of macOS — from your go-to productivity
            apps to your favorite games and hardest-working pro&nbsp;apps. And with the M4 family of chips, these apps just soar.
          </p>
        </div>
      </div>
      <HorizontalScroll />
      <div className="w-full px-6 md:max-w-xl mx-auto justify-start items-start
       md:justify-center md:items-center flex flex-col gap-8 pt-8">
        <p className="text-textGray text-[17px] font-sf font-semibold justify-start md:justify-center 
         text-start md:text-center leading-snug tracking-[-0.02em] opacity-100">
          <span className="text-white">Play favorites. </span>Enjoy immersive gaming thanks to the exceptional graphics capabilities,
          gorgeous XDR display, and six-speaker sound system with Spatial Audio. Turn on Game Mode for smoother frame rates.

        </p>
        <p className="text-textGray text-[17px] font-sf font-semibold justify-center 
         text-start md:text-center leading-snug tracking-[-0.02em] opacity-100">
          Assassin&apos;s Creed Shadows, Control Ultimate Edition, Frostpunk 2, World of Warcraft: Dragonflight, Sid Meier&apos;s Civilization® VII, and more.
        </p>
      </div>
    </section>
  );
};

export default MacosSection;
