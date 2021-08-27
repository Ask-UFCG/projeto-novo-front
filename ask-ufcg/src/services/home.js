import axios from 'axios'
import DadosEstaticosService from '../utils/dadosEstaticosService'

const api = DadosEstaticosService.getURLServidor()

class HomeService {
  getAllAsks = () => {
    return axios.get(`${api}/search`)
  }

  getAllAsksByFilter = (filter = 'new') => {
    return axios.get(`${api}/search?filter=${filter}`)
  }

  getAllAsksBySearch = (title, filter = 'new') => {
    return axios.get(`${api}/search?title=${title}&filter=${filter}`)
  }
}

const instance = new HomeService()

export default instance
