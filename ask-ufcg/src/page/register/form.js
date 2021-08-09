import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
    this.store.save();
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <div className='register-page'>
        <div className='register-content'>
          <h1 className='title'>Entre na Comunidade Ask-UFCG</h1>
          <h3 className='subtitle'>
            Obtenha mais recursos e privilegios
            <br />
            ingressando na comunidade mais útil
          </h3>
          <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item>
              <Input
                placeholder={'Usuário'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue(
                    'usuario',
                    value
                  )
                }
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder={'E-mail'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyValue('email', value)
                }
              />
            </Form.Item>
            <Form.Item>
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
            </Form.Item>
            <Form.Item>
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
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='style-button'>
                Entrar
              </Button>
            </Form.Item>
            <Divider />
          </Form>
          <Link to='/login'>Já é registrado? Acesse aqui!</Link>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
