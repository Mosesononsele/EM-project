import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import homeprofilephotoImg from "../assets/homeprofilephotoImg.svg";
import locationicon4profile from "../assets/locationIcon4profile.svg";
import linkdlnIcon4profile from "../assets/linkdlnicon4profile.svg";
import xicon4profile from "../assets//X-icon4profile.svg";
import realtorbagIcon4profile from "../assets/realtorbagIcon.svg";

const BioModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>

<div>
    <img src={homeprofilephotoImg} alt="" onClick={handleShow}></img> 
</div>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <section className="d-none d-md-block  ">
        <div className="  d-flex align-items-center gap-3">
          <img
            src={homeprofilephotoImg}
            alt="home-profilephoto-img"
            className="img-fluid"
          />
          <div className="mt-4 ">
            <h4>John Doe</h4>
            <p>0 Friends</p>
          </div>
        </div>

        <hr />
        <h5>Bio</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mi nec turpis vulputate sed.
          Tellus quisque pharetra facilisi nisl nisi consectetur. Sed in nisi
          convallis vitae tortor rhoncus.
        </p>
        <hr />
        <h5>Info</h5>

        <div className="d-flex gap-3 align-items-center ">
          <img src={locationicon4profile} alt="location-icon" className="img-fluid" />
          <h5>Lagos, Nigeria</h5>
        </div>

        <div className="d-flex gap-3 align-items-center mb-4 mt-4">
          <img src={realtorbagIcon4profile} alt="reatorbag-icon" className="img-fluid"/>
          <h5>Realtor</h5>
        </div>
        <hr />
        <div className="d-flex gap-3 align-items-center">
          <img src={xicon4profile} alt="x-icon" className="img-fluid"/>
          <h5>Twitter</h5>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <img src={linkdlnIcon4profile} alt="linkdln-icon" className="img-fluid"/>
          <h5>Linkdln</h5>
        </div>
      </section>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </main>
  )
}

export default BioModal