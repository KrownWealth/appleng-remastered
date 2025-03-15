

const SectionHeading = ({ title, paddingbottom = "pb-10" }: { title: string, paddingbottom?: string }) => {
  return (
    <header className="relative w-full md:max-w-4xl mx-auto">
      <div className="w-full mb-[50px]">
        <h2 className={`text-[32px] md:text-[48px] font-sf font-semibold text-[#f5f5f5]
         justify-start items-start leading-[1.03] tracking-[-0.002em] ${paddingbottom}`}>{title}</h2>
      </div>
    </header>
  )
}

export default SectionHeading


