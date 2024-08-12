import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index.css";

export default function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-kdk sticky-top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          KDK AL-KAROMAH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">
              <i className="bi bi-people"> </i> Tentang Kami
            </Nav.Link>
            <Nav.Link href="#division">
              <i className="bi bi-hdd-network"> </i> Divisi
            </Nav.Link>
            <Nav.Link href="#gallery">
              <i className="bi bi-images"> </i>Galeri
            </Nav.Link>
            <NavDropdown title="Sosial Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <i className="bi bi-instagram"> </i>Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <i className="bi bi-envelope"> </i>Email
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
