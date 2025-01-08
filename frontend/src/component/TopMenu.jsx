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
            📚 BOOK SELL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: "1.1rem", gap: "15px" }}>
              <Nav.Link as={Link} to="/home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="insert" className="nav-link-custom">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="/display" className="nav-link-custom">
                Display
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link-custom">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/update" className="nav-link-custom">
                Update
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenu;
