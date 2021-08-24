import axios from 'axios';
import DadosEstaticosService from '../utils/dadosEstaticosService';

const api = DadosEstaticosService.getURLServidor();

class PerguntaService {
  createQuestion = (userId, question, token) => {
    return axios.post(`${api}/questions/users/${encodeURI(userId)}`, question, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  getQuestion = (questionId) => {
    return axios.get(`${api}/questions/${encodeURI(questionId)}`);
  };

  updateQuestion = (questionRequest, token) => {
    const body = {
      title: questionRequest.title,
      content: questionRequest.content,
      qtdLikes: questionRequest.qtdLikes,
      qtdDislikes: questionRequest.qtdDislikes,
      tags: questionRequest.tags,
      answered: questionRequest.answered,
    };
    return axios.put(
      `${api}/questions/${encodeURI(questionRequest.id)}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}

const instance = new PerguntaService();

export default instance;
