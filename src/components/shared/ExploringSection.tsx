import { useState } from "react";
import SectionHeading from "./SectionHeading";

const ExploringSection = () => {
  const [activeMacbookPro, setActiveMacbookPro] = useState(0);
  const [activeMacbookAir, setActiveMacbookAir] = useState(0);

  return (
    <section className="w-full mx-auto bg-appleGray flex flex-col pt-28 pb-60 px-6 lg:px-0">
      <SectionHeading title="Keep exploring Mac." />

      <div className="w-full lg:w-[600px] mx-auto relative flex flex-col pt-12">
        <div className="flex gap-8 md:gap-12">
          {/* MacBook Pro */}
          <MacbookDisplay
            title="MacBook Pro 14” and 16”"
            newLabel="new"
            subtitle="M4, M4 Pro, or M4 Max chip"
            description="The most advanced Mac laptops for demanding workflows."
            imageSrc="/images/mac-pro.png"
            activeIndex={activeMacbookPro}
            setActiveIndex={setActiveMacbookPro}
          />

          {/* MacBook Air */}
          <MacbookDisplay
            title="MacBook Air 13"
            newLabel="new"
            subtitle="M2 or M3 chip"
            description="Strikingly thin and fast so you can work, play, or create anywhere."
            imageSrc="/images/mac-air.png"
            activeIndex={activeMacbookAir}
            setActiveIndex={setActiveMacbookAir}
            buttonLabel="Learn more"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mt-16"></div>

        <div className="flex flex-row gap-8 text-[#f5f5f5] mx-auto mt-24 md:mt-16">
          <MacbookSpecifications
            chipSrc="/images/mac-pro-chip.png"
            chipDescription="Apple M4, M4 Pro, or M4 Max chip"
            batteryLife="24 hrs"
            portsDescription="7 ports: 3x Thunderbolt 4 (USB-C) or 3x Thunderbolt 5 (USB-C), HDMI, SDXC, headphone jack, MagSafe"
          />

          <MacbookSpecifications
            chipSrc="/images/mac-air-chip.png"
            chipDescription="Apple M2, or M3 chip"
            batteryLife="18 hrs"
            portsDescription="4 ports: 2x Thunderbolt / USB 4, headphone jack, MagSafe"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploringSection;

interface MacbookDisplayProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  buttonLabel?: string;
  newLabel?: string;
}

const MacbookDisplay: React.FC<MacbookDisplayProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  activeIndex,
  setActiveIndex,
  buttonLabel,
  newLabel,
}) => {
  return (
    <div className="flex flex-col w-1/2 items-center justify-start md:justify-center gap-8">
      <picture>
        <source srcSet={imageSrc} type="image/png" />
        <img src={imageSrc} alt={title} className="w-full max-w-[300px] h-auto object-contain" loading="lazy" />
      </picture>

      {/* Navigation dots */}
      <div className="flex justify-start lg:justify-center gap-2 mt-4">
        {[0, 1, 2].map((index) => (
          <button
            key={`${title}-${index}`}
            className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-600"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`${title} image ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-start lg:text-center pt-4">
        {newLabel && (
          <span className="text-[#f56300] text-xs font-medium capitalize">{newLabel}</span>
        )}
        <div className="min-h-[64px]">
          <h4 className="text-[#f5f5f5] text-2xl font-semibold mb-1">{title}</h4>
          <h6 className="text-[#f5f5f5] text-sm mb-2">{subtitle}</h6>
          <p className="text-gray-400 text-sm mb-3 max-w-[350px] font-sf pt-2">{description}</p>
          {buttonLabel ? (
            <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full mt-4 px-5 py-1 text-sm font-medium">
              {buttonLabel}
            </button>
          ) : (
            <p className="text-textGray text-xs pt-4">Currently Viewing</p>
          )}
        </div>
      </div>
    </div>
  );
};

interface MacbookSpecificationsProps {
  chipSrc: string;
  chipDescription: string;
  batteryLife: string;
  portsDescription: string;
}

const MacbookSpecifications: React.FC<MacbookSpecificationsProps> = ({
  chipSrc,
  chipDescription,
  batteryLife,
  portsDescription,
}) => (
  <div className="w-1/2 flex flex-col justify-center mx-auto text-start md:text-center font-sf text-[10px] h-72">
    <div className="flex justify-start md:justify-center">
      <picture>
        <source srcSet={chipSrc} type="image/png" />
        <img
          src={chipSrc}
          alt={chipDescription}
          className="w-20 h-20 object-contain"
          loading="lazy"
        />
      </picture>
    </div>
    <p className="pt-8">{chipDescription}</p>
    <div className="flex flex-col py-4 gap-2">
      <p>Up to</p>
      <p className="text-lg">{batteryLife}</p>
      <p>
        battery life <sup className="underline">3</sup>
      </p>
    </div>
    <div className="flex flex-col gap-2 py-4 mx-auto items-center justify-center">
      <p>{portsDescription}</p>
    </div>
    <div className="flex flex-col gap-2 py-4 justify-center">
      <div className="pt-8 pb-2 flex justify-center">
        <picture>
          <source srcSet="/images/icon-apple-intelligence.png" type="image/png" />
          <img
            src="/images/icon-apple-intelligence.png"
            alt="Apple Intelligence"
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        </picture>
      </div>
      <p>Built for Apple Intelligence1</p>
    </div>
  </div>
);
