import axios from 'axios'
import md5 from 'md5'

const baseURL = 'http://gateway.marvel.com/v1/public/characters/?ts=';
const publicKey = process.env.REACT_MARVEL_PUBLIC_KEY;
const privateKey:any = process.env.REACT_MARVEL_PRIVATE_KEY;
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const api = require('axios');
axios.get(`${baseURL}${time}&apikey${publicKey}&${hash}`)