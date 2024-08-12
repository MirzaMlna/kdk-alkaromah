import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index.css";

export default function MainNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-kdk sticky-top shadow "
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          KDK AL-KAROMAH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#aboutSection">
              <i className="bi bi-people"> </i> Tentang Kami
            </Nav.Link>
            <Nav.Link href="#divisionSection">
              <i className="bi bi-hdd-network"> </i> Divisi
            </Nav.Link>
            {/* <Nav.Link href="#gallerySection">
              <i className="bi bi-images"> </i>Galeri
            </Nav.Link> */}
            <NavDropdown title="Media Sosial" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/kdk.alkaromah.uniska/">
                <i className="bi bi-instagram"> </i>Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:kdkalkaromahuniskaofficial@gmail.com">
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
