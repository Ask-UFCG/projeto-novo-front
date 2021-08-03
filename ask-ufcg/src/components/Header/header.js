import { Badge, Button, Col, Layout, Row, Avatar } from 'antd'
import { UserOutlined, BellOutlined } from '@ant-design/icons'
// import { observer } from 'mobx-react'
import React from 'react'
import SessionStore from '../../stores/common/indexStore'
import { Link } from 'react-router-dom'
import { NEW_ASK } from '../../stores/common/UrlRouter'
import { ReactComponent as AskUFCGLogo } from '../../assets/logo.svg'
import './header.css'
import { useInfo } from '../../context/infoContext'

// @observer
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.store = new SessionStore()
    //this.title = useInfo()
  }

  _renderButtonsLoginRegister = () => {
    return (
      <>
        <Button>Registrar</Button>
        <Button>Entrar</Button>
      </>
    )
  }

  _renderUserLinks = () => {
    return (
      <>
        <Link to={NEW_ASK.route}>
          <Button
            type="primary"
            className="button-user-links"
          >
            {NEW_ASK.text}
          </Button>
        </Link>
        <Badge count={1}>
          <BellOutlined />
        </Badge>
        <Badge count={1}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Badge>
      </>
    )
  }

  render() {
    return (
      <div className="header">
        <div className="logo-header">
          <AskUFCGLogo className="logo-ask" />
          <p>
            Ask-<span className="logo-UFCG">UFCG</span>
          </p>
        </div>
        <div className="title-header">
          Title Page
        </div>
        <div className="user-links">
          {this.store.authUser ? 
              this._renderUserLinks() : this._renderButtonsLoginRegister()}
        </div>
      </div>
    )
  }
}

Header.displayName = 'Header'
export default Header
