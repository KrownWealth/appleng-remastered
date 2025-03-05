import { motion, useScroll, useTransform, useInView, } from "framer-motion";
import { Plus } from "lucide-react";
import { useRef } from "react";



const DisplaySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);


  return (
    <section className="w-full mx-auto pb-52 mt-60 bg-black flex flex-col items-center justify-center">
      <div className="md:w-[692px] lg:w-[980px] mx-auto ps-[8.3%]">
        <h2 className="font-sf text-[rgb(245,245,247)] text-xl font-semibold
         uppercase mb-8 leading-5 tracking-[-0.02em] text-start">
          Display
        </h2>
        <motion.p
          style={{ scale }}
          className="text-4xl md:text-[64px] lg-[80px] font-sf 
          font-semibold text-[#f5f5f7] pb-10 leading-5 tracking-[-0.01em]"
        >
          See it all in a new light.
        </motion.p>
      </div>


      <div className="relative overflow-hidden z-10 mt-14">
        <div className="flex items-center justify-center mx-auto w-3/4">
          <figure>
            <picture>
              <source srcSet="/images/display-1.jpg" type="image/jpg" media="(max-width:734px)" />
              <source srcSet="/images/display-1.jpg" type="image/jpg" media="(max-width:1068px)" />
              <source srcSet="/images/display-1.jpg" type="image/jpg" media="(max-width:0)" />
              <img src="/images/display-1.jpg" alt="display" className="w-full h-full  " />
            </picture>
          </figure>
        </div>




      </div>

      <div className="lg:w-[980px] flex items-center justify-center mt-20 mb-24">
        <p className="font-sf text-[28px] 
        font-semibold max-w-[66.3%] ms-[8.3%] 
        text-start leading-snug tracking-[.007em] text-textGray">
          Go from the sunniest terrace to the darkest studio with more ease than ever.
          The eye-popping <span className="text-white">Liquid Retina XDR display</span> offers 1,600 nits peak HDR brightness
          and now provides up to 1,000 nits of brightness for SDR content in bright light so you can see what&apos;s
          on your screen more clearly outside. In low-light situations, it dims to 1 nit so you can work comfortably in darker spaces.
        </p>
      </div>

      <div className="relative overflow-hidden z-10 mt-14">
        <div className="flex items-center justify-center mx-auto w-[55%] ">
          <figure>
            <picture>
              <source srcSet="/images/display-2.jpg" type="image/jpg" media="(max-width:734px)" />
              <source srcSet="/images/display-2.jpg" type="image/jpg" media="(max-width:1068px)" />
              <source srcSet="/images/display-2.jpg" type="image/jpg" media="(max-width:0)" />
              <img src="/images/display-2.jpg" alt="display" className="w-full h-full rounded-[28px]" />
            </picture>
            <figcaption className="flex justify-end text-textGray text-sm font-sf py-1">MacBook Pro with nano-texture display</figcaption>
          </figure>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: scale.get() } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl items-center justify-start my-20 ">
        <div className="grid grid-cols-2 gap-28 font-sf">
          <div className="border-top">
            <p className="text-textGray font-sf text-xl font-semibold justify-start pt-8 
        text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"><span className="text-white">Standard display.</span> Effortlessly read every word and see every vivid pixel thanks to an anti‑reflective coating.</p>
          </div>
          <div className="border-top">
            <p className="text-textGray font-sf text-xl font-semibold justify-start pt-8
        text-start leading-snug tracking-[-0.011em] opacity-100 pb-10">
              <span className="text-white">Nano-texture display.</span>
              Choose this option to reduce glare and reflections
              in bright spaces — whether inside or out — while maintaining an excellent viewing experience.
            </p>
          </div>
        </div>

      </motion.div>

      {/* sticky Button */}
      {/* Sticky Button */}
      <div className="w-full flex justify-center relative">
        <div className="sticky top-20 flex justify-center">
          <button className="flex items-center justify-center gap-4 bg-applengGray px-4 py-4 rounded-full shadow-[inset_0_0_1px_rgba(232,232,237,0.11)]">
            <span className="text-white text-sm font-medium">Nano-texture display.</span>
            <div className="bg-blue-500 rounded-full p-1">
              <Plus className="w-4 h-4 text-applengGray" />
            </div>
          </button>
        </div>
      </div>


    </section>
  )
}

export default DisplaySection
