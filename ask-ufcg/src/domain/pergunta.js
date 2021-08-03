import { observable } from 'mobx';

class Pergunta {
  @observable id;
  @observable title;
  @observable content;
  @observable qtdLikes;
  @observable qtdDislikes;
  @observable createAt;
  @observable answered;
  @observable tags;

  constructor(response) {
    if (response) {
      for (let key in this) {
        this[key] = response[key];
      }
    }
  }
}

export default Pergunta;
