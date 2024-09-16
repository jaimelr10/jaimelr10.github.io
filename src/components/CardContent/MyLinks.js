import React from 'react'
import GitHub from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Playstore from '../../assets/playsotre.png'

export const MyLinks = () => {
  return (
    <>
    <div>
      <span>
        <a href='https://www.linkedin.com/in/jaime-le%C3%B3n-rosado-46467a117/'> Linkedin </a>
        <img src={Linkedin} width={20} />
      </span>
    </div>
    <div>
    <span>
      <a href='https://github.com/jaimelr10'>Github</a>
      <img src={GitHub} width={20} />
    </span>
    </div>
    <div>
    <span>
      <a href='https://play.google.com/store/apps/developer?id=Jaime+Le%C3%B3n&hl=es_419&gl=US'> Playstore </a>
      <img src={Playstore} width={20} />
    </span>
    </div>
  </>
  )
}
