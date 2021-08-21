import axios from 'axios';
import DadosEstaticosService from '../utils/dadosEstaticosService';

const api = DadosEstaticosService.getURLServidor();

class PerguntaService {
  createQuestion = (userId, question, token) => {
    return axios.post(
      `${api}/questions/users/${encodeURI(userId)}/questions`,
      question,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  getQuestion = (questionId) => {
    return axios.get(`${api}/questions/${encodeURI(questionId)}`);
  };
}

const instance = new PerguntaService();

export default instance;
