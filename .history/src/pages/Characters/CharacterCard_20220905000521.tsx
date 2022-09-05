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
          {hero.map((hero) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={hero.img} />
                <Card.Body>
                  <Card.Title>{hero.alias}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Name: {hero.name}</ListGroup.Item>
                  <ListGroup.Item>
                    Powers: 
                    { hero.powers.map((power) => {return(
                    <span>{power}</span>
                  )})}
                  </ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
