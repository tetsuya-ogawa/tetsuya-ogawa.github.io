import React from 'react'
import {render} from 'react-dom'

export class JobCareer extends React.Component {
  render () {
    return (
      <div className='job-career'>
        <div className='job-career--company'>
          株式会社ユニキャスト（Intern）
        </div>
        <div className='job-career--company'>
          Web系ITベンチャー企業
        </div>
      </div>
    )
  }
}
