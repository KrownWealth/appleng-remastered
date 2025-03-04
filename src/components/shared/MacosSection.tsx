import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalScroll from "./HorizontalScroll";

const MacosSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black">
      <div className="md:w-[692px] lg:w-[980px] mx-auto relative ps-[8.3%] ">
        <h2 className="font-sf text-[rgb(245,245,247)] text-xl font-semibold uppercase mb-8 leading-5 tracking-[-0.02em] max-w-[75%]">
          Macos
        </h2>
        <motion.p
          style={{ scale }}
          className="text-4xl md:text-[64px] lg-[80px] font-sf font-semibold text-[#f5f5f7] pb-10 leading-5 tracking-[-0.01em] max-w-[75%]"
        >
          Sharp as a Mac.
        </motion.p>
        <div className="text-textGray my-16 max-w-[75%] font-sf text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100">
          <p>
            <span className="text-white">Tens of thousands of apps are optimized</span>&nbsp;
            to unlock the full capabilities of macOS — from your go-to productivity
            apps to your favorite games and hardest-working pro&nbsp;apps. And with the M4 family of chips, these apps just soar.
          </p>
        </div>
      </div>
      <HorizontalScroll />
      <div className="max-w-xl mx-auto justify-center items-center flex flex-col gap-8 pt-8">
        <p className="text-textGray text-[17px] font-sf font-semibold justify-center 
        text-center leading-snug tracking-[-0.02em] opacity-100">
          <span className="text-white">Play favorites. </span>Enjoy immersive gaming thanks to the exceptional graphics capabilities,
          gorgeous XDR display, and six-speaker sound system with Spatial Audio. Turn on Game Mode for smoother frame rates.

        </p>
        <p className="text-textGray text-[17px] font-sf font-semibold justify-center 
        text-center leading-snug tracking-[-0.02em] opacity-100">
          Assassin&apos;s Creed Shadows, Control Ultimate Edition, Frostpunk 2, World of Warcraft: Dragonflight, Sid Meier&apos;s Civilization® VII, and more.
        </p>
      </div>
    </section>
  );
};

export default MacosSection;
