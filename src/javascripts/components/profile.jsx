import React from 'react'
import {render} from 'react-dom'

export class Profile extends React.Component {
  render () {
    return (
      <div className='profile'>
        <div className='profile--image'>
          <img src='public/profile.jpg' className='profile--image__fit-parent' />
        </div>
        <div className='profile--detail'>
          <div className='profile--basic-info'>
            小川徹也 - Ogawa Tetsuya
          </div>
          <div className='profile--description'>
            大学生からプログラミングをはじめ、大学近くのベンチャー企業でインターンを始めました。自分の技術で人々が便利だなと思ってくれることが楽しくて今もエンジニアをしています。
            現職では主にWebエンジニアをしつつも、事業企画・運用などメインにやっています。
          </div>
        </div>
      </div>
    )
  }
}
