import React from 'react'
import './portfolio.css'
// import portfolio project images
import taskmanager from '../../assets/taskmanager.gif'
import hungrysharks from '../../assets/hungrysharks.gif'
import bookend from '../../assets/bookend.jpeg'
import techblog from '../../assets/techblog.jpeg'
import texteditor from '../../assets/texteditor.jpeg'
import socialnetwork from '../../assets/socialnetwork.jpeg'
import ecomm from '../../assets/ecomm.jpeg'
import ems from '../../assets/ems.jpeg'

const data = [
  {
    id: 1,
    image: taskmanager,
    title: 'Task Manager',
    github: 'https://github.com/atmason90/task-manager',
    demo: 'https://drive.google.com/file/d/1537rwxcusjiyKSdBIf_pWVk4laDyaGDL/view?usp=sharing'
  },
  {
    id: 2,
    image: hungrysharks,
    title: 'Hungry Sharks Card Game',
    github: 'https://github.com/atmason90/hungry-sharks',
    demo: 'https://hungryshark.herokuapp.com/'
  },
  {
    id: 3,
    image: bookend,
    title: 'Bookend Social Media App',
    github: 'https://github.com/atmason90/bookend',
    demo: 'https://glacial-plateau-74113.herokuapp.com/'
  },
  {
    id: 4,
    image: techblog,
    title: 'Tech Blog App',
    github: 'https://github.com/atmason90/tech-blog-app',
    demo: 'https://the-tech-blog-am.herokuapp.com/'
  },
  {
    id: 5,
    image: texteditor,
    title: 'Text Editor Progressive Web App',
    github: 'https://github.com/atmason90/text-editor',
    demo: 'https://editmytext.herokuapp.com/'
  },
  {
    id: 6,
    image: ecomm,
    title: 'E-Commerce Backend API',
    github: 'https://github.com/atmason90/e-comm-back-end',
    demo: 'https://drive.google.com/file/d/1KBD6tlB82vbEWURTLGDzOHshITIDAft2/view?usp=sharing'
  },
  {
    id: 7,
    image: ems,
    title: 'Team Profile Generator',
    github: 'https://github.com/atmason90/team-profile-generator',
    demo: 'https://user-images.githubusercontent.com/99947655/165204617-ddd7d97b-8db4-4af3-b01e-8de7900dcdaa.mp4'
  },
  {
    id: 8,
    image: socialnetwork,
    title: 'Social Network Backend API',
    github: 'https://github.com/atmason90/social-network-api',
    demo: 'https://user-images.githubusercontent.com/99947655/169758282-4292a54e-8e30-4d30-ab04-9b888abc0745.mp4'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
