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
            今は主にWebエンジニアですが、社内ツールの作成もたまにやっています。
            <br />
            要件定義や設計・見積もり等の上流工程から、実際のコーディングの下流工程まで経験しています。最近はGoogle Analyticsを使ってプロダクトの品質改善することに興味持っています。

          </div>
        </div>
      </div>
    )
  }
}
