import { useEffect } from "react";
import { api } from "./api/axios";

export function App() {
  useEffect(() => {
    api
    .then((response: any) => console.log(response))
    .catch((err: any):any => console.log(err))
  }, [])

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}

