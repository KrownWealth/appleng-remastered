import { Plus } from "lucide-react"
import SectionHeadingInner from "./SectionHeadingInner"
import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion";



const PerformanceSection = () => {

  const [showVideo, setShowVideo] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setShowVideo(false);
    }, 5000);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px", once: false, });


  return (
    <section ref={ref} className="w-full mx-auto pt-52 bg-black">
      <SectionHeadingInner chipTitle=" Performance" title="  Pro all out." />

      <section className="performance-section ">
        {/* Content container */}
        <div className="performance-card w-full md:max-w-6xl h-[600px] mx-auto">
          {showVideo ?
            (
              <video
                autoPlay
                muted
                loop
                src="https://res.cloudinary.com/dtainagml/video/upload/v1742050666/apple-remastered/videos/large-shadow-trasparet_fpzder.mp4"
                className={`w-full h-full object-cover transition-opacity duration-500 "
                  }`}
              />
            ) :
            (<picture className="w-full">
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050758/apple-remastered/images/performance_gtogz6.jpg" type="image/jpg" media="(max-width: 734px)" />
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050758/apple-remastered/images/performance_gtogz6.jpg" type="image/jpg" media="(max-width: 1068px)" />
              <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050758/apple-remastered/images/performance_gtogz6.jpg" media="(min-width: 0)" />
              <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050758/apple-remastered/images/performance_gtogz6.jpg" alt="M4 Chip" className="w-full h-[600px] object-cover" />
            </picture>
            )
          }
        </div>
      </section>


      <section
        className="section-width mx-auto flex flex-col gap-10 pt-20 pb-10 items-center justify-center">
        <div className="max-w-xl">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 1 * 0.5 }}
            className="font-sf text-textGray text-[19px] font-medium justify-start
           text-start leading-snug tracking-[-0.011em] opacity-100">
            MacBook Pro features the <span className="text-white">most advanced lineup of chips
              ever built for a pro laptop.</span> Phenomenal single- and multithreaded
            CPU performance, faster unified memory, enhanced machine learning
            accelerators — the M4 family of chips gives you the kind of speed
            and capability you&apos;ve never thought possible. And the powerful Neural Engine makes AI tasks like image
            upscaling and video caption creation as well as on-device Apple Intelligence features fly.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-sf mt-12">
            {[
              { speed: '3.4x', comparison: 'M1', footnote: '10' },
              { speed: '3x', comparison: 'M1 Pro', footnote: '11' },
              { speed: '3.5x', comparison: 'M1 Max', footnote: '12' }
            ].map((metric, index) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1 * 0.5 }}
                key={index} className="border-top py-4">
                <p className="text-textGray text-xl">MacBook Pro with
                  <span className="inline-block"> M4 is up to</span>
                </p>
                <h3 className="font-sf text-white text-3xl font-semibold">{metric.speed} faster</h3>
                <p className="text-textGray text-xl">than {metric.comparison}
                  <sup className="underline"><a href="">{metric.footnote}</a></sup>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full mx-auto py-32 md:py-52 flex flex-col items-center justify-center">

        <div className="hidden max-w-4xl mx-auto px-8 md:flex flex-col text-center items-center justify-center space-y-4">
          <h3 className="text-white text-4xl font-sf font-semibold md:text-[48px] ">Next-level graphics </h3>
          <h3 className="text-white text-4xl font-sf font-semibold md:text-[48px] ">performance. Game on.</h3>
        </div>

        <div className="w-full md:hidden mx-auto px-8 flex flex-col text-center items-center justify-center">
          <h3 className="text-white text-[32px] font-sf font-semibold leading-tight">Next-level graphics performance. <br /> Game on.</h3>
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 top-[400px]">
          {/* Centered Main Image */}
          <motion.picture
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute md:hidden flex items-center justify-center w-[70%] z-20 top-[-170px]"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" alt="M4 Chip" className="w-full rounded-[48px]" />

          </motion.picture>


          <motion.picture
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center w-[80%] z-20"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" type="image/jpg" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen-blender-1_ckj8xf.jpg" alt="M4 Chip" className="w-full rounded-[48px]" />
          </motion.picture>


          <motion.picture
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[-280px] md:top-[-160px] -right-12 md:right-[-300px] w-36 md:w-[45%] z-30"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-2_ujxc6x.png" type="image/png" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-2_ujxc6x.png" type="image/png" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-2_ujxc6x.png" type="image/png" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-2_ujxc6x.png" alt="M4 Chip"
              className="w-full " />
          </motion.picture>

          <motion.picture
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[-350px] -left-10 md:left-[-100px] w-[50%] z-10"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-3_wjm3ep.jpg" type="image/jpg" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-3_wjm3ep.jpg" type="image/jpg" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-3_wjm3ep.jpg" type="image/jpg" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051067/apple-remastered/images/performance-screen-blender-3_wjm3ep.jpg" alt="M4 Chip"
              className="w-full " />
          </motion.picture>

          <motion.picture
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-[-50px] md:bottom-[-100px] -left-24  md:left-[-400px] w-36 md:w-[55%] z-50"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051112/apple-remastered/images/performance-screen-blender-4_dyxpnf.png" type="image/png" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051112/apple-remastered/images/performance-screen-blender-4_dyxpnf.png" type="image/png" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051112/apple-remastered/images/performance-screen-blender-4_dyxpnf.png" type="image/png" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051112/apple-remastered/images/performance-screen-blender-4_dyxpnf.png" alt="M4 Chip" className="w-full" />
          </motion.picture>



          {/* Right Images */}

          <motion.picture
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 md:bottom-[-100px] -right-20  md:right-[-400px] w-36 md:w-[55%] z-50 md:z-10"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051137/apple-remastered/images/performance-screen-blender-5_ow3avd.png" type="image/png" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051137/apple-remastered/images/performance-screen-blender-5_ow3avd.png" type="image/png" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051137/apple-remastered/images/performance-screen-blender-5_ow3avd.png" type="image/png" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051137/apple-remastered/images/performance-screen-blender-5_ow3avd.png" alt="M4 Chip" className="w-full" />
          </motion.picture>

          <motion.picture
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}

            className="absolute top-[-320px] md:top-[-250px] right-10 w-36 md:w-[40%] z-50 border-one"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen_qyaylx.png" type="image/png" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen_qyaylx.png" type="image/png" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen_qyaylx.png" type="image/png" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051066/apple-remastered/images/performance-screen_qyaylx.png" alt="M4 Chip" className="w-full " />
          </motion.picture>

          <motion.picture
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-40 md:top-10 -left-24 md:left-[-280px] w-40 md:w-[40%] z-50 md:z-20"
          >
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051138/apple-remastered/images/performance-screen-blender-7_n6brzw.png" type="image/png" media="(max-width: 734px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051138/apple-remastered/images/performance-screen-blender-7_n6brzw.png" type="image/png" media="(max-width: 1068px)" />
            <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742051138/apple-remastered/images/performance-screen-blender-7_n6brzw.png" type="image/png" media="(min-width: 0)" />
            <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742051138/apple-remastered/images/performance-screen-blender-7_n6brzw.png" alt="M4 Chip" className="w-full " />
          </motion.picture>

        </div>
      </section>


      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.5, delay: 1 * 0.2 }}
        className="max-w-2xl mx-auto flex flex-col items-center justify-center px-8 pt-[400px] pb-20">
        <p className="text-textGray font-sf text-[19px] md:text-xl font-semibold justify-center md:justify-start 
        md:text-start text-center leading-snug tracking-[-0.011em] opacity-100">
          Run graphics-intensive workflows with a responsiveness that keeps
          up with your imagination. The M4 family of chips features a GPU with
          a second-generation hardware-accelerated ray tracing engine that
          renders images faster, <span className="text-white">so gaming feels more immersive and realistic than ever.</span>. And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
        </p>
      </motion.section>


      <div className="flex justify-center sticky">
        <button className="flex items-center justify-center gap-4 bg-applengGray px-4 py-4 rounded-full shadow-[inset_0_0_1px_rgba(232,232,237,0.11)]">
          <span className="text-white text-sm font-medium"> Go deeper on the M4 chip </span>
          <div className="bg-blue-500 rounded-full p-1"> <Plus className="w-4 h-4 text-applengGray" /></div>
        </button>
      </div>

    </section>

  )
}

export default PerformanceSection
