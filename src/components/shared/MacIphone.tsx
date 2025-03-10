"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeadingInner from "./SectionHeadingInner";



const MacIphone = () => {
  const ref = useRef(null);


  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black">
      <SectionHeadingInner chipTitle="Mac + iPhone" title="Better Together." />

      <div className="flex flex-col md:flex-row justify-around items-center mt-8">
        {/* Left presentation */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <picture className="relative -left-60 md:-left-[26rem] block">
            <source srcSet="/images/mac-iphone.jpg" type="image/jpg" media="(max-width:734px)" />
            <source srcSet="/images/mac-iphone.jpg" type="image/jpg" media="(max-width:1068px)" />
            <source srcSet="/images/mac-iphone.jpg" type="image/jpg" media="(max-width:0)" />
            <img src="/images/mac-iphone.jpg" alt="Mac + iPhone" className="w-auto h-auto max-w-[150%] max-h-[150%] object-cover" />
          </picture>
        </div>

        {/* Right text section */}
        <div className="w-full md:w-1/2 flex flex-col gap-12 ps-6 pe-6 md:pe-0 md:ps-20 mt-6">
          {features.map((feature, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

            return (
              <motion.div
                key={index}
                className="flex flex-col w-full md:w-1/2 space-y-4 border-top custom-border-hidden"
                ref={ref}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >

                <img src={feature.img} alt={feature.title} className="w-12 h-12 object-contain mt-4 md:mt-0" />
                <p className="text-textGray text-[19px] md:text-2xl font-sf">
                  <span className="text-white">{feature.title}</span> {feature.text}
                </p>


              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MacIphone;


const features = [
  {
    img: "/images/icon-mirroring.png",
    title: "Answer calls and texts.",
    text: "Your calls and texts come right to your laptop, so you don't need to switch devices when you're in the zone."
  },
  {
    img: "/images/icon-clipboard.png",
    title: "Universal Clipboard.",
    text: "Copy text, images, photos, and videos on your iPhone and paste to your Mac — or vice versa."
  },
  {
    img: "/images/icon-airdrop.png",
    title: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, and other nearby Apple devices. No Wi-Fi network required."
  }
];