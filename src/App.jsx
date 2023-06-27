import './App.css'
import About from './components/About'
import CallInfo from './components/CallInfo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import OurServices from './components/OurServices'
import OurSkills from './components/OurSkills'
import PeopleAboutUs from './components/PeopleAboutUs'
import Portofolio from './components/Portofolio'
import Process from './components/Process'
import WhyUs from './components/WhyUs'

function App() {
  return (
    <>
      <CallInfo />
      <Navbar />
      <WhyUs />
      <About />
      <OurServices />
      <Portofolio />
      <Process />
      <PeopleAboutUs />
      <OurSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
