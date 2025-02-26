

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-10 ">
        <h2 className="text-4xl md:text-[56px] font-sf font-semibold text-[rgb(245,245,247)]
         justify-start items-start pb-10 leading-5 tracking-[-0.02em]">{title}</h2>
      </div>
    </header>
  )
}

export default SectionHeading


