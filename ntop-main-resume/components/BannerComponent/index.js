import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@/styles/components/banner.scss";
import { COMPANY_LOGOS, FEATURES } from "@/constants";
import { BulletIcon } from "@/assets/svg";
import ContactFormComponent from "../ContactFormComponent";
import DemoModalComponent from "../shared/DemoModalComponent";

const BannerComponent = () => {
  //States
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  //Functions
  const handleClose = () => setShow(false);

  const onSubmit = (value) => {
    if (value && value.email) {
      setEmail(value.email);
      setShow(true);
    }
  };

  return (
    <section className="ntop-banner-section-wrapper">
      <div className="ntop-banner-video-wrapper">
        <video width="100%" height="100%" autoPlay>
          <source src="/images/movie.mp4" type="video/mp4" />
          <source src="/images/movie.ogm" type="video/ogm" />
        </video>
      </div>
      <div className="ntop-banner-detail-wrapper">
        <Container>
          <Row>
            <Col md={7} lg={6}>
              <div className="ntop-banner-detail-div">
                <h4 className="ntop-subtitle-text20">
                  Get <span>good</span> great at additive!
                </h4>
                <h1 className="ntop-main-title-text">
                  Bring additive manufacturing to mainstream production with
                  nTop 4!
                </h1>
                <ul className="ntop-optimization-detail-wrapper">
                  {FEATURES.map(({ id, title, subTitle }) => (
                    <li key={id}>
                      <div>
                        <BulletIcon />
                      </div>
                      <div className="optimization-text">
                        <h5 className="ntop-subtitle-text20">{title}</h5>
                        <p className="ntop-paragraph-text16">{subTitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <ContactFormComponent onSubmit={onSubmit} />
              </div>
            </Col>
            <Col md={5} lg={6}>
              <div className="ntop-mockup-banner-imgdiv">
                <img src="/images/mockup-banner-img.png" alt="ntop" />
              </div>
            </Col>
          </Row>
          <div className="ntop-partner-logos-wrapper">
            <ul>
              {COMPANY_LOGOS.map(({ id, src, alt }) => (
                <li key={id}>
                  <img src={src} alt={alt} />
                </li>
              ))}
            </ul>
            <div className="marquee">
              <div className="marquee-content">
                {COMPANY_LOGOS.map(({ id, src, alt }) => (
                  <div className="marquee-item" key={id}>
                    <img src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {show && (
        <DemoModalComponent
          show={show}
          handleClose={handleClose}
          email={email}
        />
      )}
    </section>
  );
};

export default BannerComponent;
