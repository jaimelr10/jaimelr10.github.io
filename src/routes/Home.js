import React from 'react'
import AppBar from '../components/AppBar'
import myPic from '../assets/me.png'
import { FAQs } from '../components/FAQs.js'
import '../styles/home.css'

export const Home = () => {
  return (
    <>
    <AppBar />
    <div className='container'>
      <img className='myPic' src={myPic} alt='Me in my workstation'/>
      <FAQs />
    </div>
    </>
  )
}
