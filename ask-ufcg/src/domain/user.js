import { observable } from 'mobx';

class User {
  @observable id;
  @observable email;
  @observable password;
  @observable firstName;
  @observable lastName;
  @observable linkAvatar;
  @observable linkLinkedin;
  @observable linkGithub;

  constructor(response) {
    for (let key in this) {
      this[key] = response[key];
    }
  }
}

export default User;
