import React from 'react'
import './index.css'

import { Menu } from 'antd'

import { ReactComponent as ListIcon } from '../../assets/list.svg'
import { ReactComponent as TagIcon } from '../../assets/tag.svg'
import { ReactComponent as HeartIcon } from '../../assets/heart.svg'
import { ReactComponent as HelpIcon } from '../../assets/help-circle.svg'
import { ReactComponent as MessageIcon } from '../../assets/message-circle.svg'
import { Input } from 'antd'
import { Link } from 'react-router-dom'
import { HOME } from '../../stores/common/UrlRouter'
const { Search } = Input

class LeftMenu extends React.Component {
  render() {
    const emDesenvolvimento = { disabled: true, title: 'Em Desenvolvimento' }
    return (
      <div className="left-bar">
        <div className="left-menu-search">
          <Search placeholder="Pesquise uma pergunta" className="input-search" enterButton />
        </div>
        <Menu className="menu-left-bar">
          <p className="menu-left-bar-text">Menu</p>
          <Link to={HOME.route}>
            <Menu.Item title="Questões" key="2" icon={<ListIcon />}>
              Questões
            </Menu.Item>
          </Link>
          <Menu.Item {...emDesenvolvimento} key="3" icon={<TagIcon />}>
            Tags
          </Menu.Item>

          <p className="menu-left-bar-text">Navegação Pessoal</p>
          <Menu.Item {...emDesenvolvimento} key="5" icon={<HeartIcon />}>
            Suas questões
          </Menu.Item>
          <Menu.Item {...emDesenvolvimento} key="6" icon={<HelpIcon />}>
            Suas respostas
          </Menu.Item>
          <Menu.Item {...emDesenvolvimento} key="7" icon={<MessageIcon />}>
            Suas curtidas e votos
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default LeftMenu
