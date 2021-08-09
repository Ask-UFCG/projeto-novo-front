import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Layout, Row, Input, Button, Form, Col, Divider } from 'antd';
import User from '../../domain/user';
import UserService from '../../services/user';
import RegisterFormStore from '../../stores/register/form';
const { Content } = Layout;

@observer
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.store = new RegisterFormStore(User, UserService, 'User');
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
            <Col xs={2} sm={4} md={6} lg={6} xl={6} />
            <Col
              xs={20}
              sm={16}
              md={12}
              lg={12}
              xl={12}
              className='center-content'
            >
              <Row style={{ textAlign: 'left' }}>
                <Col span={24}>
                  <h1 className='title'>Entre na Comunidade Ask-UFCG</h1>
                </Col>
              </Row>
              <Row style={{ textAlign: 'left' }}>
                <Col span={24}>
                  <h3 className='subtitle'>
                    Obtenha mais recursos e privilegios
                    <br />
                    ingressando na comunidade mais útil
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
                        placeholder={'Usuário'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'usuario',
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
                      <Input
                        placeholder={'E-mail'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyValue(
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
                        maxLength={12}
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Row>
                    <Col span={24}>
                      <Input.Password
                        placeholder={'Repita a senha'}
                        disabled={!this.store.object.password}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'password',
                            value
                          )
                        }
                        maxLength={12}
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
                  <a href='/login'>Já é registrado? Acesse aqui!</a>
                </b>
              </Form>
            </Col>
            <Col xs={2} sm={4} md={6} lg={6} xl={6} />
          </Row>
        </Content>
      </>
    );
  }
}

export default RegisterForm;
