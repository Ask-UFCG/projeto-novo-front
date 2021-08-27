import { action, observable, runInAction, toJS } from 'mobx'
import { showErrorApiNotification } from '../../utils/notification'

class LoginFormStore {
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
  }

  @action
  init() {
    this.object = new this.entity()
  }

  @action
  login(loginUser, goToHomePage) {
    this.loading = true
    this.service
      .login(toJS(this.object))
      .then((response) => {
        runInAction(`Login User`, () => {
          const content = response && response.data
          loginUser(content)
          goToHomePage()
          this.loading = false
        })
      })
      .catch((error) => {
        runInAction(`error on Login User`, () => {
          this.loading = false
          showErrorApiNotification(error)
        })
      })
  }
}

export default LoginFormStore
