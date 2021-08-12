import axios from 'axios'
import DadosEstaticosService from '../utils/dadosEstaticosService'

const api = DadosEstaticosService.getURLServidor()
class UserService {
  registerUser(body) {
    return axios.post(`${api}/users`, body)
  }

  login(body) {
    return axios.post(`${api}/login`, body)
  }

  update = (user, token) => {
    return axios.put(`${api}/users/${encodeURI(user.id)}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}

const instance = new UserService()

export default instance
