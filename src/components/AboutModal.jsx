import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

AboutModal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default function AboutModal({ modalState, closeModal }) {
  return (
    <Modal
      show={modalState}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tentang KDK Al-Karomah
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <b>Tanggal Didirikan : </b>20 September 2000M / 21 Jumaidil Akhir
            1421 H
          </li>
          <li>
            <b>Kedudukan : </b>Universitas Islam Kalimantan (UNISKA) Muhammad
            Arsyad Al Banjari (MAB).
          </li>
          <li>
            <b>Asas : </b>Syariat Islam
          </li>
          <li>
            <b>Fungsi : </b>Sebagai wadah pengkajian ilmu keislaman, pengkaderan
            serta pengemban dakwah Islam.
          </li>
          <li>
            <b>Sifat : </b>Organisasi dakwah di lingkungan kampus UNISKA yang
            secara struktural di bawah BEM UNISKA dan sejajar dengan Unit
            Kegiatan Mahasiswa (UKM) di UNISKA .
          </li>
          <li>
            <b>Tujuan : </b>Mewujudkan civitas akademika muslim di lingkungan
            UNISKA pada khususnya dan masyarakat sekitar pada umumnya agar
            berkepribadian Islam.
          </li>
          <li>
            <b>Visi : </b>Membentuk mahasiswa muslim yang mempunyai pemikiran,
            perasaan, dan perilaku Islami.
          </li>
          <li>
            <b>Misi : </b>Menumbuh kembangkan nilai-nilai Islam sesuai pedoman
            Syari’at Islam di kampus (Islamisasi kampus) dengan mengacu pada
            pembinaan, pengkaderan, Syi’ar Islam dan Ukhuwah Islamiyah.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Tutup</Button>
      </Modal.Footer>
    </Modal>
  );
}
