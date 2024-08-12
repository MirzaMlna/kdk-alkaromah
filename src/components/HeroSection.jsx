import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeroSection() {
  return (
    <section id="heroSection">
      <Container fluid className="shadow text-center p-5">
        <Row className="">
          <Col>
            <h1 className="fw-bold">
              Kajian Dakwah Kampus <br /> Al-Karomah
            </h1>
            <h4 className="fw-light fst-italic">
              &ldquo; Mencetak Generasi Terbaik Ummat &rdquo;
            </h4>
            <button className="btn btn-lg btn-success mt-4">
              Gabung Sekarang
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
