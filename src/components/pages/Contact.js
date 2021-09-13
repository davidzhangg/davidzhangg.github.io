import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Contact.css'

const Contact = () => {

    window.addEventListener("pageshow", () => {
        document.getElementById("myForm").reset();
    });

    return (
        <div className="wrapper">
            <div className="contact-form">
                <h1 className="hello-text">Say Hello!</h1>
                <form
                    action="https://formspree.io/f/xgeppyow"
                    method="POST"
                    id="myForm"
                >
                    <div className="txtb">
                        <label className="txtbox">E-mail :</label>
                        <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Email Address"
                        />
                        </div>
            
                    <div className="txtb">
                        <label className="txtbox">Subject :</label>
                        <input
                            type="text"
                            name="subject"
                            class="subject"
                            placeholder="Enter a Subject"
                        />
                    </div>
                    <div className="txtb">
                        <label className="txtbox">Message :</label>
                        <textarea name="message" className="message"></textarea>
                    </div>
            
                    <div className="status"></div>
                    <button type="submit" className="submit">Send</button>
                    <Link to="/" rel="noreferrer" className='home-button'>
                        <button className="home-page">
                            Home
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Contact
