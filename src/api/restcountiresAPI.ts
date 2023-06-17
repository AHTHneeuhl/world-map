import axios from "axios";

const restcountiresAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export default restcountiresAPI;
