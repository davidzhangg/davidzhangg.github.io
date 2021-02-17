import React from 'react'
import '../Styles/Footer.css'
import { Button } from './Button'
import { AiOutlineRocket } from "react-icons/ai";
import { Link as LinkS } from 'react-scroll'



const Footer = () => {

    return (
        <div className="contact-container" id="contact">
            <div className="email-contact">
                <div className="envelope-logo">
                    <i class="far fa-paper-plane"></i>
                </div>
                <h1 className="connect">STAY CONNECTED!</h1>
                <p className="wrapup-text">
                Feel free to shoot me an email to say hello or for any collaboration purposes!
                </p>
                <div className="footer-btns">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path="/contact">Email Me</Button>
                </div>
            </div>
            <div className="contact-area">
                <div className="social">
                    <ul className="social-ls">
                        <li className="ls">
                            <div className="icon-design icon-facebook">
                                <a href="https://www.facebook.com/profile.php?id=100003938507959" target="_blank" rel="noreferrer" className="social-icon"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </li>
                        <li className="ls">
                            <div className="icon-design icon-github">
                                <a href="https://github.com/davidzhangg" target="_blank" rel="noreferrer" className="social-icon"><i class="fab fa-github"></i></a>    
                            </div>
                        </li>
                        <li className="ls">
                            <div className="icon-design icon-insta">
                                <a href="https://www.instagram.com/davidd.zhang/" target="_blank" rel="noreferrer" className="social-icon"><i class="fab fa-instagram"></i></a>
                            </div>
                        </li>
                        <li className="ls">
                            <div className="icon-design icon-linkedin">
                                <a href="https://www.linkedin.com/in/davidzhang599/" target="_blank" rel="noreferrer" className="social-icon"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </li>
                        <li className="ls">
                            <div className="icon-design icon-email">
                                <a href="mailto:dza47@sfu.ca" className="social-icon"><i class="far fa-envelope"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="rocket">
                    <LinkS to='banner' smooth={true} duration={1000} className="rocket-up">
                        <AiOutlineRocket />
                    </LinkS>
                </div> 
                <h5 className='hidden-text'>Up and away!</h5>
            </div>
      </div>
    )
}

export default Footer
