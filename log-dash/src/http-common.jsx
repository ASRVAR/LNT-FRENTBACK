import axios from "axios";



export default axios.create({
  baseURL: "http://localhost:33993/api/",
  headers: {
    "Content-type": "application/json"
  }
});