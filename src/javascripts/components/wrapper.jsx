import React from 'react'
import {render} from 'react-dom'
import { Index } from './index.jsx'
import { Content } from './content.jsx'

class Wrapper extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <Index />
        <Content />
      </div>
    )
  }
}

render(<Wrapper/>, document.getElementById('app'))
