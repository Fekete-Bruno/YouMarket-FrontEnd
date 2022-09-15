import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getProducts(){
    const promise = axios.get(`${BASE_URL}/`);
    return promise;
}

function handleError(err){
    console.error(err);
    alert(err.message);
}

export {getProducts,handleError};