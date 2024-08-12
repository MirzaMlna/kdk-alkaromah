import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function AboutSection() {
  return (
    <section id="aboutSection" className="mt-5">
      <Container>
        <Row>
          <Col md={5}>
            <Image
              src="../src/assets/kdk-mockup.jpg"
              className="mb-3 shadow"
              fluid
              rounded
            />
          </Col>
          <Col md={1}></Col>
          <Col md={6} className="mt-lg-0 mt-3">
            <h2 className="fw-bold">Tentang Kami</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique arcu a lectus blandit fringilla. Ut pharetra augue nec
              tellus elementum, eget aliquam dolor.
            </p>
            <button className="btn btn-success">Pelajari Lebih Lanjut</button>
            <h2 className="fw-bold mt-3">Visi dan Misi</h2>
            <ul>
              <li>
                Visi: Menjadi perusahaan teknologi terkemuka di Indonesia.
              </li>
              <li>
                Misi: Menyediakan solusi teknologi inovatif untuk masyarakat.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
