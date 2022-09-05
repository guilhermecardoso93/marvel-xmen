import axios from "axios";
import { Col, Container, Row} from "react-bootstrap";

export function CharacterCard() {
 
  axios.get('https://xmenapiheroku.herokuapp.com/api/characters')
  .then(function (response) {
    const heroData = (response: { data: any; }) => response.data
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  

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
