import { Col, Container, Row, Tab } from "react-bootstrap";
import { CharacterCard } from "./CharacterCard";

export function Characters() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col size={12}  >
          <h2>Characters</h2>
          <CharacterCard/>
        </Col>
      </Row>
    </Container>
  )
}