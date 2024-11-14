import axios from 'axios';

// Créez une instance d'Axios avec la configuration de base
const api = axios.create({
  baseURL: 'http://localhost:5000', // L'URL de votre API NestJS (ajustez si nécessaire)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
