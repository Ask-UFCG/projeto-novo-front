import { action, observable } from 'mobx';
import User from '../../domain/user';

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
    console.log(this.object);
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value;
  }

  @action
  init(id, callback) {
    debugger;
    this.loading = true;
    this.object = new User();
    console.log(this.object);
    if (callback) {
      callback();
    }
  }
}

export default RegisterFormStore;
