import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8i5ewdv', 'template_mhvcjkh', form.current, 'PNdxeYxRQqaj6Buh4')
    e.target.reset()
  };
  
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>atmason90@gmail.com</h5>
          <a href="mailto:atmason90@gmail.com" target='#'>Send a Message</a>
        </article>
        <article className='contact__option'>
          <AiOutlinePhone className='contact__option-icon' />
          <h4>Telephone</h4>
          <h5>+1 603-748-2601</h5>
          <a href="tel:+16037482601">Give Me a Call</a>
        </article>
        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <h5>Let's Connect</h5>
          <a href="https://www.linkedin.com/in/andrewmason0529/" target='#'>View My Profile</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
