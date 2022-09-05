import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/logo.png";
import storm from "../../assets/storm.png";
import "./styles.css";

export function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="X-men Logo" width="20%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/story"
              className="button-82-front button-82-pushable"
            >
              <img src={storm} width='20%'/>
              <span>Story</span>
            </Nav.Link>
            <Nav.Link
              href="/characters"
              className="button-82-front button-82-pushable"
            >
              {" "}
              Characters
            </Nav.Link>
            <Nav.Link
              href="/episodes"
              className="button-82-front button-82-pushable"
            >
              Episodes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
