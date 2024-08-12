import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

AboutSection.propTypes = {
  showModalButton: PropTypes.func.isRequired,
};

export default function AboutSection({ showModalButton }) {
  return (
    <section id="aboutSection" className="pt-5 px-3 ">
      <Container className="mt-5">
        <h2 className="fw-bold">Tentang Kami</h2>
        <p className="text-justify">
          KDK Al Karomah didirikan pada hari Rabu, 20 September 2000 M atau 21,
          Jumadil Akhir 1421 H. KDK Al Karomah merupakan organisasi dakwah di
          lingkungan kampus UNISKA yang secara struktural di bawah BEM UNISKA
          dan sejajar dengan Unit Kegiatan Mahasiswa (UKM) di UNISKA. KDK Al
          Karomah berkedudukan di Universitas Islam Kalimantan (UNISKA) Muhammad
          Arsyad Al Banjari (MAB). Tujuan Organisasi ini adalah mewujudkan
          civitas akademika muslim di lingkungan UNISKA pada khususnya dan
          masyarakat sekitar pada umumnya agar berkepribadian Islam.
        </p>
        <h2 className="fw-bold mt-3">Visi & Misi</h2>
        <p>
          <b>Visi :</b> Membentuk mahasiswa muslim yang mempunyai pemikiran,
          perasaan, dan perilaku Islami.
          <br />
          <b>Misi :</b> Menumbuh kembangkan nilai-nilai Islam sesuai pedoman
          Syari &apos;at Islam di kampus (Islamisasi kampus) dengan mengacu pada
          pembinaan, pengkaderan, Syi &apos;ar Islam dan Ukhuwah Islamiyah.
        </p>

        <button className="btn btn-success" onClick={showModalButton}>
          Pelajari Lebih Lanjut
        </button>
      </Container>
    </section>
  );
}
