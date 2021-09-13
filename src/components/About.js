import React from 'react'
import '../Styles/About.css'


const About = () => {
  
    return (
        <div className="about-area" id="about">
            <div className="text-part">
                <h1 className="about-me">About Me</h1>
                    <p className="about-text">
                    Hey there, I'm David and I'm currently a 4th year computing science
                    student at Simon Fraser University. I'm not really great at school or academics, 
                    I'm just someone that's really passionate about programming. I
                    enjoy working with new technologies and creating meaningful experiences through my work. During my
                    free time, I like to play basketball, code, and hang with friends.
                    <br />
                    <br />
                    Feel free to check out my resume!
                    </p>
            </div>
            <section className="resume-part">
                <a href="https://docs.google.com/document/d/1PqMuVdk_oqHz_Tj_Hj2Wio1mRVVyLhWa-SBX_TrtnnY/export?format=pdf" target="_blank" rel="noreferrer" className="resume-icon"><i class="far fa-file"></i></a>
                <p className="resume-text">
                    (Resume)
                </p>
            </section>
            <section className="interests">
                <h3 className="interest-header">Interests</h3>
                <div className="interest-wrapper">
                    <figure className="hobby-icon">
                        <i class="fas fa-laptop"></i>
                        <figcaption className="hobby-name">
                            Coding
                        </figcaption>
                    </figure>
                    <figure className="hobby-icon">
                        <i class="fas fa-basketball-ball"></i>
                        <figcaption className="hobby-name">
                            Basketball
                        </figcaption>
                    </figure>
                    <figure className="hobby-icon">
                        <i class="fas fa-plane-departure"></i>
                        <figcaption className="hobby-name">
                            Travel
                        </figcaption>
                    </figure>
                </div>
            </section>
                 
        </div>
    )
}

export default About
