import { motion, useInView, } from "framer-motion";
import { Plus } from "lucide-react";
import { useRef } from "react";
import SectionHeadingInner from "./SectionHeadingInner";



const DisplaySection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  return (
    <section ref={ref} className="w-full mx-auto pb-52 mt-60 bg-black flex flex-col items-center justify-center">
      <SectionHeadingInner chipTitle=" Display" title="See it all in a new light." />


      <div className="flex items-center justify-center mx-auto aspect-video md:w-[40%] relative -left-20 md:-left-0 mt-0 md:mt-8">
        <figure>
          <picture>
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050735/apple-remastered/images/display-1_epjpst.jpg" type="image/jpg" media="(max-width:734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050735/apple-remastered/images/display-1_epjpst.jpg" type="image/jpg" media="(max-width:1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050735/apple-remastered/images/display-1_epjpst.jpg" type="image/jpg" media="(max-width:0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050735/apple-remastered/images/display-1_epjpst.jpg" alt="display" className="w-full h-full  " />
          </picture>
        </figure>
      </div>





      <div className="lg:w-[980px] flex items-center justify-center mt-20 md:mb-24 px-6 md:ps-0">
        <p className="font-sf text-[19px] md:text-[28px] 
        font-semibold w-full md:max-w-[66.3%] ms-0 md:ms-[8.3%] 
        text-start leading-snug tracking-[.007em] text-textGray">
          Go from the sunniest terrace to the darkest studio with more ease than ever.
          The eye-popping <span className="text-white">Liquid Retina XDR display</span> offers 1,600 nits peak HDR brightness
          and now provides up to 1,000 nits of brightness for SDR content in bright light so you can see what&apos;s
          on your screen more clearly outside. In low-light situations, it dims to 1 nit so you can work comfortably in darker spaces.
        </p>
      </div>

      <div className="relative overflow-hidden z-10 m-2 md:mt-14">
        <div className="flex items-center justify-center mx-auto w-full md:w-[55%] h-[300px] md:h-[480px] ">
          <figure>
            <picture>
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050736/apple-remastered/images/display-2_a83jte.jpg" type="image/jpg" media="(max-width:734px)" />
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050736/apple-remastered/images/display-2_a83jte.jpg" type="image/jpg" media="(max-width:1068px)" />
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050736/apple-remastered/images/display-2_a83jte.jpg" type="image/jpg" media="(max-width:0)" />
              <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050736/apple-remastered/images/display-2_a83jte.jpg" alt="display" className="w-full h-full rounded-[28px]" />
            </picture>
            <figcaption className="flex justify-center md:justify-end text-textGray text-[10px] md:text-sm font-sf py-1">MacBook Pro with nano-texture display</figcaption>
          </figure>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 1 * 0.2 }}
        className="w-full md:max-w-3xl items-center justify-start md:my-20 my-10 px-6 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-28 font-sf">
          <div className="border-top">
            <p className="text-textGray font-sf text-xl font-semibold justify-start pt-8 
        text-start leading-snug tracking-[-0.011em] opacity-100 pb-10">
              <span className="text-white">Standard display.</span>
              Effortlessly read every word and see every vivid pixel thanks to an anti‑reflective coating.</p>
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
        <div className="flex justify-center">
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
