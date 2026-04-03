 import axios from 'axios'

 const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // change if your route differs
  withCredentials: true, // important if using cookies (auth)
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;