import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { api } from "../../services/api";


interface HeroI {
  id: number,
  name: string,
  alias: string;
  description: string;
  powers: string[]
}

export function CharacterCard() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => setHero(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
         
        </Col>
      </Row>
    </Container>
  );
}
