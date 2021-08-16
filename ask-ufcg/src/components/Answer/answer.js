import React from 'react';

import { Button, Divider, Form, Input } from 'antd';
import { observer } from 'mobx-react';

import { ReactComponent as MessageIcon }
from '../../assets/message-square.svg';
import { ReactComponent as LikeIcon }
from '../../assets/thumbs-up.svg';
import { ReactComponent as UnlikeIcon }
from '../../assets/thumbs-down.svg';

import Comment from '../Comment/index.js';

import './answer.css';

import PhotoUser from '../../assets/profile.jpg';

const comment = {
  description: 'Acho que essa é uma boa ideia, Soldado.',
  userName: '@soldado76',
};

const answer = {
  userPhoto: PhotoUser,
  userName: 'Soldado Reyes',
  description: 'Você pode segurar o halter com 2 mãos e aplicar uma força ortogonal ao chão, sem curvar a coluna.',
  comments: [comment, comment, comment],
};

@observer
class Answer extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {};

  render() {
    return (
      <div className="answer-content">

        <div className="answer-card">
          <div className="user-answer-card">
            <img
              src={answer.userPhoto}
              alt='nome do usuario'
              className="image-user-ask-card"
            />
            <p>{answer.userName}</p>
          </div>
          <p clasName="answer-description">{answer.description}</p>
          <Divider />
          <div className="answer-engage-buttons">
            <button className="answer-tag-button">
              <LikeIcon className="tag-icon" /> {'12'}
            </button>
            <button className="answer-tag-button">
              <UnlikeIcon className="tag-icon" /> {'1'}
            </button>
          </div>
        </div>

        {answer.comments.map((comment) => 
          <Comment />
        )}

        <div className="input-comment-card">
          <Form>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="style-button"
              >
                <MessageIcon className="sent-icon-answered" />
                Enviar Comentário
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Answer;
