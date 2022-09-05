import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = process.env.REACT_APP_MARVEL_BASEURL;
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const hash = "01ab278b9b0ec0c972a2943ff811dfa3";
const apiUrl = `${baseURL}/v1/public/characters`;

export const getHeros = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(
      `${apiUrl}?=ts$1662320386069&apikey=${publicKey}&hash=${hash}`,
    ).then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);
};
