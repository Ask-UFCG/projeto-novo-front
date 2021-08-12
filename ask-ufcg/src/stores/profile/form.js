import { action, observable, runInAction, toJS } from 'mobx';
import User from '../../domain/user';
import { showErrorApiNotification } from '../../utils/notification';

class ProfileFormStore {
  @observable object = {};
  @observable loading = false;

  constructor(entity, service, entityName) {
    this.entity = entity;
    this.service = service;
    this.entityName = entityName;
    this.updateAttributeDecoratorKeyValue =
      this.updateAttributeDecoratorKeyValue.bind(this);

    this.updateAttributeDecoratorKeyEventValue =
      this.updateAttributeDecoratorKeyEventValue.bind(this);
  }

  @action
  updateAttributeDecoratorKeyEventValue(key, event) {
    this.object[key] = event.target.value;
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value;
  }

  @action
  init(user) {
    this.loading = true;
    this.object = new this.entity(user);
    console.log(this.object);
  }

  @action
  save(loginUser) {
    this.loading = true;
    this.service
      .login(toJS(this.object))
      .then((response) => {
        runInAction(`Save User`, () => {
          const content = response && response.data;
          loginUser(content);
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction(`error on Save User`, () => {
          this.loading = false;
          showErrorApiNotification(error);
        });
      });
  }
}

export default ProfileFormStore;
