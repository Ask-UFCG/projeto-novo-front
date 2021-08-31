import React from 'react'

import { observer } from 'mobx-react'
import { Image, Button, Input, Form } from 'antd'

import LeftMenu from '../../components/LeftMenu/index.js'

import imagePic from '../../assets/perfil_not_found.png'
import imageNotFound from '../../assets/link_not_valid.jpg'

import './form.css'
import User from '../../domain/user.js'
import UserService from '../../services/user.js'
import ProfileFormStore from '../../stores/profile/form.js'
import { userContext } from '../../userContext'
import { PROFILE } from '../../stores/common/UrlRouter.js'

@observer
class ProfileForm extends React.Component {
  formRef = React.createRef()

  constructor() {
    super()
    this.store = new ProfileFormStore(User, UserService, 'User')
  }

  onFinish = (setUser, token) => {
    this.store.save(setUser, token)
  }

  componentDidMount() {
    const { setTitle } = this.props
    setTitle(PROFILE.text)
  }

  render() {
    const rulesURL = [
      {
        max: 255,
        message: 'O link para o avatar deve ter no máximo 255 caracteres.',
      },
      {
        type: 'url',
        message: 'Este campo deve ser um URL válido.',
      },
      {
        pattern: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
        message: 'Este campo deve ser um URL válido e com os tipos (jpg|gif|png)',
      },
    ]
    return (
      <userContext.Consumer>
        {({ user, token, setUser, logoutUser }) => {
          this.store.init(user)
          return (
            <div className="profile-page">
              <LeftMenu />
              <div className="content">
                {user ? (
                  <Button
                    type="primary"
                    style={{
                      marginLeft: '93%',
                      marginTop: '10px',
                      backgroundColor: '#1D3557',
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                    onClick={logoutUser}
                  >
                    Sair
                  </Button>
                ) : (
                  ''
                )}
                <div className="profile-informations-change">
                  <Form
                    onFinish={() => this.onFinish(setUser, token)}
                    layout="vertical"
                    ref={this.formRef}
                  >
                    <div className="profile-image-content">
                      <Image
                        src={this.store.object.linkAvatar || imagePic}
                        fallback={imageNotFound}
                        alt={`Profile image of ...`}
                        className="profile-image"
                      />
                    </div>
                    <Form.Item name="avatar" label="Link Avatar" rules={rulesURL}>
                      <Input
                        defaultValue={this.store.object.linkAvatar}
                        size="large"
                        placeholder="Nome"
                        className="input-info"
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue('linkAvatar', value)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="nome"
                      label="Nome"
                      rules={[
                        {
                          required: true,
                          message: 'Por favor insira seu nome!',
                        },
                      ]}
                      initialValue={this.store.object.firstName}
                    >
                      <Input
                        defaultValue={this.store.object.firstName}
                        size="large"
                        placeholder="Nome"
                        className="input-info"
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue('firstName', value)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="sobrenome"
                      label="Sobrenome"
                      rules={[
                        {
                          required: true,
                          message: 'Por favor insira seu sobrenome!',
                        },
                      ]}
                      initialValue={this.store.object.lastName}
                    >
                      <Input
                        defaultValue={this.store.object.lastName}
                        size="large"
                        placeholder="Sobrenome"
                        className="input-info"
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue('lastName', value)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="github"
                      label="Github"
                      rules={[
                        {
                          type: 'url',
                          message: 'Este campo deve ser um URL válido.',
                        },
                      ]}
                    >
                      <Input
                        defaultValue={this.store.object.linkGithub}
                        size="large"
                        placeholder="Github"
                        className="input-info"
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue('linkGithub', value)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="linkedin"
                      label="Linkedin"
                      rules={[
                        {
                          type: 'url',
                          message: 'Este campo deve ser um URL válido.',
                        },
                      ]}
                    >
                      <Input
                        defaultValue={this.store.object.linkLinkedin}
                        size="large"
                        placeholder="Linkedin"
                        className="input-info"
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue('linkLinkedin', value)
                        }
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        className="button-change button-change-extra-margin style-button"
                        type="primary"
                        htmlType="submit"
                      >
                        Alterar Informações
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          )
        }}
      </userContext.Consumer>
    )
  }
}

export default ProfileForm
