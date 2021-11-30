import Intro from "../components/Intro"
import Navbar from "../components/navbar/index"
import Sidebar from "../components/sidebar"
import Work from "../components/Work"
import { useState } from "react"
import HeroSection from "../components/heroSection"
import InfoSection from "../components/infoSection"
import { homeObjOne } from "../components/infoSection/Data"
import Info from "../components/info"
import About from "../components/about"
import WorkContainer from "../components/works"
import Contact from "../components/contact"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    //Aplicação totalmente single-page
    return (
        <div className="index">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <About />
            <WorkContainer />
            <Info />
            <Contact />
            {/* <Intro/>
            <Work/> */}
        </div>
    )
}

export default Home
