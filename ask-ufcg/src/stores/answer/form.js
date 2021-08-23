import { action, observable, runInAction, toJS } from 'mobx';
import Answer from '../../domain/answer';

class AnswerFormStore {
  @observable object = null;
  @observable loading = false;
  @observable answer = new Answer();
  @observable askTags;

  constructor(entity, service, entityName) {
    this.entity = entity;
    this.service = service;
    this.entityName = entityName;
    this.updateAttributeDecoratorKeyValue =
      this.updateAttributeDecoratorKeyValue.bind(this);
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
  init(content) {
    this.object = new Answer(content);
  }
}

export default AnswerFormStore;
