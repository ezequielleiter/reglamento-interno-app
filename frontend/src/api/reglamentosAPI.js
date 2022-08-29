import axios from 'axios';

const reglamentosAPI = axios.get('http://localhost:8080/api/reglamentos/');

export default reglamentosAPI;
