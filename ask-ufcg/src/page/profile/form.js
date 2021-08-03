import React from 'react';

import { observer } from 'mobx-react';
import { Image, Button, Input } from 'antd';

import LeftMenu from '../../components/LeftMenu/index.js';

import imagePic from '../../assets/profile.jpg';
import { ReactComponent as ChangeImageIcon } from '../../assets/changeImage.svg';

import './form.css';

@observer
class ProfileForm extends React.Component {
  constructor() {
    super();
    // this.store = new UserFormStore(User, UserService, 'User');
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="profile-page">
        <LeftMenu />
        <div className="content">
          <div className="profile-image-content">
            <Image src={imagePic} alt={`Profile image of ...`} className="profile-image" />
            <button className="button-change">
              <ChangeImageIcon className="image-button-change" /> Alterar Imagem
            </button>
          </div>
          <div className="profile-informations-change">
            <Input size="large" placeholder="Nome" className="input-info" />
            <Input size="large" placeholder="E-mail" className="input-info" />
            <Input size="large" placeholder="Github" className="input-info" />
            <Input size="large" placeholder="Instagram" className="input-info" />
            <Button className="button-change button-change-extra-margin">Alterar Informações</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileForm;
