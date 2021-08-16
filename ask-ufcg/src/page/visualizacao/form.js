import React from 'react';

import { observer } from 'mobx-react';

import './form.css';

import HomeIndexStore from '../../stores/home';
import LeftMenu from '../../components/LeftMenu/';
import RightMenu from '../../components/RightMenu/';
import Answer from '../../components/Answer/answer.js';
import { Form, Input, Button } from 'antd';

import photoPic from '../../assets/profile.jpg';
import { ReactComponent as MessageIcon } 
from '../../assets/message-square.svg';

const ask = {
  userphoto: photoPic,
  username: 'Aleksandra Zaryanova',
  title: 'Como levantar um halter na academia?',
  description: 'To querendo ficar blindão mas não faço a mínima ideia de como levantar uma halter na academia. Qual a densidade de um barra de ferro com volume de 12cm cubicos e massa de 600g?',
  tags: ['halter', 'academia', 'fitness', 'instagram', 'saudavel']
}

@observer
class Visualizacao extends React.Component {
  constructor() {
    super();
    this.store = new HomeIndexStore();
  }

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <div className="ask-page">
        <LeftMenu />
        <div className="main-ask-content">
          <div className="ask-container">
            <div className="ask-card">
              <div className="user-ask-card">
                <img
                  src={ask.userphoto}
                  alt="abc"
                  className="image-user-ask-card"
                />
                <p>{ask.username}</p>
              </div>
              <p className="ask-title">{ask.title}</p>
              <p className="ask-description">{ask.description}</p>
              <div className="ask-tags">
                {ask.tags.map((tag) => {
                  return (<button className="ask-tag">{tag}</button>)
                })}
              </div>
              <div className="vote-div">
                <button className="ask-vote-button">Curtir</button>
              </div>
            </div>

            <p className="answer-title">Respostas</p>

            <div className="input-answer-card">
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
                    <MessageIcon className="sent-icon-answer"/>
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
  }
}

export default Visualizacao;
