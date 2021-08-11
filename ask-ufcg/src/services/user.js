import axios from 'axios';

class UserService {
  registerUser(body) {
    return axios.post(`http://localhost:8081/users`, body);
  }

  login(body) {
    return axios.post(`http://localhost:8081/login`, body);
  }
}

const instance = new UserService();

export default instance;
