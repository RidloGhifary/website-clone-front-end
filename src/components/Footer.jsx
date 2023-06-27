import { Icon } from "semantic-ui-react"

const Footer = () => {
  return (
    <div className="w-full py-10 px-5 bg-[#222]">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto gap-5">
        <div className="flex flex-col justify-between text-white md:w-[50%] p-3 col-span-2 lg:col-span-full">
          <div>
            <div className="flex justify-start items-center">
              <span className="text-4xl text-white font-black italic">AGENCY</span>
              <span className="inset-16 bg-mainColor transform skew-y-6 -ml-[50px] italic px-6">Tagline Here</span>
            </div>
            <p className="my-5 font-semibold ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro modi tempore ducimus debitis voluptas exercitationem labore ipsam cum iusto eius!
            </p>
          </div>
          <p className="font-semibold mt-5 text-xl">&copy; Agency 2016</p>
        </div>
        <div className="flex flex-col p-3">
          <h1 className="text-4xl font-black text-white hover:text-white">SERVICES</h1>
          <ul>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-3">
          <h1 className="text-4xl font-black text-white hover:text-white">USERFUL LINKS</h1>
          <ul>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
            <li className="list-disc text-white underline mb-3">
              <a href="" className="text-white">lorem</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-3 text-white">
          <h1 className="text-4xl font-black text-white hover:text-white">CONTACTS</h1>
          <ul>
            <li className="list-disc text-white mb-3">
              <a className="font-semibold text-white hover:text-white hover:scale-105 cursor-pointer">
                <Icon name="phone" color="white" size="large" />
                +1 (222)-999-233
              </a>
            </li>
            <li className="list-disc text-white mb-3">
              <a className="font-semibold text-white hover:text-white hover:scale-105 cursor-pointer">
                <Icon name="phone" color="white" size="large" />
                +1 (222)-999-233
              </a>
            </li>
            <li className="list-disc text-white mb-3">
              <a className="font-semibold text-white hover:text-white hover:scale-105 cursor-pointer">
                <Icon name="mail" color="white" size="large" />
                yourmail@gmail.com
              </a>
            </li>
          </ul>
          <h1 className="text-4xl font-black text-white hover:text-white">FOLLOW US</h1>
          <ul className="flex gap-3 mt-4">
            <li>
              <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
                <Icon name='facebook f' className="text-slate-300 rounded-full pl-1" />
              </a>
            </li>
            <li>
              <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
                <Icon name='twitter' className="text-slate-300 rounded-full pl-1" />
              </a>
            </li>
            <li>
              <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
                <Icon name='mail' className="text-slate-300 rounded-full pl-1" />
              </a>
            </li>
            <li>
              <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
                <Icon name='linkedin' className="text-slate-300 rounded-full pl-1" />
              </a>
            </li>
            <li>
              <a className="bg-gray-500 mx-auto rounded-full p-3 text-[15px]">
                <Icon name='youtube' className="text-slate-300 rounded-full pl-[2px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer