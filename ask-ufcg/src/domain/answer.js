import { observable } from 'mobx';

class Answer {
  @observable id;
  @observable content;
  @observable qtdLikes = 0;
  @observable qtdDislikes = 0;
  @observable createAt;
  @observable solution = false;
  @observable author;
  @observable question;
  @observable comments;

  constructor(response) {
    if (response) {
      for (let key in this) {
        this[key] = response[key];
      }
    }
  }
}

export default Answer;
