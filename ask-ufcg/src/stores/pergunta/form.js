import { action, observable, runInAction, toJS } from 'mobx'
import Pergunta from '../../domain/pergunta'
import { showErrorApiNotification, showNotification } from '../../utils/notification'

class PerguntaFormStore {
  @observable object = null
  @observable loading = false

  constructor(entity, service, entityName) {
    this.entity = entity
    this.service = service
    this.entityName = entityName
    this.updateAttributeDecoratorKeyValue = this.updateAttributeDecoratorKeyValue.bind(this)
  }

  @action
  updateAttributeDecoratorKeyEventValue(key, event) {
    this.object[key] = event.target.value
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value
    console.log(value)
  }

  @action
  init() {
    this.object = new Pergunta()
  }

  @action
  saveQuestion(user, token, goToHomePage) {
    this.object.user = user
    this.loading = true
    this.service
      .createQuestion(user.id, toJS(this.object), token)
      .then(() => {
        runInAction(`Save User`, () => {
          showNotification('success', null, 'Questão criada com sucesso')
          goToHomePage()
          this.loading = false
        })
      })
      .catch((error) => {
        runInAction(`error on Save User`, () => {
          this.loading = false
          showErrorApiNotification(error)
        })
      })
  }
}

export default PerguntaFormStore
