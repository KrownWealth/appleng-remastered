
import AppleIntellScroll from "./AppleIntelScroll";
import PrivacySection from "./PrivacySection";

const AppleIntelSection = () => {

  return (
    <section className="w-full mx-auto overflow-hidden text-center relative card-glow">
      {/* Glow Gradient Applied */}
      <div className=" mx-auto card">

        <div className="relative md:w-[692px] lg:w-[980px] mx-auto">

          <h2 className="font-sf text-4xl md:text-[64px] 
         font-semibold uppercase mb-8 leading-tight tracking-[-0.02em]">
            <span className="ai-gradient-text">Built for Apple Intelligence</span>
          </h2>
          <p className="text-[#f5f5f7] font-sf text-4xl md:text-[64px] lg:text-[80px] max-w-[66.6%] mx-auto">
            Genius at work.
          </p>
        </div>

        <p className="mt-8 text-[#86868b] text-lg px-6 md:px-0">
          Apple Intelligence is the personal intelligence system that helps you{" "}
          <span className="text-white">write, express yourself, and get things done effortlessly.</span>{" "}
          With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.
          <sup className="text-[#86868b] font-normal">
            <a href="#" aria-label="footnote 1">1</a>
          </sup>
        </p>

        <AppleIntellScroll />

        <PrivacySection />
      </div>

    </section>
  );
};

export default AppleIntelSection;
