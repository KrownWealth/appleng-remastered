


const DifferenceSection = () => {

  return (
    <section className="w-full mx-auto bg-[#1d1d1f] flex flex-col items-center justify-center pt-52 pb-60">
      <div className="md:w-[692px] lg:w-[700px] mx-auto relative">
        <h2 className="font-sf text-4xl md:text-[64px] lg-[80px] text-[#f5f5f7] 
        font-semibold text-center leading-[1.05] tracking-[-0.015em] ">
          Designed to make a difference.
        </h2>

        <p className="text-textGray my-16 font-sf text-xl font-semibold
        leading-snug tracking-[-0.011em] opacity-100 text-center px-12">
          What matters to you matters to Apple, too. From using more
          recycled content that minimizes environmental impact.
          To privacy protections that give you more control over your
          data. To creating built‑in features that make Mac accessible to all.
        </p>


        <div className="grid grid-cols-3 gap-16 font-sf items-center justify-center">
          <div className="flex flex-col">
            <div className="pt-8 pb-2">
              <picture>
                <source srcSet="/images/durale-d.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/durale-d.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/durale-d.png" type="image/png" media="(max-width:0)" />
                <img src="/images/durale-d.png" alt="display" className=" w-12 h-12 object-contain " />
              </picture>
            </div>
            <p className="text-textGray font-sf text-[17px]  font-semibold justify-start   
            text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >
              MacBook Pro has a durable design, with  &nbsp;
              <span className="text-white">100 percent recycled aluminum in the enclosure. </span>
            </p>
          </div>

          <div className="flex flex-col">
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
              <span className="text-white">Privacy is a fundamental human right.</span>&nbsp;
              Which is why we design our products and services to protect it.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="pt-8 pb-2">
              <picture>
                <source srcSet="/images/inlcusive.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/inclusive.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/inclusive.png" type="image/png" media="(max-width:0)" />
                <img src="/images/inclusive.png" alt="display" className=" w-12 h-12 object-contain " />
              </picture>
            </div>
            <p
              className="text-textGray font-sf text-[17px]  font-semibold justify-start 
              text-start leading-snug tracking-[-0.011em] opacity-100 pb-10"
            >

              The best technology works for everyone. That&apos;s why our products and services are&nbsp;
              <span className="text-white"> inclusive by design.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
