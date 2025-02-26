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
    <section ref={ref} className="w-full mx-auto py-52 bg-black">
      <div className="max-w-[692px] mx-auto">
        <h2 className="font-sf text-[rgb(245,245,247)] text-xl font-semibold uppercase mb-8 leading-5 tracking-[-0.02em] ms-3 max-w-[75%]">
          Macos
        </h2>
        <motion.p
          style={{ scale }}
          className="text-4xl md:text-[64px] font-sf font-semibold text-[#f5f5f7] pb-10 leading-5 tracking-[-0.01em] ms-3 max-w-[75%]"
        >
          Sharp as a Mac.
        </motion.p>
        <div className="text-textGray my-16 ms-3 max-w-[75%] font-sf text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100">
          <p>
            <span className="text-white">Tens of thousands of apps are optimized</span>&nbsp;
            to unlock the full capabilities of macOS — from your go-to productivity
            apps to your favorite games and hardest-working pro&nbsp;apps. And with the M4 family of chips, these apps just soar.
          </p>
        </div>
      </div>
      <HorizontalScroll />
    </section>
  );
};

export default MacosSection;
