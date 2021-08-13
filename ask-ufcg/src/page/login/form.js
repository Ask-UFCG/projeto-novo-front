import { observer } from 'mobx-react'
import './form.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, Form, Divider } from 'antd'
import User from '../../domain/user'
import UserService from '../../services/user'
import LoginFormStore from '../../stores/login/form'
import { userContext } from '../../userContext'

@observer
class LoginForm extends React.Component {
  formRef = React.createRef()

  constructor() {
    super()
    this.store = new LoginFormStore(User, UserService, 'User')
  }

  onFinish = (loginUser) => {
    this.store.login(loginUser, this.goToHomePage)
  }

  goToHomePage = () => {
    this.props.history.push('/')
  }

  componentDidMount() {
    this.store.init()
  }

  render() {
    return (
      <userContext.Consumer>
        {({ loginUser }) => {
          return (
            <div className="login-page">
              <div className="login-content">
                <h1 className="title-login">Sentimos Sua Falta!</h1>
                <h3 className="subtitle-login">Vamos em busca do conhecimento coletivo</h3>
                <Form
                  onFinish={() => this.onFinish(loginUser)}
                  ref={this.formRef}
                  layout="vertical"
                >
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        required: true,
                        message: 'Por favor insira seu email!',
                      },
                      {
                        type: 'email',
                        message: 'Por favor insira um email válido!',
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
                    rules={[
                      {
                        required: true,
                        message: 'Por favor insira sua senha!',
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder={'Senha'}
                      onChange={(value) =>
                        this.store.updateAttributeDecoratorKeyEventValue('password', value)
                      }
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="style-button"
                      size={'large'}
                    >
                      Entrar
                    </Button>
                  </Form.Item>
                  <Divider />
                </Form>
                <Link to="/register">Não é registrado? Registre-se aqui!</Link>
              </div>
            </div>
          )
        }}
      </userContext.Consumer>
    )
  }
}

export default LoginForm
