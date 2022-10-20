import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/andrewmason0529/" target="#"><BsLinkedin/></a>
        <a href="https://github.com/atmason90" target="#"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
