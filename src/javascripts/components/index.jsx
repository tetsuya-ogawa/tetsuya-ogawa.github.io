import React from 'react'
import {render} from 'react-dom'
import { Item } from './item.jsx'

export class Index extends React.Component {
  render () {
    return (
      <div className='index'>
        <div className='index--items'>
          <Item data={'profile'} />
          <Item data={'skill'} />
          <Item data={'job career'} />
          <Item data={'works'} />
        </div>
      </div>
    )
  }
}
