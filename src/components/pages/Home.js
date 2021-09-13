import React, {useEffect, useState} from 'react'
import HeroSection from '../HeroSection'
import "../../App.css"
import Cards from '../Cards'
import About from '../About'
import Footer from '../Footer'
import Experiences from '../Experiences'
import Navbar from '../Navbar'

const Home = () => {

    const [didMount, setDidMount] = useState(false); 

    useEffect(() => {
        window.scrollTo(0, 0)
        setDidMount(true);
        return () => setDidMount(false);
      }, [])

      if(!didMount) {
        return null;
      }
      
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Experiences />
            <Cards />
            <Footer />
        </>
    )
}

export default Home