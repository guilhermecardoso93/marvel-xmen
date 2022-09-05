import { useEffect } from "react";
import axios from 'axios'
import md5 from "md5";


const baseURL = "http://gateway.marvel.com/v1/public/characters/?ts=";
const publicKey = process.env.REACT_MARVEL_PUBLIC_KEY;
const privateKey: any = process.env.REACT_MARVEL_PRIVATE_KEY;
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

//export const api = `${baseURL}${time}&apikey=$73cf9bdb043504dc73e5865bb101b076&hash=${hash}`


export function axiosApi() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(
      `${baseURL}${time}&apikey=$73cf9bdb043504dc73e5865bb101b076&hash=${hash}`
      )
      .then( response => console.log(response))
      .catch(err => console.log(err));
  }, []);
}