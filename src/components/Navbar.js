import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll} from "react-scroll"
import '../Styles/Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [didMount, setDidMount] = useState(false); 

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
      }, [])

      if(!didMount) {
        return null;
      }

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const AddBackgroundToNavbar = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', AddBackgroundToNavbar)


    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container" id="navbar-container">
                    <Link to="banner" smooth={true} duration={1000} className="navbar-logo" onClick={closeMobileMenu}><img alt="signature" src="images/My Drawing-3.sketchpad.png" width="250" height="100"
                    onClick={() => scroll.scrollToTop()}/></Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='about' smooth={true} duration={1000} spy={true} offset={-80} exact="true" activeClass="nav-links-active" className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='experience' smooth={true} duration={1000} offset={-80} spy={true} exact="true" activeClass="nav-links-active" className='nav-links' onClick={closeMobileMenu}>
                                Experiences
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='port' smooth={true} duration={1000} offset={-80} activeClass="nav-links-active" exact="true" className='nav-links' spy={true} onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' smooth={true} duration={1000} spy={true} offset={-80} activeClass="nav-links-active" exact="true" className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
