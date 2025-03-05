import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CamMicSpeakerScroll from "./CamMicSpeakerScroll";

const CamMacSpeaker = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [0.9, 1.1]);

  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black flex flex-col items-center justify-center">
      <div className="md:w-[692px] lg:w-[980px] mx-auto relative ps-[8.3%] ">
        <h2 className="font-sf text-[rgb(245,245,247)] text-xl font-semibold 
        uppercase mb-2 leading-5 tracking-[-0.02em] max-w-[75%]">
          Cameras, Mics, and Speakers
        </h2>
        <p

          className="text-4xl md:text-[64px] lg-[80px] font-sf font-semibold
           text-[#f5f5f7] tracking-[-0.01em] leading-[1.05]
           max-w-[83.3%]"
        >
          Make it a command performance.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: scale.get() }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto justify-start 
        items-start flex flex-col gap-4 pt-12"
      >
        <p className="text-[#86868b] text-[17px] leading-snug tracking-[-0.02em] w-[75%]">
          <span className="text-white ">
            Tens of thousands of apps are optimized
          </span>
          &nbsp; to unlock the full capabilities of macOS — from your go-to
          productivity apps to your favorite games and hardest-working
          pro&nbsp;apps. And with the M4 family of chips, these apps just
          soar.
        </p>

        <p
          className="text-textGray text-[17px] font-sf font-semibold 
        leading-snug tracking-[-0.02em] opacity-100 w-[75%]"
        >
          The 12MP Center Stage camera helps you look sharp in any light.
          Together with the advanced mics and speakers, it lets you take charge
          of the meeting from afar.
        </p>
      </motion.div>

      <CamMicSpeakerScroll />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: scale.get() }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl items-center justify-start my-20 "
      >
        <div className="grid grid-cols-2 gap-28 font-sf ">
          <div className="border-top flex flex-col">
            <div className="pt-8 pb-2">
              <source srcSet="/images/mic-speaker-small.png" type="image/png" media="(max-width:734px)" />
              <source srcSet="/images/mic-speaker-small.png" type="image/png" media="(max-width:1068px)" />
              <source srcSet="/images/mic-speaker-small.png" type="image/png" media="(max-width:0)" />
              <img src="/images/mic-speaker-small.png" alt="display" className=" w-12 h-12 object-contain " />
            </div>
            <p className="text-textGray font-sf text-xl font-semibold justify-start   
            text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              <span className="text-white">Studio-quality three-mic array.</span>&nbsp;
              Your voice comes through crystal clear on video calls and recordings while minimizing background noise.
            </p>
          </div>
          <div className="border-top flex flex-col">
            <div className="pt-8 pb-2">
              <source srcSet="/images/mic-speaker-small-2.png" type="image/png" media="(max-width:734px)" />
              <source srcSet="/images/mic-speaker-small-2.png" type="image/png" media="(max-width:1068px)" />
              <source srcSet="/images/mic-speaker-small-2.png" type="image/png" media="(max-width:0)" />
              <img src="/images/mic-speaker-small-2.png" alt="display" className=" w-12 h-12 object-contain " />
            </div>
            <p
              className="text-textGray font-sf text-xl font-semibold justify-start 
              text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              <span className="text-white">Six-speaker sound system.</span>&nbsp;
              Two pairs of force-cancelling woofers
              with two tweeters fill the room with bold, bass-rich sound.
              And Spatial Audio with support for Dolby Atmos creates an immersive sound experience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CamMacSpeaker;
