import './login.css'
import React from 'react'
import Header from '../../components/Header/header'
import { Layout, Row, Input, Button, Form, Col } from 'antd'
const { Content, Footer } = Layout
// import { observer } from 'mobx-react'

// @observer
class Login extends React.Component {
  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ backgroundColor: '#A8DADC' }}></Header>
          <Content
            style={{
              textAlign: 'center',
              padding: '0 50px',
            }}
          >
            <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={9} />
              <Col xs={20} sm={16} md={12} lg={12} xl={6} className="center-content">
                <Row style={{ textAlign: 'left' }}>
                  <Col span={24}>
                    <h1 className="title-login">Sentimos Sua Falta!</h1>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'left' }}>
                  <Col span={24}>
                    <h3 className="subtitle-login">Vamos em busca do conhecimento coletivo</h3>
                  </Col>
                </Row>
                <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                  <Form.Item>
                    <Row>
                      <Col span={24}>
                        <Input placeholder={'E-mail'} />
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item>
                    <Row>
                      <Col span={24}>
                        <Input.Password placeholder={'Senha'} />
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="style-button">
                      Entrar
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col xs={2} sm={4} md={6} lg={8} xl={9} />
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ask UFCG ©2021 Created by a Group of UFCG Students
          </Footer>
        </Layout>
      </>
    )
  }
}
Login.displayName = 'Login'

export default Login
