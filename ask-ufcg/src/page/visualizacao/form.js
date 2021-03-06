import React from 'react';

import { observer } from 'mobx-react';
import './form.css';
import LeftMenu from '../../components/LeftMenu/';
import RightMenu from '../../components/RightMenu/';
import Answer from '../../components/Answer/answer.js';
import { Form, Input, Button, Spin, Tooltip } from 'antd';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ASK } from '../../stores/common/UrlRouter';
import VisualizacaoFormStore from '../../stores/visualizacao/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import { userContext } from '../../userContext';
import { getValueDateWithHours } from '../../utils/date';
import imageNotFound from '../../assets/perfil_not_found.png';
import {
  CheckCircleOutlined,
  LikeOutlined,
  DislikeOutlined,
} from '@ant-design/icons';
@observer
class Visualizacao extends React.Component {
  formRef = React.createRef();
  constructor() {
    super();
    this.store = new VisualizacaoFormStore(
      Pergunta,
      PerguntaService,
      'Questão '
    );
    this.state = { showInputAnswer: false };
  }

  componentDidMount() {
    const { setTitle } = this.props;
    setTitle(ASK.text);
    this.store.init(this.props.match.params.id);
  }

  _handleShowInputAnswer() {
    this.setState((oldState) => ({
      showInputAnswer: !this.state.showInputAnswer,
    }));
  }

  render() {
    if (this.store.object) {
      return (
        <userContext.Consumer>
          {({ user, token }) => {
            return (
              <div className='ask-page'>
                <LeftMenu />
                <div className='main-ask-content'>
                  <Form layout='vertical' ref={this.formRef}>
                    <div className='ask-container'>
                      <div className='ask-card'>
                        <div className='user-ask-card'>
                          <img
                            src={
                              this.store.object.author.linkAvatar ??
                              imageNotFound
                            }
                            alt='nome do usuario'
                          />
                          <p>
                            {this.store.object.author.firstName +
                              ' ' +
                              this.store.object.author.lastName}
                          </p>
                          <div className='main-answer-card-solved'>
                            {this.store.object.answered ? (
                              <Tooltip title='Questão resolvida'>
                                <CheckCircleOutlined
                                  style={{ color: 'green', fontSize: '200%' }}
                                ></CheckCircleOutlined>
                              </Tooltip>
                            ) : !user ? (
                              ''
                            ) : this.store.object.author.id === user.id ? (
                              <Button
                                style={{ backgroundColor: '#47ff85' }}
                                onClick={() => {
                                  this.store.updateAttributeDecoratorKeyValue(
                                    'answered',
                                    true
                                  );
                                  this.store.markAsSolved(token);
                                }}
                              >
                                Marcar como resolvida
                              </Button>
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                        <p className='ask-title'>
                          {this.store.object.title ?? ''}
                        </p>
                        <p className='ask-description'>
                          {this.store.object.content ?? ''}
                        </p>
                        <div className='ask-tags'>
                          {this.store.askTags.map((tag) => {
                            return <button className='ask-tag'>{tag}</button>;
                          })}
                        </div>

                        <div>
                          <div className='vote-div'>
                            <Tooltip title='Like'>
                              <button
                                className='answer-tag-button'
                                onClick={() =>
                                  this.store.addLikeToQuestion(user, token)
                                }
                              >
                                <LikeOutlined
                                  className='tag-icon'
                                  style={
                                    user &&
                                    this.store.checkIfUserIdInUsersLikedQuestion(
                                      user.id
                                    )
                                      ? { color: 'blue' }
                                      : {}
                                  }
                                />
                                {this.store.object.qtdLikes}
                              </button>
                            </Tooltip>
                            <Tooltip title='Dislike'>
                              <button
                                className='answer-tag-button'
                                onClick={() =>
                                  this.store.addDislikeToQuestion(user, token)
                                }
                              >
                                <DislikeOutlined
                                  className='tag-icon'
                                  style={
                                    user &&
                                    this.store.checkIfUserIdInUsersDislikedQuestion(
                                      user.id
                                    )
                                      ? { color: 'red' }
                                      : {}
                                  }
                                />
                                {this.store.object.qtdDislikes}
                              </button>
                            </Tooltip>
                          </div>
                          <div className='date-align'>
                            {'Postado em: ' +
                              getValueDateWithHours(
                                this.store.object.createdAt
                              )}
                            <div className='main-question-add-answer'>
                              {user ? (
                                <Button
                                  type='primary'
                                  htmlType='submit'
                                  className='style-button'
                                  onClick={() => this._handleShowInputAnswer()}
                                >
                                  <MessageIcon className='sent-icon-answer' />
                                  {this.state.showInputAnswer
                                    ? 'Cancelar'
                                    : 'Adicionar uma Resposta'}
                                </Button>
                              ) : (
                                ''
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p
                        style={
                          !this.state.showInputAnswer ? { display: 'none' } : {}
                        }
                        className='answer-title'
                      >
                        Adicione uma resposta
                      </p>
                      <div
                        style={
                          !this.state.showInputAnswer ? { display: 'none' } : {}
                        }
                        className='input-answer-card'
                      >
                        <Form.Item>
                          <Input
                            onChange={(value) =>
                              this.store.updateAttributeAnswerDecoratorKeyEventValue(
                                'content',
                                value
                              )
                            }
                          />
                        </Form.Item>
                        {user ? (
                          <Form.Item>
                            <Button
                              type='primary'
                              htmlType='submit'
                              className='style-button'
                              onClick={() => {
                                this.store.addAnswer(token, user, () =>
                                  this._handleShowInputAnswer()
                                );
                              }}
                            >
                              <MessageIcon className='sent-icon-answer' />
                              Responder
                            </Button>
                          </Form.Item>
                        ) : (
                          ''
                        )}
                      </div>

                      {this.store.object.answers ? (
                        this.store.object.answers.map((answer) => {
                          return (
                            <Answer
                              content={answer}
                              idAuthorQuestion={this.store.object.author.id}
                            />
                          );
                        })
                      ) : (
                        <p className='answer-title'>Sem Respostas :(</p>
                      )}
                    </div>
                  </Form>
                </div>
                <RightMenu />
              </div>
            );
          }}
        </userContext.Consumer>
      );
    } else {
      return <Spin />;
    }
  }
}

export default Visualizacao;
