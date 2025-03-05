import { Button } from "../ui/button"


const ExploringSection = () => {
  return (
    <section className="w-full mx-auto bg-appleGray flex flex-col items-center justify-center pt-52 pb-60">

      <h2 className="font-sf text-4xl md:text-[64px] lg-[80px] text-[#f5f5f7] 
        font-semibold text-center leading-[1.05] tracking-[-0.015em] ps-[8.3%] ">
        Keep exploring Mac.
      </h2>


      <div className="md:w-[692px] lg:w-[90px] mx-auto relative">
        <div className="flex flex-row gap-12 border-b border-gray-50 text-textGray">
          <div className="">
            <div className="pt-8 pb-2">
              <source srcSet="/images/mac-pro.png" type="image/png" media="(max-width:734px)" />
              <source srcSet="/images/mac-pro.png" type="image/png" media="(max-width:1068px)" />
              <source srcSet="/images/mac-pro.png" type="image/png" media="(max-width:0)" />
              <img src="/images/mac-pro.png" alt="display" className=" w-12 h-12 object-contain " />
            </div>
            <div>
              <h4>MacBook Pro 14” and 16”</h4>
              <h6>M4, M4 Pro, or M4 Max chip</h6>
              <p>The most advanced Mac laptops for demanding workflows.</p>
              <p>Currently viewingMacBook Pro 14 and 16 inch</p>
            </div>
          </div>
          <div className="">
            <div className="pt-8 pb-2">
              <source srcSet="/images/mac-air.png" type="image/png" media="(max-width:734px)" />
              <source srcSet="/images/mac-air.png" type="image/png" media="(max-width:1068px)" />
              <source srcSet="/images/mac-air.png" type="image/png" media="(max-width:0)" />
              <img src="/images/mac-air.png" alt="display" className=" w-12 h-12 object-contain " />
            </div>
            <div>
              <h4>MacBook Air 13” and 15”</h4>
              <h6>M2,or M3 chip</h6>
              <p>Strikingly thin and fast so you can work, play, or create anywhere.</p>
              <Button variant="secondary">Learn more</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-12 text-textGray">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <picture>
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:734px)" />
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:1068px)" />
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:0)" />
                  <img src="/images/touch-id.png" alt="display" className=" w-12 h-12 object-contain " />
                </picture>
              </div>
              <p>Apple M4, M4 Pro, or M4 Max chip</p>
            </div>

            <div className="grid grid-cols-3">
              <p>Up to</p>
              <p> 24 hrs</p>
              <p>battery life3</p>
            </div>

            <div className="grid grid-cols-2">
              <p>7 ports</p>
              <p> 3x Thunderbolt 4 (USB-C) or 3x Thunderbolt 5 (USB-C), HDMI, SDXC, headphone jack, MagSafe</p>
            </div>

            <div className="grid grid-cols-2">
              <div className="pt-8 pb-2">
                <picture>
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:734px)" />
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:1068px)" />
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:0)" />
                  <img src="/images/icon-apple-intelligence.png" alt="display" className=" w-16 h-16 object-contain " />
                </picture>
              </div>
              <p>Built for Apple Intelligence1</p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <picture>
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:734px)" />
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:1068px)" />
                  <source srcSet="/images/touch-id.png" type="image/png" media="(max-width:0)" />
                  <img src="/images/touch-id.png" alt="display" className=" w-12 h-12 object-contain " />
                </picture>
              </div>
              <p>Apple M4, M4 Pro, or M4 Max chip</p>
            </div>

            <div className="grid grid-cols-3">
              <p>Up to</p>
              <p> 24 hrs</p>
              <p>battery life3</p>
            </div>

            <div className="grid grid-cols-2">
              <p>7 ports</p>
              <p> 3x Thunderbolt 4 (USB-C) or 3x Thunderbolt 5 (USB-C), HDMI, SDXC, headphone jack, MagSafe</p>
            </div>

            <div className="grid grid-cols-2">
              <div className="pt-8 pb-2">
                <picture>
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:734px)" />
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:1068px)" />
                  <source srcSet="/images/icon-apple-intelligence.png" type="image/png" media="(max-width:0)" />
                  <img src="/images/icon-apple-intelligence.png" alt="display" className=" w-16 h-16 object-contain " />
                </picture>
              </div>
              <p>Built for Apple Intelligence1</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploringSection
