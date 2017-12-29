import React from 'react'
import {render} from 'react-dom'
import { Index } from './index.jsx'

class Wrapper extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <Index />
      </div>
    )
  }
}

render(<Wrapper/>, document.getElementById('app'))
