import React from 'react'
import AppBar from '../components/AppBar'
import '../styles/education.css'
import { Link } from 'react-router-dom'

export const Education = () => {
  return (
    <>
      <AppBar />
      <div className='educationBox'>
        <div className='title'>
          <h1>Universidad de Castilla-La Mancha</h1>
          <h5> 2017-2022</h5>
        </div>
        <div className='subtitle'>
          <h2 >Software Engineering</h2>
          <h5>240 ECTs</h5>
          <Link to={"https://esi.uclm.es/index.php/grado-en-ingenieria-informatica/plan-de-estudios/"} target='__blank'>Study plan</Link>
        </div>
        <div>
          <p>
            I'm very grateful with this institution as I've been able to grow both as a person and as a profesional inside of
            the ESI (Escuela Superior de informatica), the Computer  Science Campus of Ciudad Real, where I completed the Computer
            Science degree with the software engineering specialization.
          </p>
          <p>
            During this stage of my career I learned both hard and soft skills that I've continued developing towards all my career.
            When I had to choose an specialization, I chose Software Engineering because I like the methodological approach of software
            towards quality, and following the software life cycle.
          </p>
          <p>
            I enrolled the  bilingual section, doing at least 40% of the ECTs in english, so I could improve my skills and gain confidence
            with this language.
          </p>
          <p>
            I graduated with a grade of 9 in the TFG, which I did while working on Globalsuite Solutions, where I created the infrastructure
            of a data wharehouse that we finally used to provide data through a dashboard.
          </p>
        </div>
        <div className='title'>
          <h1>Languages</h1>
        </div>
        <div className='subtitle'>
          <h2 >Cambridge First Certificate</h2>
        </div>
        <div>
          <p>
            I obtained this certificate that ensured my ability to communicate in english. I enjoy using the language so I studied partially in english and I use it everyday at work.
          </p>
        </div>
        <div className='title'>
          <h1>MongoDB</h1>
        </div>
        <div className='subtitle'>
          <h2 >M001 - MongoDB Basics</h2>
          <Link to='https://medium.com/@aspynlim/m001-mongodb-basics-summary-c8bed947aca2' target='_blank'>Course content (The course is archived)</Link>
        </div>
        <div className='subtitle'>
          <h2 >M103 - Basic Cluster Administration</h2>
          <Link to="https://learn.mongodb.com/courses/m103-basic-cluster-administration" target='_blank'>Course</Link>
        </div>
        <div className='title'>
          <h1>Google</h1>
        </div>
        <div className='subtitle'>
          <h2 >Mobile App Development Course</h2>
          <Link to="https://skillshop.exceedlms.com/student/collection/798207-apps" target='_blank'>Course</Link>
        </div>
        <div className='title'>
          <h1>Liferay</h1>
        </div>
        <div className='subtitle'>
          <h2 >Building Enterprise Websites with Liferay</h2>
          <Link to="https://learn.liferay.com/w/courses/building-enterprise-websites-with-liferay" target='_blank'>Course</Link>
        </div>
        <div className='title'>
          <h1>Udemy</h1>
        </div>
        <div className='subtitle'>
          <h2 >React: De cero a experto ( Hooks y MERN )</h2>
          <Link to="https://www.udemy.com/course/react-cero-experto/" target='_blank'>Course</Link>

        </div>
      </div>
    </>
  )
}
