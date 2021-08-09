import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className='login-page'>
        <div className='login-content'>
          <h1 className='title-login'>Sentimos Sua Falta!</h1>
          <h3 className='subtitle-login'>
            Vamos em busca do conhecimento coletivo
          </h3>
          <Form
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item>
              <Input
                placeholder={'E-mail'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue(
                    'email',
                    value
                  )
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
              />
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
          </Form>
          <Link to='/register'>
            Não é registrado? Registre-se aqui!
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
