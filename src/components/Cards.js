import React from 'react'
import CardItem from './CardItem'
import '../Styles/Cards.css'

const Cards = () => {

  return (
    <div className="portfolio-area" id="port">
      <div className="text-part">
        <h1 className="text-project">Projects</h1>
        <h5 className="subheader-text">(More to come!)</h5>
      </div>
      <div className="cards">
        <CardItem 
          src="/images/bigData.jpg"
          title="Smart Data Prep - Analytics"
          languages="TypeScript, React/Redux, Java, Apache Spark, MySQL, Scala"
          link="/dataprep"
          newTab=""
          alt="bigdata"
        />
        <CardItem 
          src="/images/website.png"
          title="Portfolio Website"
          languages="React, JavaScript, HTML, CSS"
          link="https://github.com/davidzhangg/davidzhangg.github.io"
          newTab="_blank"
          alt="website"
        />
        <CardItem 
          src="/images/2111624.png"
          title="Spotify Playlist"
          languages="React, JavaScript, Express, MySQL"
          link="https://github.com/davidzhangg/Spotify_Project"
          newTab="_blank"
          alt="spotify icon"
        />
        <CardItem 
          src="/images/iconfinder_Amazon_2062062.png"
          title="Amazon Price Tracker"
          languages="Python, Beautiful Soup, Request"
          link="https://github.com/davidzhangg/Amazon-Price-Tracker"
          newTab="_blank"
          alt="amazon logo"
        />
      </div>
      <div className="but">
        <a href="https://github.com/davidzhangg" target="_blank" rel="noreferrer" className="btnn btnn1">See More</a>
      </div>
    </div>
  )
}

export default Cards







