import Link from "next/link";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DemoModalComponent from "../shared/DemoModalComponent";
import "@/styles/components/header.scss";

const HeaderComponent = () => {
  //States
  const [show, setShow] = useState(false);

  //Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Render Method
  return (
    <>
      <header className="nTop-header-bar-wrapper">
        <Container>
          <div className="ntop-header-wrapper">
            <Link href="#" className="ntop-header-logo">
              <img src="/images/ntop-logo.svg" alt="ntop" />
            </Link>
            <div className="ntop-signin-get-btns-wrapper">
              <button className="ntop-theme-btn ntop-theme-btn-border">
                Sign in
              </button>
              <button className="ntop-theme-btn" onClick={handleShow}>
                Get a demo
              </button>
            </div>
          </div>
        </Container>
      </header>
      {show && <DemoModalComponent show={show} handleClose={handleClose} />}
    </>
  );
};

export default HeaderComponent;
