import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Layout, Row, Input, Button, Form, Col, Divider } from 'antd';
import User from '../../domain/user';
import UserService from '../../services/user';
import LoginFormStore from '../../stores/login/form';
const { Content } = Layout;
@observer
class LoginForm extends React.Component {
  constructor() {
    super();
    this.store = new LoginFormStore(User, UserService, 'User');
  }
  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <>
        <Content
          style={{
            textAlign: 'center',
            padding: '0 50px',
          }}
        >
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={9} />
            <Col
              xs={20}
              sm={16}
              md={12}
              lg={12}
              xl={6}
              className='center-content'
            >
              <Row style={{ textAlign: 'left' }}>
                <Col span={24}>
                  <h1 className='title-login'>Sentimos Sua Falta!</h1>
                </Col>
              </Row>
              <Row style={{ textAlign: 'left' }}>
                <Col span={24}>
                  <h3 className='subtitle-login'>
                    Vamos em busca do conhecimento coletivo
                  </h3>
                </Col>
              </Row>
              <Form
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item>
                  <Row>
                    <Col span={24}>
                      <Input
                        placeholder={'E-mail'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'email',
                            value
                          )
                        }
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Col span={24}>
                      <Input.Password
                        placeholder={'Senha'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'password',
                            value
                          )
                        }
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='style-button'
                    size={'large'}
                  >
                    Entrar
                  </Button>
                </Form.Item>
                <Divider />
                <b>
                  <a href='/register'>Não é registrado? Registre-se aqui!</a>
                </b>
              </Form>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={9} />
          </Row>
        </Content>
      </>
    );
  }
}

export default LoginForm;
