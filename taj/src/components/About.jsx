import React from 'react'
import AboutBackgroundfImage from "../assests/about-background-image.png"
import AboutBackground from "../assests/about-background.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'



function About() {
  return (
    <div className="about-section-container" id="a">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-conatiner">
            <img src={AboutBackgroundfImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">Food Is Important Part Of A Balanced Diet</h1>
            <p className="primary-text">
             Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
             elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
           </p>
           <p className="primary-text">
             Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
             facilisis at fringilla quam.
           </p>
           <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
                <BsFillPlayCircleFill/>Watch Video
            </button>
           </div>
        </div>
      
    </div>
  )
}

export default About
