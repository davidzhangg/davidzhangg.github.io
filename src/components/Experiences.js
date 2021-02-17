import React from 'react'
import '../Styles/Experiences.css'
import { SiTypescript } from "react-icons/si";


const Experiences = () => {

    return (
        <div className="exp-area" id="experience">
            <div className="text-part">
                <h1 className="text-experience">Experiences</h1>
            </div>
            <section className="container">
                <figure className="icon-wrapper">
                    <i class="fas fa-code"></i>
                    <h5 className="headername">Development</h5>
                    <figcaption className="description">
                    With computer science as my strong field of interest, 
                    I'm passionate about building and developing applications, and interested in software development. 
                    As I continue to grow as a developer, 
                    I hope to write clean code on a professional scale to produce innovative softwares.
                    </figcaption>
                </figure>
                <figure className="icon-wrapper">
                    <i class="fas fa-lightbulb"></i>
                    <h5 className="headername">Innovation</h5>
                    <figcaption className="description">
                    In the world of big data, I want to create something that allows buisnesses to better predict and analyze their customer's behaviours
                    based on customer's insights. 
                    What I've been building right now is a smart data prep table where buisness users can use to analyze and prepare for data analysis.
                    </figcaption>
                </figure>
                <figure className="icon-wrapper">
                    <i class="fas fa-school"></i>
                    <h5 className="headername">Education</h5>
                    <figcaption className="description">
                    At Simon Fraser University, I've taken many data structures and algorithm courses that strengthened my understanding of how fundamental problems can 
                    be solved, thereby allowing me to have a deeper understanding of the nature of a problem.
                    </figcaption>
                </figure>
            </section>
            <section className="tech-wrapper">
                <h4 className="tech-header">SOME TECHNOLOGIES I'VE WORKED WITH:</h4>
                <div className="topics-row">
                    <div className="btn btnn-react">
                        <i class="fab fa-react"></i>
                    </div>
                    <div className="btn btnn-js">
                        <i class="fab fa-js"></i>
                    </div>
                    <div className="btn btnn-python">
                        <i class="fab fa-python"></i>
                    </div>
                    <div className="btn btnn-java">
                        <i class="fab fa-java"></i>
                    </div>
                    <div className="btn btnn-html">
                        <i class="fab fa-html5"></i>
                    </div>
                    <div className="btn btnn-css">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <div className="btn btnn-database">
                        <i class="fas fa-database"></i>
                    </div>
                    <div className="btn">
                        <div className="btnn-typescript">
                            <SiTypescript />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Experiences

