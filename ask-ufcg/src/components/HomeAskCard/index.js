import React from 'react';

import './index.css';

class HomeAskCard extends React.Component {
  constructor(props) {
    super(props);
    this.ask = this.props.ask;
    console.log(this.ask);
  }

  render() {
    return (
      <div className="home-ask-card">
        <div className="user-home-ask-card">
          <img 
            src={this.ask.userphoto} 
            alt="abc"
            className="image-user-ask"
          />
          <p>{this.ask.username}</p>
        </div>
        <p className="ask-title">{this.ask.title}</p>
        <p className="ask-description">{this.ask.description}</p>
        <div className="ask-tags">
          {this.ask.tags.map((tag) => {
            return (<button className="ask-tag">{tag}</button>)
          })}
        </div>
      </div>
    );
  }
}

export default HomeAskCard;
