import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import SectionHeadingInner from "./SectionHeadingInner";




const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [0.9, 1.1]);
  return (
    <section ref={ref} className="w-full mx-auto pb-52 bg-black flex flex-col items-center justify-center">
      <SectionHeadingInner chipTitle="Security" title="No compromises." />
      <div className="w-full md:w-[692px] lg:w-[980px] mx-auto relative px-8 md:ps-[8.3%] ">

        <div className="text-textGray md:my-16 md:w-[75%] font-sf text-xl font-semibold justify-start 
        text-start leading-snug tracking-[-0.011em] opacity-100">
          <p>
            <span className="text-white">Tens of thousands of apps are optimized</span>&nbsp;
            to unlock the full capabilities of macOS — from your go-to productivity
            apps to your favorite games and hardest-working pro&nbsp;apps. And with the M4 family of chips, these apps just soar.
          </p>
        </div>
      </div>


      <div className="flex items-center justify-center mx-auto w-[342px] h-[210px] md:w-3/4 mb-32 mt-8 md:mt-20">
        <picture>
          <source srcSet="/images/security-2.jpg" type="image/jpg" media="(max-width:734px)" />
          <source srcSet="/images/security-2.jpg" type="image/jpg" media="(max-width:1068px)" />
          <source srcSet="/images/security-2.jpg" type="image/jpg" media="(max-width:0)" />
          <img src="/images/security-2.jpg" alt="display" className="w-full h-full  object-cover" />
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
        className="w-full md:max-w-2xl mx-auto justify-start 
        items-start flex flex-col gap-4 py-16 px-12"
      >
        <p className="text-[#86868b] text-[17px] leading-snug tracking-[-0.02em] w-full md:w-[75%]">
          <span className="text-white ">
            Security starts with Apple silicon
          </span>&nbsp;
          and extends to the macOS architecture.
          This deep integration of hardware and software along with automatic software
          updates helps keep MacBook Pro stable and protected for the long term. The security
          architecture also powers features such as Touch ID, Find My, and advanced defenses
          that protect against viruses and malware.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: scale.get() }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:max-w-2xl mx-auto justify-start items-start my-4 px-12 md:px-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14 font-sf ">
          <div className="border-top flex flex-col">
            <div className="pt-8 pb-2">
              <picture>
                <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:0)" />
                <img src="/images/touch-id.png" alt="display" className=" w-12 h-12 object-contain " />
              </picture>
            </div>
            <p className="text-textGray font-sf text-[17px]  font-semibold justify-start   
            text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              <span className="text-white">Touch ID. </span>&nbsp;
              Unlock your Mac, sign in to apps, and make secure payments with your fingertip. The Secure Enclave keeps your fingerprint data safe.


            </p>
          </div>

          <div className="border-top flex flex-col">
            <div className="pt-8 pb-2">
              <picture>
                <source srcSet="/images/find-my.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/find-my.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/find-my.png" type="image/png" media="(max-width:0)" />
                <img src="/images/find-my.png" alt="display" className=" w-12 h-12 object-contain " />
              </picture>
            </div>
            <p
              className="text-textGray font-sf text-[17px]  font-semibold justify-start 
              text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              <span className="text-white">Find My.</span>&nbsp;
              Locate your misplaced MacBook Pro and remotely lock or erase it if needed.
            </p>
          </div>

          <div className="border-top flex flex-col">
            <div className="pt-8 pb-2">
              <picture>
                <source srcSet="/images/filefault.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/filefault.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/filefault.png" type="image/png" media="(max-width:0)" />
                <img src="/images/filefault.png" alt="display" className=" w-12 h-12 object-contain " />
              </picture>
            </div>
            <p
              className="text-textGray font-sf text-[17px]  font-semibold justify-start 
              text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              <span className="text-white">FileVault.</span>&nbsp;
              Encrypt and protect your files and data without having to think about it.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default SecuritySection;
