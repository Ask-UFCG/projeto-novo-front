import React from 'react';

import { Divider } from 'antd';
import './index.css';
import { observer } from 'mobx-react';

const comment = {
  description: 'Acho que essa é uma boa ideia, Soldado.',
  userName: '@soldado76',
};

@observer
class Comment extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {};

  render() {
    return (
      <div className="answer-comment-card">
        <p className="comment-description">
          {comment.description}
        </p>
        <Divider />
        <p className="user-comment">
          Comentado por {comment.userName}
        </p>
      </div>
    );
  }
}

export default Comment;
