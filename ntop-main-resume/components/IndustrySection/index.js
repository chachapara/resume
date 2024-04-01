import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import "@/styles/components/industry.scss";
import { INDUSTRIES } from "@/constants";

const IndustrySection = () => {
  // States
  const [activeKey, setActiveKey] = useState(INDUSTRIES.at(0).key);

  return (
    <section className="ntop-industries-section-wrapper">
      <Container>
        <div>
          <h3 className="ntop-main-title-text">Industries</h3>
        </div>
        <div className="ntop-Industrie-detail-tabs-wrapper">
          <Tabs
            id="uncontrolled-tab-example"
            className="mb-3"
            activeKey={activeKey}
            onSelect={setActiveKey}
          >
            {INDUSTRIES.map(({ id, key, title, imageSrc, description }) => (
              <Tab eventKey={key} title={title} key={id}>
                <div className="ntop-Industrie-detailbox">
                  <div className="ntop-imgbox-wrapper">
                    <img src={imageSrc} alt={`industry-image-${id}`} />
                  </div>
                  <h5 className="ntop-subtitle-text20">{description}</h5>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default IndustrySection;
