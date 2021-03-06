import React from 'react';

import { Divider } from 'antd';
import './index.css';
import { observer } from 'mobx-react';
import { getValueDateWithHours } from '../../utils/date';

@observer
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
  }

  render() {
    if (this.content) {
      return (
        <div className='answer-comment-card'>
          <p className='comment-description'>{this.content.content}</p>
          <Divider />
          <p className='user-comment'>
            {'Comentado por ' +
              this.content.author.firstName +
              ' ' +
              this.content.author.lastName +
              ' em ' +
              getValueDateWithHours(this.content.createdAt)}
          </p>
        </div>
      );
    }
    return 'Sem comentários';
  }
}

export default Comment;
