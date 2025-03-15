import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PrivacySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });


  return (
    <section ref={ref} className='bg-applengGray w-full flex flex-col items-center justify-center relative padding-block z-[-1]'>
      <div className='flex flex-col w-full px-6 md:px-0 lg:w-[980px] mx-auto items-start
       md:items-center justify-start md:justify-center relative
      after:absolute after:content-[""] after:bg-applengGray text-start md:text-center after:z-[-1] after:inset-0 '>
        <div className="mb-6 block relative w-[54px] h-[80px] md:w-[74px] md:h-[104px] ">
          <picture>
            <source srcSet="/images/apple-intel/privacy-endframe.jpg" type="image/jpg" media="(max-width:734px)" />
            <source srcSet="/images/apple-intel/privacy-endframe.jpg" media="(max-width:1068px)" />
            <source srcSet="/images/apple-intel/privacy-endframe.jpg" media="(max-width:0)" />
            <img src="/images/apple-intel/privacy-endframe.jpg" alt="" />
          </picture>


        </div>

        <h3 className="font-sf text-[#f5f5f7] text-[28px] md:text-[56px] font-semibold
         leading-none tracking-tighter w-full md:max-w-[50%] ">
          Great powers come with
          <span className="inline-block whitespace-nowrap ">
            great&nbsp;
            <span className="ai-gradient-text inline-flex whitespace-nowrap">privacy.</span>
          </span>
        </h3>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 1 * 0.2 }}
          className="mt-14 flex flex-col md:flex-row text-textGray items-start justify-center gap-6 md:gap-0 ">
          <p className="font-sf text-[19px] md:text-[21px] w-full md:max-w-[33.3%] md:ms-[8.3%] text-start leading-snug tracking-[.001em]">
            Apple Intelligence is <span className="text-white">designed to protect your privacy at every step.</span>
            It&apos;s integrated into the core of your Mac through on-device processing.
            So it&aos;s aware of your personal information without collecting your personal information.
          </p>

          <p className="font-sf text-[19px] md:text-[21px] w-full md:max-w-[33.3%] md:ms-[8.3%] text-start leading-snug tracking-[.001em]">
            And with <span className="text-white">groundbreaking Private Cloud Compute</span>, <br /> Apple
            Intelligence can draw on larger server-based models,
            running on Apple silicon, to handle more complex requests for you while protecting your privacy.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default PrivacySection
