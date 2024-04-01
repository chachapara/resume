import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import "@/styles/components/footer.scss";
import { SOCIAL_MEDIA_LINKS } from "@/constants";

const FooterComponent = () => (
  <footer className="ntop-footerbar-wrapper">
    <Container>
      <div className="ntop-main-footer-wrapper">
        <Link href="#" className="ntop-footer-logo">
          <img src="/images/ntop-logo.svg" alt="ntop" />
        </Link>
        <ul className="ntop-social-media-icon-wrapper">
          {SOCIAL_MEDIA_LINKS.map(({ id, href, imageSrc, key }) => (
            <li key={id}>
              <Link href={href}>
                <img src={imageSrc} alt={key} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ntop-subfooter-wrapper">
        <p>
          © <Link href="#">2023</Link> nTop, Inc. All Rights Reserved.
        </p>
        <ul className="ntop-privacy-link-text">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">EULA</Link>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default FooterComponent;
