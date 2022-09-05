import axios from "axios";
import { useEffect } from "react";

const baseURL = process.env.REACT_APP_MARVEL_BASEURL;
const publicKey = '8a359729bd0c67150ea6ddead0f2f97c'//process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const hash = "01ab278b9b0ec0c972a2943ff811dfa3";
const apiUrl = `${baseURL}/v1/public/characters`;

export const getHeros = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  axios
  .get(`https://xmenapiheroku.herokuapp.com/api/characters`)
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err));
};
