import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import SessionStore from '../../stores/common/indexStore';
import { Link } from 'react-router-dom';
import { NEW_ASK } from '../../stores/common/UrlRouter';
import { ReactComponent as AskUFCGLogo } from '../../assets/logo.svg';
import './header.css';
import { observer } from 'mobx-react';
import { userContext } from '../../userContext';
import DadosEstaticosService from '../../utils/dadosEstaticosService';
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.store = new SessionStore();
  }

  _renderButtonsLoginRegister = () => {
    return (
      <>
        <Button>Registrar</Button>
        <Button>Entrar</Button>
      </>
    );
  };

  _renderUserLinks = (avatar) => {
    const link = avatar ? { src: avatar } : { icon: <UserOutlined /> };
    return (
      <>
        <Link to={NEW_ASK.route}>
          <Button type='primary' className='button-user-links'>
            {NEW_ASK.text}
          </Button>
        </Link>
        <Avatar size='large' {...link} />
      </>
    );
  };

  render() {
    return (
      <userContext.Consumer>
        {({ user, logoutUser }) => {
          return (
            <div className='header'>
              <div className='logo-header'>
                <AskUFCGLogo className='logo-ask' />
                <p>
                  Ask-<span className='logo-UFCG'>UFCG</span>
                </p>
              </div>
              <div className='title-header'>
                {
                  DadosEstaticosService.getTitlesHeaders().filter((value) => {
                    return value.route === window.location.pathname ?? value;
                  })[0].text
                }
              </div>
              <div className='user-links'>
                {user
                  ? this._renderUserLinks(user.avatar)
                  : this._renderButtonsLoginRegister()}
              </div>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

Header.displayName = 'Header';
export default Header;