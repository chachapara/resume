import React from "react";
import { Container } from "react-bootstrap";
import "@/styles/components/capabilities.scss";
import { CAPABILITIES } from "@/constants";

const CapabilitiesSection = () => (
  <section className="ntop-capabilities-category-section">
    <Container>
      <div className="ntop-category-boxwrapper">
        <div className="ntop-category-box">
          <div className="ntop-bgbox-wrapper">
            <h3 className="ntop-main-title-text">
              What are the new capabilities of nTop 4?
            </h3>
          </div>
        </div>
        <div className="ntop-category-box category-boxs-wrapper">
          <div className="ntop-grid-wraper">
            {CAPABILITIES.map(({ id, title, descriptions }) => (
              <div className="ntop-grid-cols" key={id}>
                <div className="ntop-bgbox-wrapper ntop-bgbox-darkbox">
                  <h5 className="ntop-subtitle-text20">{title}</h5>
                  <div>
                    {descriptions.map((descText, index) => (
                      <p className="ntop-paragraph-text16" key={index}>
                        {descText}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default CapabilitiesSection;
