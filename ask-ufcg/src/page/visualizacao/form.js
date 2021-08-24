import React from 'react';

import { observer } from 'mobx-react';
import './form.css';
import LeftMenu from '../../components/LeftMenu/';
import RightMenu from '../../components/RightMenu/';
import Answer from '../../components/Answer/answer.js';
import { Form, Input, Button, Spin } from 'antd';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ASK } from '../../stores/common/UrlRouter';
import VisualizacaoFormStore from '../../stores/visualizacao/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import { userContext } from '../../userContext';
import { ReactComponent as LikeIcon } from '../../assets/thumbs-up.svg';
import { ReactComponent as UnlikeIcon } from '../../assets/thumbs-down.svg';
import { getValueDateWithHours } from '../../utils/date';
import imageNotFound from '../../assets/perfil_not_found.png';

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
  }

  componentDidMount() {
    const { setTitle } = this.props;
    setTitle(ASK.text);
    this.store.init(this.props.match.params.id);
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
                  <div className='ask-container'>
                    <div className='ask-card'>
                      <div className='user-ask-card'>
                        <img
                          src={
                            this.store.object.author.linkAvatar ?? imageNotFound
                          }
                          alt='nome do usuario'
                        />
                        <p>
                          {this.store.object.author.firstName +
                            ' ' +
                            this.store.object.author.lastName}
                        </p>
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
                      {this.store.object.author.id === user.id ? (
                        ''
                      ) : (
                        <div>
                          <div className='vote-div'>
                            <button className='answer-tag-button'>
                              <LikeIcon className='tag-icon' /> {'12'}
                            </button>
                            <button className='answer-tag-button'>
                              <UnlikeIcon className='tag-icon' /> {'1'}
                            </button>
                          </div>
                          <div className='date-align'>
                            {'Postado em: ' +
                              getValueDateWithHours(
                                this.store.object.createdAt
                              )}
                          </div>
                        </div>
                      )}
                    </div>

                    <p className='answer-title'>Adicione uma resposta</p>

                    <div className='input-answer-card'>
                      <Form layout='vertical' ref={this.formRef}>
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
                        <Form.Item>
                          <Button
                            type='primary'
                            htmlType='submit'
                            className='style-button'
                            onClick={() =>
                              this.store.addAnswer(token, user, () =>
                                this.forceUpdate()
                              )
                            }
                          >
                            <MessageIcon className='sent-icon-answer' />
                            Enviar Resposta
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>

                    {this.store.object.answers ? (
                      this.store.object.answers.map((answer) => {
                        return (
                          <Answer
                            content={answer}
                            questionId={this.store.object.id}
                          />
                        );
                      })
                    ) : (
                      <p className='answer-title'>Sem Respostas :(</p>
                    )}
                  </div>
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
