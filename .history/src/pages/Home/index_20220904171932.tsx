import axios from "axios";
import md5 from 'md5'
import { useEffect } from "react";

export function Home() {
  const baseURL = process.env.REACT_APP_MARVEL_BASEURL;
  const publicKey = '8a359729bd0c67150ea6ddead0f2f97c';
  const privateKey = 'fe566675a3x799x86a8dc5e150ae7bf0d28858aa';
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
