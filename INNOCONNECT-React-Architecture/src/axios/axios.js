import axios from 'axios';
const local = 'http://localhost:5000/v1';
const remote = 'https://innoconnect-backend.onrender.com/v1';

const BASE_URL = local;

export default axios.create({
  baseURL: BASE_URL,
});
