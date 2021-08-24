import React from 'react';
import { ASK } from '../../stores/common/UrlRouter';
import './index.css';
import { getValueDateWithHours } from '../../utils/date';
import imageNotFound from '../../assets/perfil_not_found.png';

class HomeAskCard extends React.Component {
  constructor(props) {
    super(props);
    this.ask = this.props.ask;
  }

  goToAskPage = () => {
    this.props.history.push(ASK.route.replace(':id', this.ask.id));
  };

  render() {
    return (
      <div className='home-ask-card'>
        <div className='user-home-ask-card'>
          <img
            src={this.ask.userphoto ?? imageNotFound}
            alt='abc'
            className='image-user-ask'
          />
          <p>{this.ask.username}</p>
        </div>
        <a className='ask-link' onClick={() => this.goToAskPage()}>
          <p className='ask-title'>{this.ask.title}</p>
        </a>
        <p className='ask-description'>{this.ask.description}</p>
        <div className='ask-tags'>
          {this.ask.tags.map((tag) => {
            return <button className='ask-tag'>{tag}</button>;
          })}
        </div>
        <div className='date-align'>
          {'Postada em: ' + getValueDateWithHours(this.ask.createdAt)}
        </div>
      </div>
    );
  }
}

export default HomeAskCard;
