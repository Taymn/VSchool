import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {/* <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon /> */}
            <a href='https://www.linkedin.com/in/adam-taylor-b0254a70/' target='_blank'>
            <LinkedInIcon />
          </a>
        </div>
        <p style={{fontSize: 30}}>&copy; 2023 Adam Taylor</p>
    </div>
  )
}

export default Footer