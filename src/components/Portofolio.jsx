import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Logo5 from '../assets/logo5.png'
import Logo6 from '../assets/logo6.png'
import Logo7 from '../assets/logo7.png'
import Logo8 from '../assets/logo8.png'

const Portofolio = () => {
  return (
    <div className="w-full py-10 px-5 bg-[#222] text-white" id='portofolio'>
      <article className="lg:w-[50%] mx-auto mb-10">
        <h1 className="font-black text-center text-5xl">OUR <span className="text-secondColor">PORTOFOLIO</span></h1>
        <p className="font-semibold text-center text-[#666]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
      </article>

      <div className="flex flex-wrap justify-center items-center gap-5">
        <a className='font-semibold uppercase text-white mb-5 cursor-pointer hover:underline hover:text-white hover:scale-105 text-lg lg:text-2xl'>Web Design</a>
        <a className='font-semibold uppercase text-white mb-5 cursor-pointer hover:underline hover:text-white hover:scale-105 text-lg lg:text-2xl'>Graphic Design</a>
        <a className='font-semibold uppercase text-white mb-5 cursor-pointer hover:underline hover:text-white hover:scale-105 text-lg lg:text-2xl'>Branding</a>
        <a className='font-semibold uppercase mb-5 cursor-pointer hover:underline hover:text-secondColor hover:scale-105 text-lg lg:text-2xl text-secondColor'>Logo</a>
        <a className='font-semibold uppercase text-white mb-5 cursor-pointer hover:underline hover:text-white hover:scale-105 text-lg lg:text-2xl'>Marketing</a>
        <a className='font-semibold uppercase text-white mb-5 cursor-pointer hover:underline hover:text-white hover:scale-105 text-lg lg:text-2xl'>Advertisment</a>
      </div>

      <ul className='flex flex-wrap justify-center mx-auto md:max-w-[80%] lg:max-w-[50%]'>
        <li className='md:w-1/4'>
          <img src={Logo1} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo2} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo3} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo4} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo5} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo6} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo7} />
        </li>
        <li className='md:w-1/4'>
          <img src={Logo8} />
        </li>
      </ul>
    </div>
  )
}

export default Portofolio