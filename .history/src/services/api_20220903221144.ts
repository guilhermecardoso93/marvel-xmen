import { useEffect } from "react";
import axios from 'axios'
import md5 from "md5";


const baseURL = "http://gateway.marvel.com/v1/public/characters/?ts=";
const publicKey = '73cf9bdb043504dc73e5865bb101b076';
const time = 1662253364;
const hash = 'b954b2d6d955ea771ab8574493291471';

//export const api = `${baseURL}${time}&apikey=$73cf9bdb043504dc73e5865bb101b076&hash=${hash}`


export function axiosApi() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(
      `http://gateway.marvel.com/v1/public/characters/?ts=${time}&apikey=${publicKey}&hash=${hash}`
      )
      .then( response => console.log(response))
      .catch(err => console.log(err));
  }, []);
}