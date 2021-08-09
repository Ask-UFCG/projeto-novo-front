import axios from 'axios';

class UserService {
  registerUser(body) {
    return axios.post(`https://api-ask-ufcg.herokuapp.com/login`, body);
  }
}

const instance = new UserService();

export default instance;
