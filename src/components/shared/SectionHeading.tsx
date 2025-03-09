

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <header className="relative w-full md:max-w-[932px] mx-auto px-6">
      <div className="w-full md:max-w-[75%] mb-[50px]">
        <h2 className="text-[32px] md:text-[48px] font-sf font-semibold text-[#f5f5f5]
         justify-start items-start pb-10 leading-[1.03] tracking-[-0.002em]">{title}</h2>
      </div>
    </header>
  )
}

export default SectionHeading


