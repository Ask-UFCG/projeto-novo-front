import axios from 'axios'
import DadosEstaticosService from '../utils/dadosEstaticosService'

const api = DadosEstaticosService.getURLServidor()

class CommentService {
  addComment = (commentRequest, userId, answeredId, token) => {
    return axios.post(
      `${api}/comments/answers/${encodeURI(answeredId)}/users/${encodeURI(userId)}`,
      commentRequest,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }
}

const instance = new CommentService()

export default instance
