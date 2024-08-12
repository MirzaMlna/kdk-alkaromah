import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useMediaQuery } from "react-responsive";

export default function HeroSection() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="heroSection" className="text-light">
      <Container fluid className=" text-center p-5">
        <Row className="">
          <Col md={6}>
            <Image
              width={isSmallScreen ? 100 : 200} // Adjust width based on screen size
              src="../src/assets/kdk-logo.png"
              className="mb-3 me-3"
              fluid
              rounded
            />
          </Col>
          <Col md={6}>
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
