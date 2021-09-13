import React, {useEffect} from 'react'
import { Button } from './Button'
import '../Styles/HeroSection.css'
import '../App.css'
import Aos from "aos"
import "aos/dist/aos.css"

const HeroSection = () => {

    useEffect(() => {
        Aos.init({ duration: 1000})
    }, [])

    return (
        <div className='banner-container' id="banner">
            <h1 data-aos="fade-down" className="title-name">DAVID ZHANG</h1>
            <hr data-aos="fade-up" color="white" />
            <p data-aos="fade-up" className="undertext">
                Programmer. Creator. Student
            </p>
            <div data-aos="fade-up" className="banner-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' path='https://docs.google.com/document/d/1PqMuVdk_oqHz_Tj_Hj2Wio1mRVVyLhWa-SBX_TrtnnY/export?format=pdf' newTab='_blank'>Check out my Resume!</Button>
            </div>
                        
            <div className="social-media">
                <ul className="social-med">
                    <li className="lst">
                        <a href="https://www.facebook.com/profile.php?id=100003938507959" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-facebook"></i></a>
                    </li>
                </ul>
                <ul className="social-med">
                    <li className="lst">
                        <a href="https://github.com/davidzhangg" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-github-square"></i></a>
                    </li>
                </ul>
                <ul className="social-med">
                    <li className="lst">
                        <a href="https://www.instagram.com/davidd.zhang/" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
                <ul className="social-med">
                    <li className="lst">
                        <a href="https://www.linkedin.com/in/davidzhang599/" target="_blank" rel="noreferrer" className='social-icon'><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
                <ul className="social-med">
                    <li className="lst">
                        <a href="mailto:dza47@sfu.ca" className="social-icon"><i class="far fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeroSection
