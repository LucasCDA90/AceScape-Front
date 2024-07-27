import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3002/"
})

const url = 'user/66a394ed1e1ab3b832f7657a';

const data = {
  username: "John Doe"
  // username: valueForm.username,
  // firstName: valueForm.firstName,
  // lastName: valueForm.lastName,
  // email: valueForm.email,
  // password: valueForm.password,
  // confirmpassword: valueForm.confirmPassword,
  // newpassword: valueForm.newPassword
};
const config = {
  headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzOTRlZDFlMWFiM2I4MzJmNzY1N2EiLCJpYXQiOjE3MjE5OTY1MjksImV4cCI6MTcyMjAwMzcyOX0.zrU9q0vIwIrAZTDtB65foeqt4I5X7AUYbK3QGeCLu80",
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
