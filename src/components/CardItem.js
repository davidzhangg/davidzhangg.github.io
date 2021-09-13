import React from 'react'
import '../Styles/Cards.css'
import { Link } from "react-router-dom"


const CardItem = (props) => {

  if (props.link[0] === "/") {
    return (
      <>
        <Link className='cards__item__link' to={props.link} target={props.newTab} rel="noreferrer">
          <div className="flip-card">
            <div className="front">
              <div className="img-holder">
                <img
                    className='cards__item__img'
                    src={props.src}
                    alt={props.alt}
                  />
              </div>
              <div className="content">
                <h3 className="project_name">{props.title}</h3>
                <p className="card_languages">{props.languages}</p>
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  }

  else {
      return (
      <>
        <a className='cards__item__link' href={props.link} target={props.newTab} rel="noreferrer">
          <div className="flip-card">
            <div className="front">
              <div className="img-holder">
                <img
                    className='cards__item__img'
                    src={props.src}
                    alt={props.alt}
                  />
              </div>
              <div className="content">
                <h3 className="project_name">{props.title}</h3>
                <p className="card_languages">{props.languages}</p>
              </div>
            </div>
          </div>
        </a>
      </>
    )
  }
}

export default CardItem
