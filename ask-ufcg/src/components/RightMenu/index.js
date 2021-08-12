import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as StarIcon } from '../../assets/star.svg'
import { ReactComponent as LinkIcon } from '../../assets/link.svg'

import './index.css'
import { RULES } from '../../stores/common/UrlRouter'

class RightMenu extends React.Component {
  render() {
    return (
      <div className="right-menu">
        <div className="card-right-menu">
          <div className="section-right-menu">
            <StarIcon className="right-card-icon" />
            <p>Leituras obrigatórias</p>
          </div>
          <Link to={RULES.route} className="link-right-menu">
            Leia as regras antes de começar a utilizar a plataforma.
          </Link>
          <Link to="#" className="link-right-menu">
            Visão e Estratégia da Ask-UFCG
          </Link>
          <div className="section-right-menu">
            <LinkIcon className="right-card-icon" />
            <p>Links em destaque</p>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ask-UFCG/"
            className="link-right-menu"
          >
            Código fonte do Ask-UFCG no GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pt-br.reactjs.org/"
            className="link-right-menu"
          >
            Documentação do React
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://portal.ufcg.edu.br/"
            className="link-right-menu"
          >
            Portal UFCG
          </a>
        </div>
      </div>
    )
  }
}

export default RightMenu
