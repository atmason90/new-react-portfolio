import React from 'react';
import './about.css';
import profile from '../../assets/profile.png'
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

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione laborum iure molestiae maiores neque inventore minima tempore dolores dolorem vero perspiciatis atque excepturi est possimus nobis illum quo, odit pariatur!</p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
