import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/user/repo' as const;

const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);

export default instance;
