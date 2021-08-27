import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { HOME, NEW_ASK, PROFILE, REGISTER, SIGN_IN } from '../../stores/common/UrlRouter'
import { ReactComponent as AskUFCGLogo } from '../../assets/logo.svg'
import imageNotFound from '../../assets/link_not_valid.jpg'
import './header.css'
import { observer } from 'mobx-react'
import { userContext } from '../../userContext'
import DadosEstaticosService from '../../utils/dadosEstaticosService'
import { observable } from 'mobx'
@observer
class Header extends React.Component {
  @observable title = undefined

  _checkImgOnline = (imageUrl) => {
    const img = new Image()
    img.src = imageUrl
    return img.height > 0 ? imageUrl : imageNotFound
  }

  _renderButtonsLoginRegister = () => {
    return (
      <>
        <Link to={REGISTER.route}>
          <Button type="primary" className="button-user-links">
            Registrar
          </Button>
        </Link>
        <Link to={SIGN_IN.route}>
          <Button type="primary" className="button-user-links">
            Entrar
          </Button>
        </Link>
      </>
    )
  }

  _renderUserLinks = (avatar) => {
    const link = avatar ? { src: this._checkImgOnline(avatar) } : { icon: <UserOutlined /> }
    return (
      <>
        <Link to={NEW_ASK.route}>
          <Button type="primary" className="button-user-links">
            {NEW_ASK.text}
          </Button>
        </Link>
        <Link to={PROFILE.route}>
          <Avatar size="large" {...link} />
        </Link>
      </>
    )
  }

  render() {
    this.title = DadosEstaticosService.getTitlesHeaders().filter((value) => {
      return value.route === window.location.pathname ?? value
    })[0]
    return (
      <userContext.Consumer>
        {({ user, title }) => {
          return (
            <div className="header">
              <Link className="link-logo" to={HOME.route}>
                <div className="logo-header">
                  <AskUFCGLogo className="logo-ask" />
                  <p>
                    Ask-<span className="logo-UFCG">UFCG</span>
                  </p>
                </div>
              </Link>
              <div className="title-header">{title}</div>
              <div className="user-links">
                {user ? this._renderUserLinks(user.linkAvatar) : this._renderButtonsLoginRegister()}
              </div>
            </div>
          )
        }}
      </userContext.Consumer>
    )
  }
}

Header.displayName = 'Header'
export default Header
