import { action, observable } from 'mobx';

class RegisterFormStore {
  @observable object = null;
  @observable loading = false;

  constructor(entity, service, entityName) {
    this.entity = entity;
    this.service = service;
    this.entityName = entityName;
    this.updateAttributeDecoratorKeyValue =
      this.updateAttributeDecoratorKeyValue.bind(this);
  }

  @action
  updateAttributeDecoratorKeyValue(key, event) {
    this.object[key] = event.target.value;
  }

  @action
  init(id, callback) {
    this.loading = true;
    this.object = undefined;
    if (callback) {
      callback();
    }
  }
}

export default RegisterFormStore;
