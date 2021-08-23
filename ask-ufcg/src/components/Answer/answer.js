import React from 'react';

import { Button, Divider, Form, Input, Spin } from 'antd';
import { observer } from 'mobx-react';
import Answer from '../../domain/answer';
import AnswerService from '../../services/answer';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ReactComponent as LikeIcon } from '../../assets/thumbs-up.svg';
import { ReactComponent as UnlikeIcon } from '../../assets/thumbs-down.svg';
import Comment from '../Comment/index.js';
import './answer.css';
import AnswerFormStore from '../../stores/answer/form';

@observer
class AnswerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.store = new AnswerFormStore(Answer, AnswerService, 'Resposta ');
  }

  componentDidMount() {
    this.store.init(this.props.content);
  }

  render() {
    if (this.store.object) {
      return (
        <div className='answer-content'>
          <div className='answer-card'>
            <div className='user-answer-card'>
              <img
                src={this.store.object.author.linkAvatar}
                alt='nome do usuario'
                className='image-user-ask-card'
              />
              <p>
                {this.store.object.author.firstName +
                  ' ' +
                  this.store.object.author.lastName}
              </p>
            </div>
            <p clasName='answer-description'>{this.store.object.content}</p>
            <Divider />
            <div className='answer-engage-buttons'>
              <button className='answer-tag-button'>
                <LikeIcon className='tag-icon' /> {'12'}
              </button>
              <button className='answer-tag-button'>
                <UnlikeIcon className='tag-icon' /> {'1'}
              </button>
            </div>
          </div>
          {this.store.object.comments
            ? this.store.object.comments.map((comment) => (
                <Comment còntent={comment} />
              ))
            : ''}
          <div className='input-comment-card'>
            <Form>
              <Form.Item>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='style-button'
                >
                  <MessageIcon className='sent-icon-answered' />
                  Enviar Comentário
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    } else {
      return <Spin />;
    }
  }
}

export default AnswerComponent;
