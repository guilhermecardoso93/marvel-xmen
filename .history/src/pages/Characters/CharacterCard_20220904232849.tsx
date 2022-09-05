import axios from "axios";
import { Col, Container, Row, Tab } from "react-bootstrap";

export function CharacterCard() {
  const heroData = axios.get(`https://xmenapiheroku.herokuapp.com/api/characters`);

  console.log(heroData)

  axios.get('https://xmenapiheroku.herokuapp.com/api/characters')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .then(function () {
    // sempre será executado
  });  

  return (
    <Container>
      <Row>
        <Col>
          <h1>Oi</h1>
        </Col>
      </Row>
    </Container>
  );
}
