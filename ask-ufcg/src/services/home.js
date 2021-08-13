import axios from 'axios'
import DadosEstaticosService from '../utils/dadosEstaticosService'

const api = DadosEstaticosService.getURLServidor()

class HomeService {
  getAllAsks = () => {
    return axios.get(`${api}/search`)
  }
}

const instance = new HomeService()

export default instance
