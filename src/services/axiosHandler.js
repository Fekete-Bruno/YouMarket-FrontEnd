import axios from "axios";
//BASE_URL should end with "/"
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getProducts() {
  const promise = axios.get(`${BASE_URL}`);
  return promise;
}

function handleError(err) {
  console.error(err);
  alert(err.message);
}

function login(body) {
  const promise = axios.post(`${BASE_URL}sign-in`, body);
  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}sign-up`, body);
  return promise;
}

export { getProducts, handleError, login, signUp };
