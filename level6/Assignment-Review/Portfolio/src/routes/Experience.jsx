import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import MilitaryIcon from '@mui/icons-material/MilitaryTech'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='1999 - 2003'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Salamanca HS, Salamanca, New York
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2006 - 2011'
          iconStyle={{ background: '#728c69', color: '#fff' }}
          icon={<MilitaryIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            13D Field Artillery Tactical Data System Speciallist - US Army
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fort Hood, TX
          </h4>
          <p>Active Duty Service</p> 
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2012 - 2015'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            The Illinois Institute of Art - Schaumburg, Schaumburg, Illinois
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Game Art & Design</p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2017 - 2023'
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Armed Custom Patrol Officer - G4s Secure Solutions/Allied Universal Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Morris, IL
          </h4>
          <p>Provided Security Services under NRC Regulations</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023'
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            VSchool Technical School, Salt Lake City, Utah
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Certification
          </h4>
          <p>Full Stack Web Development</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;