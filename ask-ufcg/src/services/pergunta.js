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

  addLike = (questionId, userId, token) => {
    return axios.get(
      `${api}/questions/${encodeURI(questionId)}/users/${encodeURI(
        userId
      )}/like`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  removeLike = (questionId, userId, token) => {
    return axios.delete(
      `${api}/questions/${encodeURI(questionId)}/users/${encodeURI(
        userId
      )}/like`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  addDislike = (questionId, userId, token) => {
    return axios.get(
      `${api}/questions/${encodeURI(questionId)}/users/${encodeURI(
        userId
      )}/dislike`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  removeDislike = (questionId, userId, token) => {
    return axios.delete(
      `${api}/questions/${encodeURI(questionId)}/users/${encodeURI(
        userId
      )}/dislike`,
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
