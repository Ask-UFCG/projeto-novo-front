import './login.css'
import React from 'react'
import { Layout, Menu, Breadcrumb, Row, Input, Button } from 'antd'
import Form from 'antd/lib/form/Form'
const { Header, Content, Footer } = Layout

class Login extends React.Component {
  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
          </Header>
          <Content
            style={{
              padding: '0 50px',
              textAlign: 'center',
            }}
          >
            <Row>
              <h1 className="title-login">Sentimos Sua Falta</h1>
            </Row>
            <Row style={{ margin: '0px' }}>
              <h3 className="subtitle-login">Vamos em busca do conhecimento coletivo</h3>
            </Row>
            <Row>
              <Form></Form>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </>
    )
  }
}
Login.displayName = 'Login'

export default Login
