import axios from "axios";

// restcountriesAPI instance to make api call at restcountries.com/v3.1 with axios
const restcountiresAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export default restcountiresAPI;
