import { Badge, Button, Col, Layout, Row, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
// import { observer } from 'mobx-react'
import React from 'react'
import SessionStore from '../../stores/common/indexStore'

// @observer
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.store = new SessionStore()
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
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    )
  }

  render() {
    return (
      <Layout.Header
        style={{ backgroundColor: '#A8DADC', position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <Row>
          <Col span={8}>
            <div className="logo" />
            Logo
          </Col>
          <Col span={8}>
            <div className="title-header">{this.props.title}</div>
          </Col>
          <Col span={8}>
            {this.store.authUser ? this._renderUserLinks() : this._renderButtonsLoginRegister()}
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
Header.displayName = 'Header'
export default Header
