import { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";

export default function DivisionSection() {
  const [show, setShow] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedDivision(null); // Reset selectedDivision on close
  };

  const handleShow = (division) => {
    setSelectedDivision(division);
    setShow(true);
  };

  const divisions = [
    {
      id: 1,
      name: "Opini & Media (Opidia)",
      logo: "src/assets/division-logos/opidia-logo.png",
      objective:
        "Divisi ini bergerak di bidang Desain, Pembuatan Konten dan Penyebaran Konten dakwah di kampus melalui berbagai media. Btw website ini dibuat oleh divisi ini juga loh 😁!",
    },
    {
      id: 2,
      name: "Minat & Bakat (Minba)",
      logo: "src/assets/division-logos/minba-logo.png",
      objective:
        "Divisi ini bertujuan untuk mengembangkan minat & bakat anggota KDK Al-Karomah dan memiliki tugas untuk menyelenggarakan kegiatan yang sifatnya mempererat silah ukhuwah sesama anggota KDK Al Karomah.",
    },
    {
      id: 3,
      name: "Pembinaan & Pengkaderan (Binkad)",
      logo: "src/assets/division-logos/binkad-logo.png",
      objective:
        "Tujuan Divisi ini adalah mewujudkan kader yang berkualitas dengan meningkatkan pemahaman tsaqofah Islam, kedekatan hubungan dengan Allah, yang melahirkan sifat-sifat muslimin dan memiliki tugas membuat rencana aktivitas pembinaan yang mengacu pada sistem pembinaan KDK Al Karomah.",
    },
    {
      id: 4,
      name: "Rumah Tangga & Pengelolaan Masjid",
      logo: "src/assets/division-logos/rtpm-logo.png",
      objective:
        "Divisi ini Menciptakan suasana nyaman di lingkungan mesjid kampus dan di dalam sekretariat KDK Al Karomah UNISKA Banjarmasin",
    },
    {
      id: 5,
      name: "Syiar",
      logo: "src/assets/division-logos/syiar-logo.png",
      objective:
        "Divisi ini bertujuan untuk meningkatkan jalinan-jalinan persaudaraan Islam (ukhuwah Islamiyah) internal dan eksternal kampus dan Sebagai wadah silah ukhuwah dan konsolidasi lembaga dakwah kampus.",
    },
  ];

  return (
    <section id="divisionSection" className="pt-5 px-3">
      <Container className="mt-5">
        <h2 className="fw-bold">Divisi</h2>
        <p className="fst-italic">
          Tekan pada logo divisi untuk selengkapnya !
        </p>
        <Row className="mt-5">
          {divisions.map((division) => (
            <Col key={division.id} md={4} className="">
              <Image
                className="mt-2 shadow"
                width={300}
                src={division.logo}
                alt={division.name}
                onClick={() => handleShow(division)}
                fluid
              />
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">
              <span>Divisi </span>
              {selectedDivision ? selectedDivision.name : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedDivision && (
              <div>
                <p>
                  <b>Nama Divisi:</b> {selectedDivision.name}
                </p>
                <p>{selectedDivision.objective}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
