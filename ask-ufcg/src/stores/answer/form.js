import { action, observable, runInAction } from 'mobx'
import Answer from '../../domain/answer'
import commentService from '../../services/comment'
import Comment from '../../domain/comment'
import { showErrorApiNotification, showNotification } from '../../utils/notification'

class AnswerFormStore {
  @observable object
  @observable loading = false
  @observable comment
  @observable comments = []

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
  updateAttributeDecoratorKeycheckedValue(key, event) {
    this.object[key] = event.target.checked
  }

  @action
  updateAttributeDecoratorKeyCommentEventValue(key, event) {
    this.comment[key] = event.target.value
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value
  }

  @action
  init(content) {
    this.object = new Answer(content)
    this.comment = new Comment()
    this.comments = this.object.comments || []
  }

  @action
  markAsSolution(token) {
    this.loading = true
    this.service
      .updateAnswer(this.object, token)
      .then((response) => {
        runInAction(`Mark Solution`, () => {
          showNotification('success', null, 'Resposta marcada como solução com sucesso!')
          this.object = new Answer(response.data)
          this.loading = false
        })
      })
      .catch((error) => {
        runInAction(`error on Mark Solution`, () => {
          this.loading = false
          showErrorApiNotification(error)
        })
      })
  }

  @action
  addComment = (user, token, e) => {
    e.preventDefault()
    if (this.comment && this.comment.content) {
      this.loading = true
      this.comment.author = Object.assign({}, user)
      this.comment.createdAt = new Date()

      commentService
        .addComment(this.comment, user.id, this.object.id, token)
        .then((response) => {
          runInAction(`Save Comment`, () => {
            showNotification('success', null, 'Comentário adicionado com sucesso')
            this.comment = new Comment()
            this.comments.push(new Comment(response.data))
            this.loading = false
          })
        })
        .catch((error) => {
          runInAction(`error on Save Comment`, () => {
            this.comment = new Comment()
            this.loading = false
            showErrorApiNotification(error)
          })
        })
    }
  }
}

export default AnswerFormStore
