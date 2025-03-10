

const SectionHeadingInner = ({ title, chipTitle }: { title: string, chipTitle: string }) => {
  return (
    <header className="relative w-full md:max-w-4xl mx-auto px-6">
      <div className="w-full text-maximum ps-0 md:ps-[8.3%]">
        <h2 className='font-sf text-[#f5f5f5] font-semibold uppercase mb-[0.4em]'>
          {chipTitle}
        </h2>
        <p className="font-sf font-semibold text-[#f5f5f7] justify-start items-start pb-10">
          {title}
        </p>
      </div>
    </header>
  )
}

export default SectionHeadingInner


