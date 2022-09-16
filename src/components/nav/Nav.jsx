import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiAward} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><FiAward/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
