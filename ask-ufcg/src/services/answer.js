import axios from 'axios';
import DadosEstaticosService from '../utils/dadosEstaticosService';

const api = DadosEstaticosService.getURLServidor();

class AnswerService {
  addAnswer = (answerRequest, userId, questionId, token) => {
    return axios.post(
      `${api}/answers/users/${encodeURI(userId)}/questions/${encodeURI(
        questionId
      )}`,
      answerRequest,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  updateAnswer = (answerRequest, token) => {
    debugger;
    const body = {
      content: answerRequest.content,
      qtdLikes: answerRequest.qtdLikes,
      qtdDislikes: answerRequest.qtdDislikes,
      solution: answerRequest.solution,
    };
    return axios.put(`${api}/answers/${encodeURI(answerRequest.id)}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

const instance = new AnswerService();

export default instance;
