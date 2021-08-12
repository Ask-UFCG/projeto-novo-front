import axios from 'axios';

class UserService {
  registerUser(body) {
    return axios.post(`http://localhost:8081/users`, body);
  }

  login(body) {
    return axios.post(`http://localhost:8081/login`, body);
  }

  update = (user, token) => {
    return axios.put(
      `http://localhost:8081/users/${encodeURI(user.id)}`,
      user,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
}

const instance = new UserService();

export default instance;
