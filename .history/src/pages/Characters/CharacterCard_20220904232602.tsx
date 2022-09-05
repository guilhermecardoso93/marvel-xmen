import axios from "axios";
import { Col, Container, Row, Tab } from "react-bootstrap";

export function CharacterCard() {
  const heroData = axios.get(`https://xmenapiheroku.herokuapp.com/api/characters`);
  
  console.log(heroData)

  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
