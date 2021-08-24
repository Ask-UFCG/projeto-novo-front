import { observable } from 'mobx';

class Pergunta {
  @observable id;
  @observable title;
  @observable content;
  @observable qtdLikes;
  @observable qtdDislikes;
  @observable createdAt;
  @observable answered = false;
  @observable tags;
  @observable author;
  @observable answers;
  @observable comments;

  constructor(response) {
    if (response) {
      for (let key in this) {
        this[key] = response[key];
      }
    }
  }
}

export default Pergunta;
