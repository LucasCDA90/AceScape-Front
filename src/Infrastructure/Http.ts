import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3000/"
})

const url = 'user/66a21ba4aa3093ac9fb4880a';

const data = {
  username: 'John Doe'
};
const config = {
  headers: {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEyMWJhNGFhMzA5M2FjOWZiNDg4MGEiLCJpYXQiOjE3MjE5MDA1ODksImV4cCI6MTcyMTkwNzc4OX0.xbMGsaGDtP7aQJfHPqMFIW6vdJd7PGxYIInqXJTH2mo',
    'Content-Type': 'application/json'
  }
};

axios.put(url, data, config)
  .then(response => {
    console.log('Utilisateur mis à jour:', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la mise à jour:', error);
  });