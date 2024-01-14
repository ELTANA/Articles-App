import axios from 'axios';

const BASE_URL = 'https:///my-json-server.netlify.app' as const;
// const BASE_URL = 'http://localhost:3000' as const;
// const BASE_URL = 'https://my-json-server.typicode.com/ELTANA/Articles-App' as const;

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
