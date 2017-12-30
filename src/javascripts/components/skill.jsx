import React from 'react'
import {render} from 'react-dom'

export class Skill extends React.Component {
  render () {
    return (
      <div className='skill'>
        <div className='skill--row'>
          <div className='skill--ruby'>
            Ruby
          </div>
          <div className='skill--python'>
            Python
          </div>
          <div className='skill--php'>
            PHP
          </div>
        </div>
        <div className='skill--row'>
          <div className='skill--html'>
            HTML
          </div>
          <div className='skill--css'>
            CSS
          </div>
          <div className='skill--javascript'>
            JavaScript
          </div>
        </div>
      </div>
    )
  }
}
