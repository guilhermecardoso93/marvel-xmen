import { useEffect } from "react";
import { axiosApi } from "./services/api";

export function App() {
  axiosApi()
  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
