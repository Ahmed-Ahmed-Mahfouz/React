import axios from 'axios';
const baseURL = 'https://json-server-ahmed-mahfouz.vercel.app/products';

const getAllProducts = () => axios.get(baseURL);
const getProduct = (id) => axios.get(`${baseURL}/${id}`);
const createProduct = (data) => axios.post(baseURL, data);
const updateProduct = (id, data) => axios.put(`${baseURL}/${id}`, data);
const deleteProduct = (id) => axios.delete(`${baseURL}/${id}`);

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
