import React from 'react'
import {render} from 'react-dom'
import { Item } from './item.jsx'

export class Index extends React.Component {
  render () {
    return (
      <div className='index'>
        <div className='index--content'>
          <h1 className='index--caption'>
            Tetsuya's Portfolio
          </h1>
          <div className='index--items'>
            <Item data={'profile'} />
            <Item data={'skill'} />
            <Item data={'job career'} />
            <Item data={'works'} />
          </div>
        </div>
      </div>
    )
  }
}
