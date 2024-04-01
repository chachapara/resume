import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DemoModalComponent from "../shared/DemoModalComponent";

const GetDemoSection = () => {
  //States
  const [show, setShow] = useState(false);

  //Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Render Method

  return (
    <>
      <section className="ntop-getntop-section-wrapper">
        <Container>
          <div className="ntop-getntop-wrapper">
            <h5 className="ntop-getntop-title-text">Get nTop demo</h5>
            <h6 className="ntop-subtitle-text20">
              See how engineers build revolutionary heat exchangers in a
              fraction of the time.
            </h6>
            <button className="ntop-theme-btn" onClick={handleShow}>
              Get a demo
            </button>
          </div>
        </Container>
      </section>
      {show && <DemoModalComponent show={show} handleClose={handleClose} />}
    </>
  );
};

export default GetDemoSection;
