import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function FooterSection() {
  return (
    <footer className="bg-kdk text-light p-3 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="fw-bold">Created by</h5>
            <a
              href="https://www.instagram.com/mirza_mlna/"
              className="text-decoration-none text-light"
            >
              <i className="bi bi-instagram"> </i>
              mirza_mlna
            </a>
          </Col>
          <Col md={6} className="mt-lg-0 mt-3">
            <h5 className="fw-bold">Media Sosial</h5>
            <ul className="list-unstyled ">
              <li>
                <a
                  href="https://www.instagram.com/kdk.alkaromah.uniska/"
                  className="text-decoration-none text-light"
                >
                  <i className="bi bi-instagram"> </i>
                  kdk.alkaromah.uniska
                </a>
              </li>
              <li>
                <a
                  href="mailto:kdkalkaromahuniskaofficial@gmail.com"
                  className="text-decoration-none text-light"
                >
                  <i className="bi bi-envelope"> </i>
                  kdkalkaromahuniskaofficial@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <p className="text-center">
          Copyright © {new Date().getFullYear()} Kajian Dakwah Kampus Al-Karomah
          Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari
        </p>
      </Container>
    </footer>
  );
}
