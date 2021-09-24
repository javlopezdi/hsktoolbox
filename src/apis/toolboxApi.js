import axios from "axios";

const toolboxApi = axios.create({
  baseURL: "http://192.168.100.10:3001/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default toolboxApi;
