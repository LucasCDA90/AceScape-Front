import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3002/"
})

const url = 'user/66a257f4aa3093ac9fb4880d';

const data = {
  username: 'John Doe'
};
const config = {
  headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEyNTdmNGFhMzA5M2FjOWZiNDg4MGQiLCJpYXQiOjE3MjE5MTUzODQsImV4cCI6MTcyMTkyMjU4NH0.eYNNbt5orIzGeYym-XA34j6bqYfvvB_nmWv1r-2DjoY",
    'Content-Type': 'application/json'
  }
};

http.put(url, data, config)
  .then(response => {
    console.log('Utilisateur mis à jour:', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la mise à jour:', error);
  });
