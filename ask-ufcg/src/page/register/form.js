import { observer } from 'mobx-react'
import './form.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Form, Divider } from 'antd'
import User from '../../domain/user'
import UserService from '../../services/user'
import RegisterFormStore from '../../stores/register/form'

@observer
class RegisterForm extends React.Component {
  formRef = React.createRef()
  constructor() {
    super()
    this.store = new RegisterFormStore(User, UserService, 'User')
  }

  goToLoginPage = () => {
    this.props.history.push('/login')
  }

  onFinish = () => {
    this.store.save(this.goToLoginPage)
  }

  componentDidMount() {
    this.store.init()
  }

  render() {
    return (
      <div className="register-page">
        <div className="register-content">
          <h1 className="title">Entre na Comunidade Ask-UFCG</h1>
          <h3 className="subtitle">
            Obtenha mais recursos e privilegios
            <br />
            ingressando na comunidade mais útil
          </h3>
          <Form layout={'vertical'} ref={this.formRef} onFinish={this.onFinish}>
            <Form.Item
              label="Nome"
              name="name"
              rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
            >
              <Input
                placeholder={'Nome'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue('firstName', value)
                }
              />
            </Form.Item>
            <Form.Item
              label="Sobrenome"
              name="sobrenome"
              rules={[{ required: true, message: 'Por favor insira seu sobrenome!' }]}
            >
              <Input
                placeholder={'Sobrenome'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue('lastName', value)
                }
              />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Por favor insira seu E-mail!',
                },
                {
                  type: 'email',
                  message: 'Por favor insira um E-mail válido!',
                },
              ]}
            >
              <Input
                placeholder={'E-mail'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue('email', value)
                }
              />
            </Form.Item>
            <Form.Item
              name="senha"
              label="Senha"
              rules={[{ required: true, message: 'Por favor insira sua senha!' }]}
            >
              <Input.Password
                placeholder={'Senha'}
                onChange={(value) =>
                  this.store.updateAttributeDecoratorKeyEventValue('password', value)
                }
                maxLength={12}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="style-button">
                Entrar
              </Button>
            </Form.Item>
            <Divider />
          </Form>
          <Link to="/login">Já é registrado? Acesse aqui!</Link>
        </div>
      </div>
    )
  }
}

export default RegisterForm
