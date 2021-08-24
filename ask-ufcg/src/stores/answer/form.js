import { action, observable, runInAction, toJS } from 'mobx';
import Answer from '../../domain/answer';
import commentService from '../../services/comment';
import Comment from '../../domain/comment';
import {
  showErrorApiNotification,
  showNotification,
} from '../../utils/notification';

class AnswerFormStore {
  @observable object;
  @observable loading = false;
  @observable comment;

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
  updateAttributeDecoratorKeyCommentEventValue(key, event) {
    this.comment[key] = event.target.value;
  }

  @action
  updateAttributeDecoratorKeyValue(key, value) {
    this.object[key] = value;
  }

  @action
  init(content) {
    this.object = new Answer(content);
    this.comment = new Comment();
  }

  @action
  addComment(user, token, callback) {
    if (this.comment && this.comment.content) {
      this.comment.author = user;
      this.comment.createdAt = new Date();
      commentService
        .addComment(toJS(this.comment), user.id, this.object.id, token)
        .then((response) => {
          runInAction(`Save Comment`, () => {
            showNotification(
              'success',
              null,
              'Comentário adicionado com sucesso'
            );
            this.comment = new Comment();
            this.object.comments.push(new Comment(response.data));
            if (callback) {
              callback();
            }
            this.loading = false;
          });
        })
        .catch((error) => {
          runInAction(`error on Save Comment`, () => {
            this.loading = false;
            showErrorApiNotification(error);
          });
        });
    }
  }
}

export default AnswerFormStore;
