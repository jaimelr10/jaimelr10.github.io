import React from 'react'
import AppBar from '../components/AppBar'
import { Link } from 'react-router-dom'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import PlayStore from '../assets/playsotre.png'
import '../styles/contact.css'

export const Contact = () => {
  return (
    <>
    <AppBar />
    <div className='contact'>
      <h4>You can check out some of my work here and contact me on 4ajaimeleon@gmail.com</h4>
        <Link to='https://github.com/jaimelr10' target='_blank'>
          <img src={Github} alt='Github'/>
        </Link>
        <Link to='https://www.linkedin.com/in/jaime-leon-rosado/' target='_blank'>
          <img src={Linkedin} alt='Linkedin'/>
        </Link>
        <Link to='https://play.google.com/store/apps/developer?id=Jaime+Le%C3%B3n&hl=es' target='_blank'>
          <img src={PlayStore} alt='PlayStore'/>
        </Link>
      </div>
    </>
  )
}
