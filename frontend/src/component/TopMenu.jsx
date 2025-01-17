import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../css/TopMenu.css";

const TopMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ padding: "15px" }}>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            🧑‍⚕️Doctor🩺
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: "1.1rem", gap: "15px" }}>
              <Nav.Link as={Link} to="/home" className="nav-link-custom">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/login" className="nav-link-custom">
                Log in
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link-custom">
               search
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="nav-link-custom">
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to="/registration" className="nav-link-custom">
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenu;
