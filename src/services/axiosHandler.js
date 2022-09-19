import axios from "axios";
//BASE_URL should end with "/"
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getHeaders() {
  const { token } = JSON.parse(localStorage.getItem("youmarket"));
  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return config;
  }
}

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

function getProductById(productId){
  const promise = axios.get(`${BASE_URL}product/${productId}`);
  return promise;
}

function getCart() {
  const config = getHeaders();
  const promise = axios.get(`${BASE_URL}cart`, config);
  return promise;
}

function postCart(product){
  const config = getHeaders();
  const promise = axios.post(`${BASE_URL}cart`,product,config);
  return promise;
}

function deleteCart(_id){
  const config = getHeaders();
  config.headers.data = _id;
  const promise = axios.delete(`${BASE_URL}cart`,config);
  return promise;
}

function getOrder() {
  const config = getHeaders();
  const promise = axios.get(`${BASE_URL}order`, config);
  return promise;
}

function postOrder(body) {
  const config = getHeaders();
  const promise = axios.post(`${BASE_URL}order`, config, body);
  return promise;
}

export {
  getProducts,
  handleError,
  login,
  signUp,
  getProductById,
  getCart,
  postCart, 
  deleteCart,
  getOrder,
  postOrder,
};
