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
            <Nav.Link href="/story" className="button-64">
              <div className='text'>
                <img src={storm} width="25%" />
                <span>Story</span>
              </div>
            </Nav.Link>
            <Nav.Link href="/characters">
              <div>
              <img src={wolverine} width="20%" />
              <span>Characters</span>
              </div>
            </Nav.Link>
            <Nav.Link href="/episodes">
              <div>
              <img src={cyclops} width="20%" />
              <span>Episodes</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
