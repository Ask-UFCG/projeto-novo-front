import { action, observable, runInAction, toJS } from 'mobx'
import { showErrorApiNotification, showNotification } from '../../utils/notification'

class ProfileFormStore {
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
  init(user) {
    this.object = new this.entity(user)
  }

  @action
  save(setUser, token) {
    this.loading = true
    this.service
      .update(toJS(this.object), token)
      .then((response) => {
        runInAction(`Save User`, () => {
          const user = response && response.data ? new this.entity(response.data) : undefined
          setUser(user)
          localStorage.setItem('user', JSON.stringify(user))
          showNotification('success', null, 'Usuário salvo com sucesso')
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

export default ProfileFormStore
