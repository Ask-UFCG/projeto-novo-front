import React from 'react';

import { observer } from 'mobx-react';

import './form.css';

import LeftMenu from '../../components/LeftMenu/';
import RightMenu from '../../components/RightMenu/';
import Answer from '../../components/Answer/answer.js';
import { Form, Input, Button, Spin, Image } from 'antd';
import imagePic from '../../assets/perfil_not_found.png';
import imageNotFound from '../../assets/link_not_valid.jpg';
import photoPic from '../../assets/profile.jpg';
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg';
import { ASK } from '../../stores/common/UrlRouter';
import VisualizacaoFormStore from '../../stores/visualizacao/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';

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
        <div className='ask-page'>
          <LeftMenu />
          <div className='main-ask-content'>
            <div className='ask-container'>
              <div className='ask-card'>
                <div className='user-ask-card'>
                  <Image
                    src={this.store.object.author.linkAvatar || imagePic}
                    fallback={imageNotFound}
                    alt={`Profile image of ...`}
                    className='profile-image'
                  />
                  <p>
                    {this.store.object.author.firstName +
                      ' ' +
                      this.store.object.author.lastName}
                  </p>
                </div>
                <p className='ask-title'>{this.store.object.title}</p>
                <p className='ask-description'>{this.store.object.content}</p>
                <div className='ask-tags'>
                  {this.store.object.tags.map((tag) => {
                    return <button className='ask-tag'>{tag}</button>;
                  })}
                </div>
                <div className='vote-div'>
                  <button className='ask-vote-button'>Curtir</button>
                </div>
              </div>

              <p className='answer-title'>Respostas</p>

              <div className='input-answer-card'>
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
                      <MessageIcon className='sent-icon-answer' />
                      Enviar Resposta
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              <Answer />
              <Answer />
              <Answer />
            </div>
          </div>
          <RightMenu />
        </div>
      );
    } else {
      return <Spin />;
    }
  }
}

export default Visualizacao;
