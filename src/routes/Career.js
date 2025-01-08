import React from 'react'
import AppBar from '../components/AppBar'
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab'
import Typography from '@mui/material/Typography'
import LiferayLogo from '../assets/liferayLogo.png'
import GlobalsuiteLogo from '../assets/globalsuiteLogo.png'
import CirebitsLogo from '../assets/cirebitsLogo.png'
import UCLMLogo from '../assets/uclmLogo.png'
import '../styles/career.css'

export const Career = () => {
  return (
    <>
      <AppBar />
      <div className='timeline'>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              Oct 2022 -
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot sx={{ bgcolor: 'transparent' }}>
                <img className='companyLogo' src={LiferayLogo} alt='Liferay logo' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" fontWeight="bold">
                Liferay
              </Typography>
              <Typography>
                <p className='careerParagraph'>
                  Currently I am part of the infrastructure team in charge of Headless APIs, where I
                perform tasks related to product development, quality assurance and support,
                using Java, JSP, React and playwright among other tools.
                </p>
                <p className='careerParagraph'>
                  Previously I was part of the team in charge of components related to documents and content management
                as part of a Graduate Program where I acquired skills of QA, Frontend and Backend by joining the squads with those 
                responsabilities.
                </p>
                <p className='careerParagraph'>
                  I enjoy working on this OpenSource company, we face complex real world problems and manage to solve them. Everyday
                  brings some new challenges and the product is so big that we have to learn new things everyday.
                </p>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Feb 2022 - Oct 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: 'transparent' }}>
                <img className='companyLogo' src={GlobalsuiteLogo} alt='Globalsuite Logo' />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" fontWeight="bold">
                Globalsuite Solutions
              </Typography>
              <Typography>
                <p className='careerParagraph'>
                  In my university there was a program where you could develop your final degree project within a company, so I chose to do so in this company
                </p>
                <p className='careerParagraph'>
                    I developed an API to manage ETL processes using technologies like PHP, React, MariaDB and MongoDb, using innovative technologies like Timeseries with this last NoSQL database. The project was successful and I learnt a lot about real world architectures, workflows, code reviews and good practices.
                </p>
                <p className='careerParagraph'>
                  After that, I got hired by the company for researching and building the infrastructure of a data lake
                  using AWS services like AWS S3, AWS Glue and AWS Athena, as well as BI tools like
                  PowerBI, which we could accomplish.
                </p>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Feb 2021 - Mar 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: 'transparent' }}>
                <img className='companyLogo' src={UCLMLogo} alt='UCLMLogo' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" fontWeight="bold">
                UCLM (Castilla-La Mancha University)
              </Typography>
              <Typography>
                <p className='careerParagraph'>  
                  Part of a Blockchain research project focused on the Ethereum ecosystem. I used Truffle, Solidity and Metamask to set the basis of where the project would be constructed.
                </p>
                <p className='careerParagraph'>  
                  This was a valuable experience as it was my first experience with senior people on the team and they congrated me for my job.
                </p>
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              Nov 2018 - Jul 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: 'transparent' }}>
                <img className='companyLogo' src={CirebitsLogo} alt='Cirebits Logo' />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span" fontWeight="bold">
                Cirebits
              </Typography>
              <Typography>
                <p className='careerParagraph'>
                  Cirebits was a junior company, which is a company composed only by students of the university.
                </p>
                <p className='careerParagraph'>
                  I joined it because I liked the idea of meeting people in this environment while I gained experience in the web development world.
                </p>
                <p className='careerParagraph'>
                  During my first years I demoed tech stuff like Oculus rift, 3D printers, Holo Lens and big touchable smart TVs to people that came to visit the university, we did it for kids, teenagers and adults, in spanish or english, so this was a very valuable experience for me.
                </p>
                <p className='careerParagraph'>
                  I gained some more experience when a Wordpress contract came to us and I was up to do it, so I met with the client and created the website. This was also a very good experience and I learnt a lot about construction and deployment of websites.  
                </p> 
                <p className='careerParagraph'>
                  On my last years I grew on responsability becoming part of the board of directors and secretary, so I had to manage the other associates and attend meetings with potential clients.
                </p>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}
