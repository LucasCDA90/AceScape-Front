import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3002/"
})

const url = 'user/66a23f7cbec8b089a6970ede';

const data = {
  username: 'John Doe'
};
const config = {
  headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEyM2Y3Y2JlYzhiMDg5YTY5NzBlZGUiLCJpYXQiOjE3MjE5MTEwMTksImV4cCI6MTcyMTkxODIxOX0.9vC8-qIxuPzfRNDcqEoiujJjoCBvurEX28exABHI-mY",
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
