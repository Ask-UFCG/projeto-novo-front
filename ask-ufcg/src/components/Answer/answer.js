import React from 'react';

import { Button, Divider, Form, Input, Checkbox } from 'antd';
import { observer } from 'mobx-react';
import Answer from '../../domain/answer';
import AnswerService from '../../services/answer';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ReactComponent as LikeIcon } from '../../assets/thumbs-up.svg';
import { ReactComponent as UnlikeIcon } from '../../assets/thumbs-down.svg';
import Comment from '../Comment/index.js';
import './answer.css';
import AnswerFormStore from '../../stores/answer/form';
import { userContext } from '../../userContext';
import { getValueDateWithHours } from '../../utils/date';
import imageNotFound from '../../assets/perfil_not_found.png';
import { CheckCircleOutlined } from '@ant-design/icons';

@observer
class AnswerComponent extends React.Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.store = new AnswerFormStore(Answer, AnswerService, 'Resposta ');
    this.idAuthorQuestion = this.props.idAuthorQuestion;
  }

  componentDidMount() {
    const { content } = this.props;
    this.store.init(content);
  }

  render() {
    if (this.store.object) {
      return (
        <userContext.Consumer>
          {({ user, token }) => {
            return (
              <div className='answer-content'>
                <div className='answer-card'>
                  <div className='user-answer-card'>
                    <img
                      src={this.store.object.author.linkAvatar ?? imageNotFound}
                      alt='nome do usuario'
                    />
                    <p>
                      {this.store.object.author.firstName +
                        ' ' +
                        this.store.object.author.lastName}
                    </p>
                    <div className='user-answer-card-solved'>
                      {this.store.object.solution ? (
                        <CheckCircleOutlined
                          style={{ color: 'green', fontSize: '200%' }}
                        />
                      ) : this.idAuthorQuestion === user.id ? (
                        <Button
                          style={{ backgroundColor: '#47ff85' }}
                          onClick={() => {
                            this.store.updateAttributeDecoratorKeyValue(
                              'solution',
                              true
                            );
                            this.store.markAsSolution(
                              token,
                              this.forceUpdate()
                            );
                          }}
                        >
                          Marcar como solução
                        </Button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <p className='answer-description'>
                    {this.store.object.content}
                  </p>
                  <Divider />
                  <div className='answer-engage-buttons'>
                    <button className='answer-tag-button'>
                      <LikeIcon className='tag-icon' /> {'12'}
                    </button>
                    <button className='answer-tag-button'>
                      <UnlikeIcon className='tag-icon' /> {'1'}
                    </button>
                  </div>
                  <div className='date-align'>
                    {'Postada em: ' +
                      getValueDateWithHours(this.store.object.createdAt)}
                  </div>
                </div>
                {this.store.object.comments
                  ? this.store.object.comments.map((comment) => (
                      <Comment content={comment} />
                    ))
                  : ''}
                <div className='input-comment-card'>
                  <Form
                    onFinish={() => this.onFinish(user, token)}
                    layout='vertical'
                    ref={this.formRef}
                  >
                    <Form.Item>
                      <Input
                        value={this.store.comment.content}
                        onChange={(value) => {
                          this.store.updateAttributeDecoratorKeyCommentEventValue(
                            'content',
                            value
                          );
                        }}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type='primary'
                        htmlType='submit'
                        className='style-button'
                        onClick={() =>
                          this.store.addComment(user, token, () =>
                            this.forceUpdate()
                          )
                        }
                      >
                        <MessageIcon className='sent-icon-answered' />
                        Enviar Comentário
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            );
          }}
        </userContext.Consumer>
      );
    }
    return '';
  }
}

export default AnswerComponent;
