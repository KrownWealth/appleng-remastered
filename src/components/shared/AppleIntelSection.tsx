import { useRef } from "react";
import AppleIntellScroll from "./AppleIntelScroll";
import PrivacySection from "./PrivacySection";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AppleIntelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [0.9, 1.1]);

  return (
    <section className="w-full mx-auto overflow-hidden text-center relative card-glow">
      {/* Glow Gradient Applied */}
      <div className="mx-auto card w-full md:max-w-6xl">
        <div className="relative w-full md:w-[692px] lg:w-[980px] mx-auto">
          <h2 className="font-sf hidden md:flex md:text-[64px] lg:text-[80px] font-semibold mb-4 leading-[1.05] tracking-[-0.01em]">
            <span className="ai-gradient-text">Built for Apple Intelligence</span>
          </h2>
          <h2 className="flex md:hidden font-sf text-[38px] font-semibold mb-4 leading-[1.05] tracking-[-0.01em] text-center items-center justify-center">
            <span className="ai-gradient-text">Built for <br />  Apple Intelligence</span>
          </h2>
          <p className="text-[#f5f5f7] font-semibold font-sf text-4xl md:text-[64px] lg:text-[80px] max-w-[66.6%] mx-auto ms-[16.6%]">
            Genius at work.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: scale.get() } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-[#86868b] text-[19px] md:text-[21px] 
          leading-[1.38] tracking-[-0.01em] w-full px-8 md:max-w-[40rem] mx-auto"
        >
          <p>
            Apple Intelligence is the personal intelligence system that helps you{" "}
            <span className="text-white">write, express yourself, and get things done effortlessly.</span>{" "}
            With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.
            <sup className="text-[#86868b] font-normal">
              <a href="#" aria-label="footnote 1">1</a>
            </sup>
          </p>
        </motion.div>

        <AppleIntellScroll />
        <PrivacySection />
      </div>
    </section>
  );
};

export default AppleIntelSection;
