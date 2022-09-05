import axios from "axios";

const baseURL = process.env.REACT_APP_MARVEL_BASEURL;

export const apiMarvel = (value: any) => {
  const apiUrl = `${baseURL}/v1/public/characters`;

  const time = Date.now().toString();
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const hash = getHash(time, privateKey, publicKey);

  const url =
    `${apiUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    const response = axios(url);
    const data = response;
    return data;
  } catch (err) {
    console.log(err);
    return;
  }
};
