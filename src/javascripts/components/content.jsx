import React from 'react'
import {render} from 'react-dom'
import { ContentTitle } from './content_title.jsx'
import { Profile } from './profile.jsx'
import { Skill } from './skill.jsx'
import { JobCareer } from './job_career.jsx'
import { Works } from './works.jsx'

export class Content extends React.Component {
  render () {
    return (
      <div className='content'>
        <ContentTitle data={'Profile'} />
        <Profile />
        <ContentTitle data={'Skill'} />
        <Skill />
        <ContentTitle data={'JobCareer'} />
        <JobCareer />
        <ContentTitle data={'Works'} />
        <Works />
      </div>
    )
  }
}
