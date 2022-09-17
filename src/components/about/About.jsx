import React from 'react';
import './about.css';
import profile from '../../assets/profile.jpg'
import {BiAward} from 'react-icons/bi'
import {TbBarbell} from 'react-icons/tb'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile} alt="Andrew Mason" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Jr. Developer</small>
            </article>
            <article className='about__card'>
              <TbBarbell className='about__icon'/>
              <h5>Strengths</h5>
              <small>Collaborative<br />Detail-Oriented<br />Adaptable</small>
            </article>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>UC Berkeley<br />Full Stack Coding Bootcamp</small>
            </article>
          </div>

          <p>Full Stack Developer with a background in Management Consulting. I am looking to leverage my development skills to provide web applications that support business initiatives. Earned a certificate in web development from the University of California, Berkeley. Skilled in JavaScript, CSS, HTML5, MySQL, MongoDB, Node.js, Express, React, OOP, MVC, among other technologies.</p>
          <p>My management consulting experience has made me highly proficient working with teams of up to 20 people to create dynamic and lasting business solutions. Recognized as a results-driven, resourceful, and persistent problem-solver. Excellent communicator with effective relationship-building skills. I bring a strong technical acumen, along with a tenacity and desire to learn, grow and achieve in any endeavor, making me an asset to any organization or community I am a member of.</p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
