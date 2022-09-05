import axios from "axios";

export const api = axios.create({
  baseURL: "https://xmenapiheroku.herokuapp.com/api/characters",
});

