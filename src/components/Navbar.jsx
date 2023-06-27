import { useEffect, useState } from "react"
import { Icon } from "semantic-ui-react"

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const showMobileNavbar = () => {
    setMobileNavbar((prevState) => !prevState);
  };

  const [navbarClass, setNavbarClass] = useState('');
  let lastScrollPosition = window.pageYOffset;
  const handleScroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition) {
      setNavbarClass('px-5 flex justify-between items-center h-[50px] bg-white');
    } else if (currentScrollPosition < lastScrollPosition) {
      setNavbarClass('sticky top-0 z-20 px-5 flex justify-between items-center h-[50px] bg-white border-b border-gray-200');
    }
    lastScrollPosition = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={navbarClass}>
      <div className="flex justify-center items-center bg-white">
        <span className="text-4xl text-[#222] font-black italic">AGENCY</span>
        <span className="inset-16 bg-mainColor transform skew-y-6 ml-3 italic px-6">Tagline Here</span>
      </div>
      <div className="w-full bg-white hidden lg:flex justify-end items-center gap-4">
        <a href="#whyus" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">WHY US</a>
        <a href="#about" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">ABOUT</a>
        <a href="#portofolio" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">PORTIFOLIO</a>
        <a href="#services" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">SERVICES</a>
        <a href="#process" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">PROCESS</a>
        <a href="#reviews" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">REVIEWS</a>
        <a href="#ourskills" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">OUR SKILLS</a>
        <a href="#contactus" className="font-semibold text-lg text-[#222] hover:translate-y-1 transition-all duration-150 hover:text-black">CONTACT US</a>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="block lg:hidden">
        <div onClick={showMobileNavbar}
          className="cursor-pointer transition-all duration-200">
          <Icon name="bars" color="black" size="big" className="hover:scale-110" />
        </div>

        <div
          className={mobileNavbar ?
            "w-[250px] h-[100vh] fixed left-[0%] bottom-[0px] bg-[#222] flex flex-col justify-start items-center gap-5 pt-16 transition-all duration-200"
            : "fixed top-0 left-[-200%]"}>

          <div className="p-5 cursor-pointer">
            <a className="text-4xl bg-mainColor px-4 py-2 text-white rounded-md font-black italic">AGENCY</a>
          </div>
          <a href="#whyus" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">WHY US</a>
          <a href="#about" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">ABOUT</a>
          <a href="#portofolio" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">PORTIFOLIO</a>
          <a href="#services" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">SERVICES</a>
          <a href="#process" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">PROCESS</a>
          <a href="#reviews" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">REVIEWS</a>
          <a href="#ourskills" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">OUR SKILLS</a>
          <a href="#contactus" className="font-semibold text-lg  text-white w-full hover:text-white px-5 hover:bg-gray-900">CONTACT US</a>
          <div className="flex justify-center items-center mx-auto mb-3 md:mb-0 gap-3 mt-4">
            <a className="bg-gray-500 mx-auto rounded-full text-[12px] p-2 cursor-pointer hover:scale-105">
              <Icon name='facebook f' className="text-slate-300 rounded-full pl-1" />
            </a>
            <a className="bg-gray-500 mx-auto rounded-full text-[12px] p-2 cursor-pointer hover:scale-105">
              <Icon name='twitter' className="text-slate-300 rounded-full pl-1" />
            </a>
            <a className="bg-gray-500 mx-auto rounded-full text-[12px] p-2 cursor-pointer hover:scale-105">
              <Icon name='mail' className="text-slate-300 rounded-full pl-1" />
            </a>
            <a className="bg-gray-500 mx-auto rounded-full text-[12px] p-2 cursor-pointer hover:scale-105">
              <Icon name='linkedin' className="text-slate-300 rounded-full pl-1" />
            </a>
            <a className="bg-gray-500 mx-auto rounded-full text-[12px] p-2 cursor-pointer hover:scale-105">
              <Icon name='youtube' className="text-slate-300 rounded-full pl-[2px]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar