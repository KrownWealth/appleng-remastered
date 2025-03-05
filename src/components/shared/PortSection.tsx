import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";


const PortsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [0.9, 1.1]);

  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black flex flex-col items-center justify-center">
      <div className="md:w-[692px] lg:w-[980px] mx-auto relative ps-[8.3%] ">
        <h2 className="font-sf text-[rgb(245,245,247)] text-xl font-semibold uppercase mb-2 leading-5 tracking-[-0.02em] max-w-[75%]">
          Ports and connectivity

        </h2>
        <p

          className="text-4xl md:text-[64px] lg-[80px] font-sf font-semibold
           text-[#f5f5f7] tracking-[-0.01em] leading-[1.05]
           max-w-[83.3%]"
        >
          Make powerful connections.
        </p>
        <div className="text-textGray my-16 max-w-[75%] font-sf text-xl font-semibold justify-start 
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
        </div>
      </div>

      <div className="w-full flex flex-col gap-12 my-12">
        <div className="relative  ml-auto left-96">
          <source srcSet="/images/port-1.jpg" type="image/jpg" media="(max-width:734px)" />
          <source srcSet="/images/port-1.jpg" type="image/jpg" media="(max-width:1068px)" />
          <source srcSet="/images/port-1.jpg" type="image/jpg" media="(max-width:0)" />
          <img src="/images/port-1.jpg" alt="display" className="w-full h-full" />
        </div>

        <div className="relative  mr-auto right-96">
          <source srcSet="/images/port-2.jpg" type="image/jpg" media="(max-width:734px)" />
          <source srcSet="/images/port-2.jpg" type="image/jpg" media="(max-width:1068px)" />
          <source srcSet="/images/port-2.jpg" type="image/jpg" media="(max-width:0)" />
          <img src="/images/port-2.jpg" alt="display" className="w-full h-full" />
        </div>
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
        className="max-w-2xl items-center justify-start my-20 "
      >
        <div className="grid grid-cols-2 gap-28 font-sf ">
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
