import axios from "axios";
import md5 from 'md5'
import { useEffect } from "react";

export function Home() {
  const baseURL = process.env.REACT_APP_MARVEL_BASEURL;
  const publicKey :any = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const time = Number(new Date())
  const hash = md5(time + publicKey + privateKey)
  const apiUrl = `http://gateway.marvel.com/v1/public/characters`;

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters?=ts${time}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
