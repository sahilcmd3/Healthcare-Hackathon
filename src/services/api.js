import axios from 'axios';

// Update baseURL to your Django backend server URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api/contracts' // for local development
  // baseURL: 'https://your-production-url/api/contracts' // for production
});

export default api;
