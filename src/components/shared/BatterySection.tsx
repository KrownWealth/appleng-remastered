import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionHeadingInner from "./SectionHeadingInner";

const BatterySection = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale effect (1 -> 1.2 as you scroll)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });


  return (
    <section className="w-full mx-auto py-52 bg-black">
      <SectionHeadingInner chipTitle="Battery" title="We can do this all day.  And night." />

      <motion.div
        ref={ref}
        className="w-full py-16 overflow-hidden"
        style={{ scale }}
      >
        <picture>
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050733/apple-remastered/images/battery-hero_ocprca.jpg" type="image/jpg" media="(max-width: 734px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050733/apple-remastered/images/battery-hero_ocprca.jpg" type="image/jpg" media="(max-width: 1068px)" />
          <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050733/apple-remastered/images/battery-hero_ocprca.jpg" type="image/jpg" media="(min-width: 0)" />
          <img
            src="https://res.cloudinary.com/dtainagml/image/upload/v1742050733/apple-remastered/images/battery-hero_ocprca.jpg"
            alt="MacBook Pro with colorful keyboard lighting"
            className="w-full h-[600px] md:h-auto object-cover"
          />
        </picture>
      </motion.div>

      <div className="max-w-[692px] mx-auto mt-12 px-6 md:px-0">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1 * 0.2 }}
          className="text-textGray font-sf text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100 pb-10">
          The new MacBook Pro has the <span className="text-white">
            longest battery life ever in a Mac </span>— up to 24 hours — and supports fast charge,
          allowing it to charge up to 50 percent in just 30 minutes.49 All models provide the same
          performance whether they&apos;re plugged in or not, so you can spend more time thinking about
          an outlet for your passion, not your laptop.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 font-sf">
          {[
            { speed: '24 hrs', comparison: 'battery life', footnote: '3,6' },
            { speed: '14 more', comparison: 'hours than Intel-based MacBook Pro', footnote: '5' },

          ].map((metric, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index} className="border-top py-4">
              <p className="text-textGray text-xl">Up to</p>
              <h3 className="font-sf text-white text-3xl font-semibold">{metric.speed}</h3>
              <p className="text-textGray text-xl">than {metric.comparison}
                <sup className="underline"><a href="">{metric.footnote}</a></sup>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatterySection;
