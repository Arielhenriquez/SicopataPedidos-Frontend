import axios from "axios";
const key = sessionStorage.getItem("token");
export default axios.create({

  baseURL: "https://localhost:7205/api/",

  headers: {
    "Content-type": "application/json",
    "Authorization": 'bearer ' + key
  }
});