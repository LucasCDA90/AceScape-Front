import axios from 'axios'

export const http = axios.create({
    baseURL: "http://localhost:3002/"
})

const url = 'user/66a7425d7978d393e05c2d06';

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
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE3NDI1ZDc5NzhkMzkzZTA1YzJkMDYiLCJpYXQiOjE3MjIyMzc1NDIsImV4cCI6MTcyMjI0NDc0Mn0.fmlkm08anIGY5nm2t1eIJQtUnJvgA6h3HB_a8Ao9DUU",
    'Content-Type': 'application/json'
  }
};