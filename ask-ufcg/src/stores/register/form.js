import { action, observable, runInAction } from 'mobx';
import User from '../../domain/user';
import UserService from '../../services/user';
import { showErrorApiNotification } from '../../utils/notification';

class RegisterFormStore {
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
  init(id, callback) {
    this.loading = true;
    this.object = new User();
    if (callback) {
      callback();
    }
  }

  @action
  save() {
    this.loading = true;
    UserService.registerUser(this.object)
      .then((response) => {
        runInAction(`Save User`, () => {
          debugger;
          const content = response && response.data;
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

export default RegisterFormStore;
