import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { api } from "../../services/api";

interface HeroI {
  id: number;
  name: string;
  alias: string;
  img: string;
  description: string;
  powers: string[];
}

export function CharacterCard() {
  const [hero, setHero] = useState<HeroI[]>([]);
  const [hero2, setHero2] = useState<HeroI[]>([]);

  useEffect(() => {
    api
      .get("characters")
      .then((response) => setHero(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      api
      .get("characters?page=2")
      .then((response) => setHero2(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {hero.map((hero) => {
            return (
              <Card style={{ width: "18rem" }} key={hero.id}>
                <Card.Img variant="top" src={hero.img} />
                <Card.Body>
                  <Card.Title>{hero.alias}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Name: {hero.name}</ListGroup.Item>
                  <ListGroup.Item>
                    Powers:
                    {hero.powers}
                  </ListGroup.Item>
                  <ListGroup.Item>{hero.description}</ListGroup.Item>
                </ListGroup>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
