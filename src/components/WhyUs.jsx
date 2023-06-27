import { Button, Icon } from "semantic-ui-react"

const WhyUs = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden bg-secondColor mx-auto h-[400px] flex flex-col justify-center items-center" id="whyus">
        <div className="absolute inset-14 bg-mainColor transform -skew-y-6"></div>
        <header className="text-center mx-auto text-white relative z-0">
          <div className="bg-secondColor shadow-md -skew-y-2">
            <h1 className="uppercase font-black text-5xl md:text-7xl w-full">we are exprets</h1>
          </div>
          <p className="font-semibold my-8 w-[70%] mx-auto lg:w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi ab eveniet magni esse earum eos nam, aperiam laboriosam est.</p>
          <a href="" className="text-black drop-shadow-md">
            <Button color="yellow">READ ME</Button>
          </a>
        </header>
      </div>
      <div className="w-full bg-white mx-auto py-10 px-5">
        <article className="text-center mx-auto">
          <h1 className="font-black text-5xl uppercase">our <span className="text-secondColor">advantages</span></h1>
          <p className="w-[70%] lg:w-[50%] mx-auto font-semibold text-grayColor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio! Accusantium, hic fugiat libero voluptatem veritatis quidem necessitatibus quos quis sapiente eius unde voluptatum soluta!</p>
          <ul className="flex flex-wrap justify-center items-center gap-3 ">
            <li className=" w-[200px] flex flex-col justify-center items-center my-3">
              <a href="" className="bg-gray-100 rounded-full p-3 py-5">
                <Icon name="idea" size="huge" color="olive" />
              </a>
              <span className="font-bold uppercase text-2xl mt-3">Innovations</span>
              <span className="w-[60%] text-gray-500 font-medium">Lorem ipsum dolor sit amet.</span>
            </li>
            <li className="w-[200px] md:w-[300px] flex flex-col justify-center items-center my-3">
              <a href="" className="bg-gray-100 rounded-full p-3 py-5">
                <Icon name="hand paper" size="huge" color="olive" />
              </a>
              <span className="font-bold uppercase text-2xl mt-3">Quality</span>
              <span className="w-[60%] text-gray-500 font-medium">Lorem ipsum dolor sit amet.</span>
            </li>
            <li className="w-[200px] md:w-[300px] flex flex-col justify-center items-center my-3">
              <a href="" className="bg-gray-100 rounded-full p-3 py-5 ">
                <Icon name="clock" size="huge" color="olive" />
              </a>
              <span className="font-bold uppercase text-2xl mt-3">Experience</span>
              <span className="w-[60%] text-gray-500 font-medium">Lorem ipsum dolor sit amet.</span>
            </li>
            <li className="w-[200px] md:w-[300px] flex flex-col justify-center items-center my-3">
              <a href="" className="bg-gray-100 rounded-full p-3 py-5">
                <Icon name="users" size="huge" color="olive" />
              </a>
              <span className="font-bold uppercase text-2xl mt-3">Happy Client</span>
              <span className="w-[60%] text-gray-500 font-medium">Lorem ipsum dolor sit amet.</span>
            </li>
            <li className="w-[200px] md:w-[300px] flex flex-col justify-center items-center my-3">
              <a href="" className="bg-gray-100 rounded-full p-3 py-5">
                <Icon name="comments" size="huge" color="olive" />
              </a>
              <span className="font-bold uppercase text-2xl mt-3">Support</span>
              <span className="w-[60%] text-gray-500 font-medium">Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </article>
      </div>
    </>
  )
}

export default WhyUs