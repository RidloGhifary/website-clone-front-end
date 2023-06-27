
const OurSkills = () => {
  return (
    <div className="w-full px-5 py-10" id="ourskills">
      <article className="lg:w-[40%] md:w-[60%] mx-auto mb-10">
        <h1 className="font-black text-center text-5xl">OUR <span className="text-secondColor">SKILLS</span></h1>
        <p className="font-semibold text-center text-grayColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
      </article>

      <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
        <div className="relative w-36 h-36 mb-4">
          <div className="absolute inset-0 border-2 border-secondColor rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[45%] bg-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-secondColor"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-center text-xl font-black">45%</p>
          </div>
          <p className="uppercase font-black text-center mt-[140px]">coding</p>
        </div>
        <div className="relative w-36 h-36 mb-4">
          <div className="absolute inset-0 border-2 border-orange-500 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[70%] bg-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-orange-500"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-center text-xl font-black">70%</p>
          </div>
          <p className="uppercase font-black text-center mt-[140px]">branding</p>
        </div>
        <div className="relative w-36 h-36 mb-4">
          <div className="absolute inset-0 border-2 border-red-500 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[50%] bg-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-red-500"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-center text-xl font-black">50%</p>
          </div>
          <p className="uppercase font-black text-center mt-[140px]">seo & ads</p>
        </div>
        <div className="relative w-36 h-36 mb-4">
          <div className="absolute inset-0 border-2 border-blue-500 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[60%] bg-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-blue-500"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-black text-center text-xl font-black">60%</p>
          </div>
          <p className="uppercase font-black text-center mt-[140px]">web design</p>
        </div>
      </div>
    </div>
  )
}

export default OurSkills