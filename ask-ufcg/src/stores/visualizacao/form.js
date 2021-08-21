import { action, observable, runInAction, toJS } from 'mobx';
import Pergunta from '../../domain/pergunta';
import {
  showErrorApiNotification,
  showNotification,
} from '../../utils/notification';

class VisualizacaoFormStore {
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
  updateAttributeDecoratorKeyEventValue(key, event) {
    this.object[key] = event.target.value;
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value;
  }

  @action
  init(id) {
    this.loading = true;
    this.service
      .getQuestion(id)
      .then((response) => {
        runInAction(`Get Question`, () => {
          this.object = new Pergunta(response && (response.data ?? undefined));
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction(`error on Save Question`, () => {
          this.loading = false;
          showErrorApiNotification(error);
        });
      });
  }
}

export default VisualizacaoFormStore;
