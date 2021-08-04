import React from 'react';

import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import './index.css';

import HomeIndexStore from '../../stores/home';
import LeftMenu from '../../components/LeftMenu/index';

import { ReactComponent as ClockIcon } from '../../assets/clock.svg';
import { ReactComponent as ArrowUpRightIcon } from '../../assets/arrow-up-right.svg';
import { ReactComponent as FireIcon } from '../../assets/whh_hot.svg';
import { ReactComponent as CheckCircleIcon } from '../../assets/check-circle.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as LinkIcon } from '../../assets/link.svg';

import photoPic from '../../assets/profile.jpg';


@observer
class homeIndex extends React.Component {
  constructor() {
    super();
    this.store = new HomeIndexStore();
  }

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <div className="home-page">
        <LeftMenu />
        <div className="main-home-content">
          <div className="buttons-home">
            <button className="home-tag-button new-tag">
              <ClockIcon className="tag-icon" /> Novo
            </button>
            <button className="home-tag-button other-tag">
              <ArrowUpRightIcon className="tag-icon" /> Mais Votadas
            </button>
            <button className="home-tag-button other-tag">
              <FireIcon className="tag-icon" /> Relevante
            </button>
            <button className="home-tag-button other-tag">
              <CheckCircleIcon className="tag-icon" />Fechadas
            </button>
          </div>
          <div className="home-asks-container">
            <div className="home-ask-card">
              <div className="user-home-ask-card">
                <img 
                  src={photoPic} 
                  alt="abc"
                  className="image-user-ask"
                />
                <p>Zarya Volskaya</p>
              </div>
              <p className="ask-title">
                Queria fazer um bolo de chocolate com uma caixa de trigo
              </p>
              <p className="ask-description">
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
              </p>
              <div className="ask-tags">
                <button className="ask-tag">trigo</button>
                <button className="ask-tag">bolo</button>
                <button className="ask-tag">chocolate</button>
              </div>
            </div>
            <div className="home-ask-card">
              <div className="user-home-ask-card">
                <img 
                  src={photoPic} 
                  alt="abc"
                  className="image-user-ask"
                />
                <p>Zarya Volskaya</p>
              </div>
              <p className="ask-title">
                Queria fazer um bolo de chocolate com uma caixa de trigo
              </p>
              <p className="ask-description">
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
              </p>
              <div className="ask-tags">
                <button className="ask-tag">trigo</button>
                <button className="ask-tag">bolo</button>
                <button className="ask-tag">chocolate</button>
              </div>
            </div>
            <div className="home-ask-card">
              <div className="user-home-ask-card">
                <img 
                  src={photoPic} 
                  alt="abc"
                  className="image-user-ask"
                />
                <p>Zarya Volskaya</p>
              </div>
              <p className="ask-title">
                Queria fazer um bolo de chocolate com uma caixa de trigo
              </p>
              <p className="ask-description">
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
              </p>
              <div className="ask-tags">
                <button className="ask-tag">trigo</button>
                <button className="ask-tag">bolo</button>
                <button className="ask-tag">chocolate</button>
              </div>
          </div>
            <div className="home-ask-card">
              <div className="user-home-ask-card">
                <img 
                  src={photoPic} 
                  alt="abc"
                  className="image-user-ask"
                />
                <p>Zarya Volskaya</p>
              </div>
              <p className="ask-title">
                Queria fazer um bolo de chocolate com uma caixa de trigo
              </p>
              <p className="ask-description">
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
                O bolo deve ter 5kg, pra toda minha familia comer e deve ...
              </p>
              <div className="ask-tags">
                <button className="ask-tag">trigo</button>
                <button className="ask-tag">bolo</button>
                <button className="ask-tag">chocolate</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-menu">
          <div className="card-right-menu">
            <div className="section-right-menu">
              <StarIcon className="right-card-icon" /> 
              <p>Leituras obrigatórias</p>
            </div>
            <Link to="#" className="link-right-menu"> 
              Leia as regras antes de começar a utilizar a plataforma.
            </Link>
            <Link to="#" className="link-right-menu"> 
              Visão e Estratégia da Ask-UFCG
            </Link>
            <div className="horizontal-line" />
            <div className="section-right-menu">
              <LinkIcon className="right-card-icon" />
              <p>Links em destaque</p>
            </div>
            <Link to="#" className="link-right-menu"> 
              Código fonte do Ask-UFCG no GitHub
            </Link>
            <Link to="#" className="link-right-menu"> 
              Práticas recomendadas de Golang
            </Link>
            <Link to="#" className="link-right-menu"> 
              Portal UFCG
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default homeIndex;
