
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";



const UpgradeSection = () => {

  return (
    <section className="w-full mx-auto pb-52 bg-black items-center justify-center">
      <div className="md:w-[692px] lg:w-[700px] mx-auto relative">
        <h2 className="font-sf text-4xl md:text-[64px] lg-[80px] text-[#f5f5f7] 
        font-semibold text-center leading-[1.05] tracking-[-0.015em] ">
          There&apos;s never been a better time to upgrade.
        </h2>

        <div className="flex space-x-2 items-center justify-center py-8">
          <p className="text-textGray text-xl font-sf">Select your current MacBook Pro:
          </p>
          <TooltipProvider
            delayDuration={800}
            skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger
                className="flex bg-textGray
               p-2 text-white rounded-full
               w-6 h-6 items-center justify-center ">?
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
                className="p-4 bg-white rounded text-black">
                <p className="text-xs">
                  <span className="font-semibold">Don&apos;t know which model you have?</span>
                  Click the Apple logo in the upper left of your screen and choose About This Mac.
                  13-inch Intel-based
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center justify-center">
          <select name="choice" id="pet-select"
            className="border border-blue-600 rounded-full p-2 px-4 bg-black text-white font-semibold ">
            <option value="13-inch-Inch-based" selected>13-inch-Inch-based</option>
            <option value="15-or-16inch-Inch-based">15-or-16inch-Inch-based</option>
            <option value="13-inch-with M1">13-inch-with M1</option>
            <option value="13-or-14inch with M1 Pro or M1 Max">13-or-14inch with M1 Pro or M1 Max</option>
          </select>

        </div>

        <div className="flex items-center justify-center pt-12 pb-10">
          <p className="text-white font-semibold text-2xl">Here&apos;s what you get with the new MacBook Pro.</p>
        </div>

      </div>

      <div className="md:w-[692px] lg:w-[900px] mx-auto relative px-4 md:px-0">
        <section
          className="bento-grid">
          {/* First Card - Taller (2 rows) */}
          <div className="relative min-h-[162px] md:min-h-[380px] w-full h-full rounded-[28px]"
            style={{
              gridArea: "bento-1",
              backgroundImage: "url(https://res.cloudinary.com/dtainagml/image/upload/v1742050767/apple-remastered/images/upgraders-intel_bqhhbf.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >

            {/* Text Overlay */}
            <div className="absolute bottom-5 md:bottom-10  inset-x-0 flex flex-row md:flex-col gap-4
            items-start justify-start md:justify-end rounded-[28px] px-6 md:px-10 p-4 md:pb-8">
              <picture>
                <source srcSet="/images/icon-macbook.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/icon-macbook.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/icon-macbook.png" type="image/png" media="(max-width:0)" />
                <img src="/images/icon-macbook.png" alt="display"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[106px] object-contain" />
              </picture>
              <h2 className="text-white text-[19px] md:text-[40px] font-semibold font-sf leading-[1.1] pt-4">
                Fly through demanding tasks up to 9.8x faster.
                <sup className="underline">4</sup>
              </h2>
            </div>
          </div>

          {/* Second Card - Smaller */}
          <div className="relative w-full min-h-[162px] md:min-h-[230px]" style={{ gridArea: "bento-2" }}>
            <div className="bg-[#1d1d1f] object-cover h-full w-full rounded-[28px]" />

            {/* Text Overlay */}
            <div className="absolute bottom-5 md:bottom-10  inset-0 flex items-center gap-8 p-10">
              <picture>
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050744/apple-remastered/images/icon-xdr-display_o2gjwl.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050744/apple-remastered/images/icon-xdr-display_o2gjwl.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050744/apple-remastered/images/icon-xdr-display_o2gjwl.png" type="image/png" media="(max-width:0)" />
                <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050744/apple-remastered/images/icon-xdr-display_o2gjwl.png" alt="display"
                  className="w-[60px] h-[60px] md:w-[100px] md:h-[106px] object-contain" />
              </picture>
              <div>
                <h2 className="text-white text-[19px] md:text-[28px] font-semibold font-sf leading-[1.1] tracking-[.007em]">
                  A stunning  <br />
                  <span>Liquid Retina XDR</span>&nbsp;
                  display.
                </h2>
              </div>
            </div>
          </div>

          {/* Third Card - Smaller */}
          <div className="relative min-h-[162px] md:min-h-[230px] card-glow" style={{ gridArea: "bento-3" }}>
            <div className="bg-[#1d1d1f] object-cover h-full w-full rounded-[28px] card" />
            {/* Text Overlay */}
            <div className="absolute bottom-5 md:bottom-10 inset-0 flex items-center justify-start space-x-4 p-10 z-50">
              <picture>
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050739/apple-remastered/images/icon-apple-intelligence_fi91ac.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050739/apple-remastered/images/icon-apple-intelligence_fi91ac.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="https://res.cloudinary.com/dtainagml/image/upload/v1742050739/apple-remastered/images/icon-apple-intelligence_fi91ac.png" type="image/png" media="(max-width:0)" />
                <img src="https://res.cloudinary.com/dtainagml/image/upload/v1742050739/apple-remastered/images/icon-apple-intelligence_fi91ac.png" alt="display"
                  className="w-[60px] h-[60px] md:w-[100px] md:h-[106px] object-contain" />
              </picture>
              <h2 className="text-white text-[19px] md:text-[28px] font-semibold font-sf leading-[1.1] tracking-[.007em] ">
                Built for <br />
                <span className="ai-gradient-text">
                  Apple Intelligence
                </span>
              </h2>
            </div>

          </div>

          {/* Fourth Card - Taller (2 rows) */}
          <div className="relative min-h-[162px] md:min-h-[380px] w-full h-full rounded-[28px]"
            style={{
              gridArea: "bento-4",
              backgroundColor: "#1d1d1f",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}>

            {/* Text Overlay */}
            <div className="absolute bottom-5 md:bottom-10  inset-x-0 flex flex-row md:flex-col 
            items-start justify-end rounded-[28px] px-10 md:pb-8 -pt-8 gap-8">
              <picture>
                <source srcSet="/images/icon-battery-life.png" type="image/png" media="(max-width:734px)" />
                <source srcSet="/images/icon-battery-life.png" type="image/png" media="(max-width:1068px)" />
                <source srcSet="/images/con-battery-life.png" type="image/png" media="(max-width:0)" />
                <img src="/images/icon-battery-life.png" alt="display"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[106px] object-contain" />
              </picture>
              <h2 className="text-white text-[19px] md:text-[36px] font-semibold font-sf leading-[1.1] ">
                Up to
                <span className="battery-gradient-text">
                  14 more hours
                </span>&nbsp; battery life.5&nbsp;
                <span className="text-textGray">(Up to 24 hours total.)
                  <sup className="underline">6</sup>
                </span>

              </h2>
            </div>
          </div>
        </section>
      </div>


    </section>
  );
};

export default UpgradeSection;
