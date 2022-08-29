import axios from 'axios';

const getReglamentos = axios.create({
 baseURL: 'http://localhost:8080/api/reglamentos',
});

export default getReglamentos;
