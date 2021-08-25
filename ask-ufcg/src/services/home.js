import axios from 'axios'
import DadosEstaticosService from '../utils/dadosEstaticosService'

const api = DadosEstaticosService.getURLServidor()

class HomeService {
  getAllAsks = () => {
    return axios.get(`${api}/search`)
  }

  getAllAsksBySearch = (title, filter = 'new') => {
    return axios.get(`${api}/search?title=${title}&filter=${filter}`)
  }
}

const instance = new HomeService()

export default instance
