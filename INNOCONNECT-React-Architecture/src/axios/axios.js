import axios from 'axios';
const BASE_URL = 'https://innoconnect-qfk8.onrender.com/v1';

export default axios.create({
  baseURL: BASE_URL,
});
