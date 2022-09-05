import { useEffect } from "react";
import { axios } from "./api/axios";

export function App() {
  useEffect(() => {
    axios
    .then((response: any) => console.log(response))
    .catch((err: any):any => console.log(err))
  }, [])

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}

