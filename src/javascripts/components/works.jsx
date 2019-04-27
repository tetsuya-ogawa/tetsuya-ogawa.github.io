import React from 'react'
import {render} from 'react-dom'

export class Works extends React.Component {
  render () {
    return (
      <div className='works'>
        <div className='works--history'>
          新規事業系プロジェクトマネージャー
        </div>
        <div className='works--history'>
          Ruby on Railsで新規事業立ち上げ・開発
        </div>
        <div className='works--history'>
          Ruby on Railsで既存自社サービス・受託案件開発
        </div>
        <div className='works--history'>
          PHPで受託改修案件の開発
        </div>
        <div className='works--history'>
          自社プライベートDMPの構築
        </div>
        <div className='works--history'>
          etc...
        </div>
      </div>
    )
  }
}
