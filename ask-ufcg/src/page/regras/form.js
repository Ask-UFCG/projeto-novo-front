import React from 'react'

import './form.css'

import LeftMenu from '../../components/LeftMenu/index.js'
import { RULES } from '../../stores/common/UrlRouter'

class RegrasComunidadeForm extends React.Component {
  componentDidMount() {
    const { setTitle } = this.props
    setTitle(RULES.text)
  }
  render() {
    return (
      <div className="rules-page">
        <LeftMenu />
        <div className="rules">
          <div className="rules-text">
            <h3>1. Quanto mais conhecimento, melhor</h3>
            <p>
              O Ask-UFCG é uma biblioteca de soluções prontas representadas por um problema (a
              pergunta) e as soluções (respostas), da forma mais limpa possível, com o mínimo de
              ruído e o máximo de foco.
            </p>
            <p>
              Perguntas e respostas são escritas uma vez e lidas centenas de vezes. Todo o conteúdo
              do site é otimizado para leitura, para desenvolvedores que chegam ao site através de
              uma busca.
            </p>
            <p>
              Ter conteúdo útil para a comunidade é primário; como este conteúdo foi criado é
              secundário. Quaisquer métodos para criar conteúdo útil para o site é bem-vindo, exceto
              quando for plágio.
            </p>
            <h3>2. Juntos para o bem da comunidade</h3>
            <p>
              O Ask-UFCG é um esforço coletivo para criar mais conteúdo de qualidade sobre as
              diversas áreas dos cursos da UFCG (Universidade Federal de Campina Grande). O site
              existe graças à colaboração de muitos usuários ativos, como você, e não devido a uma
              única e grandiosa pessoa.
            </p>
            <p>
              Juntos criamos conteúdo útil para toda a comunidade da universidade. Qualquer usuário
              que se depara com um problema pode usar as respostas do site de graça. A comunidade, é
              o resultado da colaboração. Juntos definimos o futuro do nosso site e da comunidade.
            </p>
            <h3>3. Respeite os outros</h3>
            <p>
              A forma como tratamos uns aos outros é a chave para o sucesso. Nosso objetivo primário
              é criar e dar suporte à própria comunidade. Tudo mais virá disso.
            </p>
            <p>
              Qualquer interação com o site começa com o respeito mútuo entre colegas, não importa
              as circunstâncias, reputação, conhecimento, ou o que for. Na nossa comunidade, todos
              devem se sentir seguros e bem-vindos ao fazer perguntas ou respondê-las.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default RegrasComunidadeForm
