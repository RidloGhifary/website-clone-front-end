import { Icon } from "semantic-ui-react"

const Process = () => {
  return (
    <div className="w-full py-10 px-5" id="process">
      <article className="lg:w-[50%] mx-auto mb-10">
        <h1 className="font-black text-center text-5xl">OUR <span className="text-secondColor">PROCESS</span></h1>
        <p className="font-semibold text-center text-grayColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
      </article>
      <div className="flex flex-wrap justify-center gap-5 lg:gap-0 items-center">
        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="phone volume" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">1</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">request call</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <hr className="hidden lg:block my-0 -mt-[67px] border-t-4 border-gray-300 w-[5%]" />

        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="comments" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">2</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">consultation</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <hr className="hidden lg:block my-0 -mt-[67px] border-t-4 border-gray-300 w-[5%]" />

        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="newspaper outline" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">3</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">planning</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <hr className="hidden lg:block my-0 -mt-[67px] border-t-4 border-gray-300 w-[5%]" />

        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="settings" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">4</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">process</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <hr className="hidden lg:block my-0 -mt-[67px] border-t-4 border-gray-300 w-[5%]" />

        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="pencil" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">5</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">correcting</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>

        <hr className="hidden lg:block my-0 -mt-[67px] border-t-4 border-gray-300 w-[5%]" />

        <div className="w-[100px]">
          <div className="relative border-4 border-gray-300 p-5 rounded-full w-[100px]">
            <Icon name="calendar check" size="huge" color="olive" />
            <div className="p-2 absolute top-[-20%] left-[50%] translate-x-[-50%] bg-orange-400 rounded-full w-[33px] text-center">
              <p className="text-black font-semibold">6</p>
            </div>
          </div>
          <div className="text-center mt-2 flex flex-col">
            <span className="uppercase font-bold">deliver</span>
            <span className="text-gray-400">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process