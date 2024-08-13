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
              src="assets\kdk-logo.webp"
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
            <a
              href="https://forms.gle/X1pLMG9dv7bqV5MP8"
              className="mt-4 btn btn-lg btn-success shadow"
            >
              Bergabung Dengan KDK
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
