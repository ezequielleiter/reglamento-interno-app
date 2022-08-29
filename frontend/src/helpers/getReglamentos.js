import reglamentosAPI from '../api/reglamentosAPI';
import axios from 'axios';
const getReglamentos = async () => {
 const resp = await axios.get('http://localhost:8080/api/reglamentos/');
 return resp.data.reglamentos;
};

export default getReglamentos;
