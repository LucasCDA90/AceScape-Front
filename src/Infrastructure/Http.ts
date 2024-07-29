import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3002/"
})

const url = 'user/66a642cc01ded19ee2782fc0';

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
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE2NDJjYzAxZGVkMTllZTI3ODJmYzAiLCJpYXQiOjE3MjIxNzIxMTksImV4cCI6MTcyMjE3OTMxOX0.8xjSiYlHHKpDJ2RlnsjGPnNdGvxsYtnX-GpsabsHyOA",
    'Content-Type': 'application/json'
  }
};