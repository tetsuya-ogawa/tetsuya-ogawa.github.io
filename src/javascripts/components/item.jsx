import React from 'react'
import {render} from 'react-dom'

export const Item = (props) => (
  <div className='item'>
    {props.data}
  </div>
);
