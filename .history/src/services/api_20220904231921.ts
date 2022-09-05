import axios from "axios";

export const getHeros = () => {
  axios
    .get(`https://xmenapiheroku.herokuapp.com/api/characters`)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};

