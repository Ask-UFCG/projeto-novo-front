import React from 'react'
import { ASK } from '../../stores/common/UrlRouter'
import './index.css'
import { getValueDateWithHours } from '../../utils/date'
import imageNotFound from '../../assets/perfil_not_found.png'

class HomeAskCard extends React.Component {
  constructor(props) {
    super(props)
    this.ask = this.props.ask
  }

  render() {
    return (
      <div className="home-ask-card">
        <div className="user-home-ask-card">
          <object data={this.ask.userphoto} type="image/png" className="image-user-ask">
            <img src={imageNotFound} alt="Imagem não encontrada" className="image-user-ask" />
          </object>

          <p>{this.ask.username}</p>
        </div>
        <a className="ask-link" href={ASK.route.replace(':id', this.ask.id)}>
          <p className="ask-title">{this.ask.title}</p>
        </a>
        <p className="ask-description">{this.ask.description}</p>
        <div className="ask-tags">
          {this.ask.tags.map((tag) => {
            return <button className="ask-tag">{tag}</button>
          })}
        </div>
        <div className="date-align">
          {'Postada em: ' + getValueDateWithHours(this.ask.createdAt)}
        </div>
      </div>
    )
  }
}

export default HomeAskCard
