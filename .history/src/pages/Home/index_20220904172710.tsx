import { getHeros } from "../../services/api";


export function Home() {
  
  getHeros()

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
