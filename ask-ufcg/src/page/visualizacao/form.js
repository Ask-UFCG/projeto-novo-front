import React from 'react';

import { observer } from 'mobx-react';

import './form.css';

import LeftMenu from '../../components/LeftMenu/';
import RightMenu from '../../components/RightMenu/';
import Answer from '../../components/Answer/answer.js';
import { Form, Input, Button, Spin, Avatar } from 'antd';
import imageNotFound from '../../assets/link_not_valid.jpg';
import photoPic from '../../assets/profile.jpg';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ASK } from '../../stores/common/UrlRouter';
import VisualizacaoFormStore from '../../stores/visualizacao/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import { userContext } from '../../userContext';
import { UserOutlined } from '@ant-design/icons';

const ask = {
  userphoto: photoPic,
  username: 'Aleksandra Zaryanova',
  title: 'Como levantar um halter na academia?',
  description:
    'To querendo ficar blindão mas não faço a mínima ideia de como levantar uma halter na academia. Qual a densidade de um barra de ferro com volume de 12cm cubicos e massa de 600g?',
  tags: ['halter', 'academia', 'fitness', 'instagram', 'saudavel'],
};

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

  _checkImgOnline = (avatar) => {
    const img = new Image();
    img.src = avatar;
    return img.height > 0 ? avatar : imageNotFound;
  };

  render() {
    if (this.store.object) {
      const link = this.store.object.author.linkAvatar
        ? { src: this._checkImgOnline(this.store.object.author.linkAvatar) }
        : { icon: <UserOutlined /> };
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
                        <Avatar size='large' {...link} />
                        <p>
                          {this.store.object.author.firstName ??
                            '' + ' ' + this.store.object.author.lastName ??
                            ''}
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
                        <div className='vote-div'>
                          <button className='ask-vote-button'>Curtir</button>
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
                            onClick={() => this.store.addAnswer(token, user)}
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
