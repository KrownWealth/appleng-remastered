import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionHeadingInner from "./SectionHeadingInner";


const PortsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [0.9, 1.1]);

  return (
    <section ref={ref} className="w-full mx-auto pb-12 md:pb-52 bg-black flex flex-col items-center justify-center">
      <SectionHeadingInner chipTitle="Ports and connectivity" title="Make powerful connections." />

      <div className="w-full md:w-[692px] lg:w-[980px] mx-auto relative ps-[8.3%] ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1 * 0.2 }}
          className="text-textGray my-4 md:my-16 w-full md:max-w-[75%] font-sf text-[17px] md:text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100">
          <p>
            <span className="text-white">Tens of thousands of apps are optimized</span>&nbsp;
            MacBook Pro packs an array of ports for connecting high-speed peripherals,
            driving high-resolution displays, or directly offloading SDXC cards.
            <span className="text-white"> Models
              with the M4 Pro and M4 Max chips now include Thunderbolt 5,</span>
            which offers transfer speeds of up to 120Gb/s.50


          </p>
          <p>MacBook Pro also supports both Wi‑Fi 6E51 and Bluetooth 5.3 to connect to the internet and your wireless devices.</p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-12 my-12">

        <picture className="relative ml-auto left-12 md:left-96 h-[59px] md:h-full">
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-1_nmaupy.jpg" type="image/jpg" media="(max-width:734px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-1_nmaupy.jpg" type="image/jpg" media="(max-width:1068px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-1_nmaupy.jpg" type="image/jpg" media="(max-width:0)" />
          <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-1_nmaupy.jpg" alt="display" className="w-full h-full" />
        </picture>

        <picture className="relative mr-auto right-12 md:right-96 h-[59px] md:h-full">
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-2_pkvfrw.jpg" type="image/jpg" media="(max-width:734px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-2_pkvfrw.jpg" type="image/jpg" media="(max-width:1068px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-2_pkvfrw.jpg" type="image/jpg" media="(max-width:0)" />
          <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050762/apple-remastered/images/port-2_pkvfrw.jpg" alt="display" className="w-full h-full" />
        </picture>

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
        className="w-full md:max-w-2xl items-center justify-start my-20 px-12 md:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 font-sf ">
          <div className="border-top">

            <ul className="text-white font-sf text-xl font-semibold justify-start pt-8 
            text-start leading-snug tracking-[-0.011em] opacity-100 list-none"
            >
              <li> Thunderbolt <sup>52</sup></li>
              <li> HDMI</li>
              <li>SDXC</li>
              <li>Headphone jack</li>
              <li> MagSafe</li>
            </ul>
          </div>
          <div className="border-top flex flex-col">
            <p
              className="text-textGray font-sf text-xl font-semibold justify-start 
              text-start leading-snug tracking-[-0.011em] opacity-100 pt-8"
            >
              <span className="text-white">Drive external displays. </span>&nbsp;
              Connect up to two high-resolution external displays with M4 and M4 Pro, or up to four displays with M4 Max.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default PortsSection;
