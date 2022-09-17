import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANDREW MASON</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/andrewmason0529/" target='#'>
          <BsLinkedin />
        </a>
        <a href="https://github.com/atmason90" target='#'>
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Andrew Mason. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
