import axios from "axios";
import { useEffect } from "react";

export function Home() {
  const baseURL = process.env.REACT_APP_MARVEL_BASEURL;
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const hash = "01ab278b9b0ec0c972a2943ff811dfa3";
  const apiUrl = `http://gateway.marvel.com/v1/public/characters`;

  useEffect(() => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters?=ts$1662320386069&apikey=73cf9bdb043504dc73e5865bb101b076&hash=01ab278b9b0ec0c972a2943ff811dfa3`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
