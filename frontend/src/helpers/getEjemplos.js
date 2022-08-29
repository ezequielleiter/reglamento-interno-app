import reglamentosAPI from '../api/reglamentosAPI';
import axios from 'axios';
const getEjemplos = async () => {
 const resp = await axios.get('http://localhost:8080/api/ejemplos');
 return resp.data.ejemplos;
};

export default getEjemplos;
