import { Icon } from "semantic-ui-react"

const PeopleAboutUs = () => {
  return (
    <div className="w-full py-10 px-5 bg-slate-100" id="reviews">
      <article className="lg:w-[40%] md:w-[60%] mx-auto mb-10">
        <h1 className="font-black text-center text-5xl">PEOPLE <span className="text-secondColor">ABOUT US</span></h1>
        <p className="font-semibold text-center text-[#666]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
      </article>

      <div className="flex flex-wrap justify-center gap-10 items-center">
        <div className="flex md:w-[40%] items-center gap-3 mb-4">
          <Icon name="user circle" size="massive" color="olive" />
          <div className="flex flex-col">
            <h1 className="font-bold">USER NAME</h1>
            <p className="text-[#666] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda quaerat unde iusto id ipsa similique repellat ratione earum aspernatur.</p>
          </div>
        </div>
        <div className="flex md:w-[40%] items-center gap-3 mb-4">
          <Icon name="user circle" size="massive" color="olive" />
          <div className="flex flex-col">
            <h1 className="font-bold">USER NAME</h1>
            <p className="text-[#666] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda quaerat unde iusto id ipsa similique repellat ratione earum aspernatur.</p>
          </div>
        </div>
        <div className="flex md:w-[40%] items-center gap-3 mb-4">
          <Icon name="user circle" size="massive" color="olive" />
          <div className="flex flex-col">
            <h1 className="font-bold">USER NAME</h1>
            <p className="text-[#666] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda quaerat unde iusto id ipsa similique repellat ratione earum aspernatur.</p>
          </div>
        </div>
        <div className="flex md:w-[40%] items-center gap-3 mb-4">
          <Icon name="user circle" size="massive" color="olive" />
          <div className="flex flex-col">
            <h1 className="font-bold">USER NAME</h1>
            <p className="text-[#666] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda quaerat unde iusto id ipsa similique repellat ratione earum aspernatur.</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PeopleAboutUs