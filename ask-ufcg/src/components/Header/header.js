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
    this.title = useInfo()
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
            style={{ width: '100%', backgroundColor: '#1D3557', borderColor: '#1D3557' }}
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
      <Layout.Header style={{ backgroundColor: '#A8DADC', width: '100%', display: 'flex' }}>
        <div className="logo-header">
          <AskUFCGLogo className="logo-ask" />
          <p>
            Ask-<span className="logo-UFCG">UFCG</span>
          </p>
        </div>
        <Row>
          <Col span={8}>
            <div className="title-header">{this.title}</div>
          </Col>
          <Col
            span={8}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {this.store.authUser ? this._renderUserLinks() : this._renderButtonsLoginRegister()}
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
Header.displayName = 'Header'
export default Header
