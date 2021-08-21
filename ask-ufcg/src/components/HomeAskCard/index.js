import React from 'react';
import { ASK, HOME, PROFILE } from '../../stores/common/UrlRouter';

import './index.css';

class HomeAskCard extends React.Component {
  constructor(props) {
    super(props);
    this.ask = this.props.ask;
    this.props = this.props;
  }

  goToAskPage = () => {
    this.props.history.push(ASK.route.replace(':id', this.ask.id));
  };

  render() {
    return (
      <div className='home-ask-card'>
        <div className='user-home-ask-card'>
          <img src={this.ask.userphoto} alt='abc' className='image-user-ask' />
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
      </div>
    );
  }
}

export default HomeAskCard;
