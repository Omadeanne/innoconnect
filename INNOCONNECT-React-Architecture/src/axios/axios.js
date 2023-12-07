import axios from 'axios';
const BASE_URL = 'http://localhost:5000/v1' //'https://innoconnect-backend.onrender.com/v1';

export default axios.create({
  baseURL: BASE_URL,
});
