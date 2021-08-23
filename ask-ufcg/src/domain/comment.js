import { observable } from 'mobx';

class Comment {
  @observable id;
  @observable content;
  @observable createdAt;
  @observable author;

  constructor(response) {
    if (response) {
      for (let key in this) {
        this[key] = response[key];
      }
    }
  }
}

export default Comment;
