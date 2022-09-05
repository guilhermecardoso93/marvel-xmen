import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../assets/logo.png";
import storm from "../../assets/storm.png";
import wolverine from "../../assets/wolverine.png";
import cyclops from "../../assets/cyclops.png";
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
            <Nav.Link href="/story">
              <div>
                <img src={storm} width="20%" />
                <span>Story</span>
              </div>
            </Nav.Link>
            <Nav.Link href="/characters">
              <img src={wolverine} width="20%" />
              <span>Characters</span>
            </Nav.Link>
            <Nav.Link href="/episodes">
              <img src={cyclops} width="20%" />
              <span>Episodes</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
