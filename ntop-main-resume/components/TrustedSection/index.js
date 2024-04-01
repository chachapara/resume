import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "@/styles/components/slider.scss";
import { TESTIMONIALS } from "@/constants";

const TrustedSection = () => {
  // States
  const [activeItem, setActiveItem] = useState(0);

  // Handlers
  const handleSelect = (selectedIndex) => {
    setActiveItem(selectedIndex);
  };

  return (
    <section className="ntop-trusted-section-wrapper">
      <Container>
        <div className="ntop-headerbar">
          <h3 className="ntop-main-title-text">Trusted by world-class teams</h3>
        </div>
        <Carousel
          interval={2500}
          activeIndex={activeItem}
          onSelect={handleSelect}
          className={
            activeItem > 0
              ? activeItem === TESTIMONIALS.length - 1
                ? "right"
                : ""
              : "left"
          }
        >
          {TESTIMONIALS.map(({ id, content, reviewer, designation }) => (
            <Carousel.Item key={id}>
              <div className="ntop-carousel-slider-wrapper">
                <h5 className="ntop-slider-text">{`“${content}”`}</h5>
                <div>
                  <h4 className="ntop-slider-text">{reviewer}</h4>
                  <h6 className="ntop-slider-text">{designation}</h6>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TrustedSection;
