import axios from 'axios';

const reglamentoPOST = async () => {
 axios
  .post('/user', {
   firstName: 'Fred',
   lastName: 'Flintstone',
  })
  .then(function (response) {
   console.log(response);
  })
  .catch(function (error) {
   console.log(error);
  });
};
