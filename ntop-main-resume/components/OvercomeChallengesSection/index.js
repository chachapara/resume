import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "@/styles/components/overcome-challenges.scss";
import { CHALLENGES_STEPS } from "@/constants";

const OvercomeChallengesSection = () => (
  <section className="ntop-overcome-section-wrapper">
    <Container>
      <Row>
        <Col md={12} lg={5} xl={4}>
          <div className="ntop-overcome-block">
            <h3 className="ntop-main-title-text">
              Overcome these challenges in additive manufacturing
            </h3>
            <button className="ntop-theme-btn">Get a demo</button>
          </div>
        </Col>
        <Col md={12} lg={7} xl={8}>
          <div className="ntop-overcome-category-box-wrapper">
            {CHALLENGES_STEPS.map(({ id, title, description }, index) => (
              <div className="ntop-overcome-category-boxs" key={id}>
                <h4>{`0${index + 1}`}</h4>
                <div>
                  <h5 className="ntop-subtitle-text20">{title}</h5>
                  <p className="ntop-paragraph-text16">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ntop-overcome-mobileview">
            <button className="ntop-theme-btn">Get a demo</button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default OvercomeChallengesSection;
