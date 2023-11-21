import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Adam</h2>
        <div className='prompt'>
          <p>A web developer with a passion for learning and solving problems.</p>
          <a href='https://www.linkedin.com/in/adam-taylor-b0254a70/' target='_blank'>
            <LinkedInIcon />
          </a>
          <a>
            <EmailIcon />
          </a>
          <a href='https://github.com/Taymn' target='_blank'>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>

        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Soft Skills</h2>
            <span>
              Team Lead, Trainer, Coordinate with management and employees, Report writing, Oversea reporting, Scheduling, Performance evaluations
            </span>
          </li>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML5, CSS3, NPM, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, Mongoose, Authorization, bcrypt
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript ES6</span>
          </li>
          <li className='item'>
            <h2>Debugging</h2>
            <span>Postman, Morgan, Dev Tools</span>
          </li>
          <li className='item'>
            <h2>Version Control</h2>
            <span>GitHub</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home