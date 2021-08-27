import { action, observable, runInAction, toJS } from 'mobx'
import { showErrorApiNotification } from '../../utils/notification'

class RegisterFormStore {
  @observable object = {}
  @observable loading = false

  constructor(entity, service, entityName) {
    this.entity = entity
    this.service = service
    this.entityName = entityName

    this.updateAttributeDecoratorKeyValue = this.updateAttributeDecoratorKeyValue.bind(this)

    this.updateAttributeDecoratorKeyEventValue =
      this.updateAttributeDecoratorKeyEventValue.bind(this)
  }

  @action
  updateAttributeDecoratorKeyEventValue(key, event) {
    this.object[key] = event.target.value
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value
  }

  @action
  init() {
    this.loading = true
    this.object = new this.entity()
    this.loading = false
  }

  @action
  save(goToLoginPage) {
    this.loading = true
    this.service
      .registerUser(toJS(this.object))
      .then(() => {
        runInAction(`Save User`, () => {
          this.loading = false
          goToLoginPage()
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

export default RegisterFormStore
