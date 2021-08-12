import axios from 'axios';

class PerguntaService {
  createQuestion = (userId, question, token) => {
    debugger;
    return axios.post(
      `http://localhost:8081/questions/users/${encodeURI(userId)}/questions`,
      question,
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
