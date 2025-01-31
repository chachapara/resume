"use client";
import styleHome from"../../styles/Home.scss";
import global from"../../styles/global.scss";
import styleFooter from"../../styles/components/footer.scss";
import { Container,Row,Col,Button,Image,Navbar,Nav,Accordion,Tab} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Link from "next/link";


import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
      <main className="banner-resume-layout-wapper">
        <Container>
          <header>
            <Navbar expand="lg" className="">
              <Navbar.Brand href="#"><img src="/images/Group 1.png" alt=""/></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse className="justify-content-center" id="navbarScroll">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#About-Me">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#certificate">Certificate</Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              </Nav>
              </Navbar.Collapse>
              <Button className="btn-dwn">Download CV</Button>
            </Navbar>
          </header>
        </Container>
          <section id="home" className="banner-name-wapper">
            <Row className="align-items-center">
              {/* <Col lg={12}>
                
              </Col> */}
              <Col lg={12}>
                <div class="profile-img">
                  <div class="about-imag">
                    <h1 class="about-title">I'm Web Designer Sagar S. Chachapara</h1>
                    <p class="about-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at vitae eos, dolores et sunt maxime sequi commodi quod fuga numquam deserunt ratione alias eligendi voluptatibus maiores dicta veniam modi?</p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <Container>
          <section id="About-Me" className="banner-about-wapper p-lg-5 my-lg-5">
            <Row className="g-3">
              <Col lg={12}>
                <div class="start-about text-center">
                  <h1 class="about-title mb-3">About Me</h1>
                  <p class="mb-4 text-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div class="about-border-main">
                    <span class="about-border"></span>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} lg={4} className="mt-lg-5">
                <div class="about-box d-flex flex-column align-items-center">
                  <svg class="mb-3" width="30" height="30" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  <p class="text-white text-center text-font"><strong>Sandhiya pull Madhav bag no1dwarkesh Street no 1 back to shiv temple Jamnagar. </strong></p>
                </div>
              </Col>
              <Col sm={6} md={4} lg={4} className="mt-lg-5">
                <div class="about-box d-flex flex-column align-items-center">
                  <svg class="mb-3" width="30" height="30" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  <p class="text-white text-center text-font h4"><strong>Phone Number</strong></p>
                  <a class="text-white text-font" href="tel:7203864773"><strong>7203864773</strong></a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={4} className="mt-lg-5">
                <div class="about-box d-flex flex-column align-items-center">
                  <svg class="mb-3" width="30" height="30" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                  <p class="text-white text-center h4 text-font"><strong>Email</strong></p>
                  <a class="text-white text-font" href="mailto:sagarchachapara1997@gmail.com"><strong className="mail-g">sagarchachapara1997@gmail.com</strong></a>
                </div>
              </Col>
            </Row>
          </section>
          <section className="banner-Education-wapper">
            <Row>
              <Col lg={12}>
                <div className="start-about text-center py-lg-5">
                  <h1 className="about-title mb-3">Education</h1>
                  <p className="mb-4 text-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div className="about-border-main">
                    <span className="about-border"></span>
                  </div>
                </div>
              </Col>
              <Col lg={{offset:2, span:8}}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>SSC-10th</strong></Accordion.Header>
                    <Accordion.Body>
                      <p className="text-font pb-lg-3">complete year 2014</p>
                      <p className="text-font pb-lg-3">Maharashtra State Board</p>
                      <p className="text-font">At-Shree Halari Visa Oswal English Academy,Bhiwandi</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>HSC-12th</strong></Accordion.Header>
                    <Accordion.Body>
                      <p className="text-font pb-lg-3">complete year 2016</p>
                      <p className="text-font pb-lg-3">Maharashtra State Board</p>
                      <p className="text-font">At-The Scholars English High School,Bhiwandi</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>Computer Engineering (Diploma)</strong></Accordion.Header>
                    <Accordion.Body>
                      <p className="text-font pb-lg-3">complete year 2020</p>
                      <p className="text-font pb-lg-3">Gujarat Technological University</p>
                      <p className="text-font">At-Government Polytechnic College,Bhuj</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header><strong>Computer Hardware Networking Administration</strong></Accordion.Header>
                    <Accordion.Body>
                      <p className="text-font pb-lg-3">complete year 2022</p>
                      <p className="text-font">At-Institute Of Advance Network Technology</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </section>
          <section className="banner-experience-wapper">
            <Row>
            <Col lg={12}>
                <div class="start-about text-center py-lg-5">
                  <h1 class="about-title mb-3">Experience</h1>
                  <p class="mb-4 text-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div class="about-border-main">
                    <span class="about-border"></span>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-column align-items-center" lg={12}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="border1"></div>
                <Nav variant="pills" className="tab-bd">
                  <Nav.Item>
                    <Nav.Link eventKey="first">COMPUTER OPERATOR</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">MIGARTION ENGINEER</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">AUTOMATION</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="border2"></div>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="banner-oprater-wapper">
                      <Row className="align-items-center pb-lg-5">
                        <Col className="text-l" lg={7} md={6} sm={6}>
                          <h1 className="compny-title pt-5">POOJA WESTEN METALINK LTD</h1>
                          <h4 className="compny-title">15 FEB 2021 TO 30 JULY 2022</h4>
                          <p className="compny-title company-para">Maintained 10+ computer with various operating systems (Windows 10, Windows 8, windows 7) update them when need, troubleshooting. Troubleshooting printer problem, maintained server computer Installing printer and setting Data entry ERP software and Excel and Power point, troubleshooting network in computer, troubleshooting router problem</p>
                        </Col>
                        <Col className="pt-5" lg={5} md={6} sm={6}>
                          <div className="company-certi-img">
                            <img src="/images/pooja.jpg"/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <div className="banner-oprater-wapper">
                      <Row className="align-items-center pb-lg-5">
                        <Col className="text-l" lg={7} md={6} sm={6}>
                          <h1 className="compny-title pt-5">HEWLETT PACKARD ENTERPRICE LTD</h1>
                          <h4 className="compny-title">CONSULTANT IN RELIANCE</h4>
                          <p className="compny-title company-para">Staging hard disk and upgrade the windows 7 into windows 10 data backup to new hard disk And replace the new laptop through old laptop and take data backup and software install to Windows 10 and new laptop. Remove old laptop hard disk and RAM into model Lenovo, HP 440, 240.</p>
                        </Col>
                        <Col className="pt-5" lg={5} md={6} sm={6}>
                          <div className="company-certi-img">
                            <img src="/images/migration.jpg"/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                  <div className="banner-oprater-wapper">
                      <Row className="align-items-center pb-lg-5">
                        <Col className="text-l" lg={7} md={6} sm={6}>
                          <h1 className="compny-title pt-5">HEWLETT PACKARD ENTERPRICE LTD</h1>
                          <h4 className="compny-title">CONSULTANT OF RELIANCE WITH INTRUMENT DEPARTMENT</h4>
                          <p className="compny-title company-para">Automation on server that operating the plant machine to server Backup by using symantech backup and recover the backup by using symantech recovery and restore the data of the server and troubleshooting of oprating systems and hardware issues of the server and RAID configration on server storage harddisk to prevent the crash of operating system and also install the server OS in server system troubleshooting of server harddisk and rebuilding the harddisk.</p>
                        </Col>
                        <Col className="pt-5" lg={5} md={6} sm={6}>
                          <div className="company-certi-img">
                            <img src="/images/Automation-1.png"/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
              </Col>
            </Row>
          </section>
          <section className="bannre-Certificate-wapper">
          <Row>
            <Col lg={12}>
                <div class="start-about text-center mt-lg-5 py-lg-5">
                  <h1 class="about-title mb-3">Certificate</h1>
                  <p class="mb-4 text-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div class="about-border-main">
                    <span class="about-border"></span>
                  </div>
                </div>
              </Col>
          </Row>
          <>
            <Swiper
            slidesPerView={3}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                300:{
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
              
            >
              <SwiperSlide>
                <div className="swiper-img">
                  <img src="/images/award-1.png"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-img">
                  <img src="/images/SCSU MAIN-1.png"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-img">
                  <img src="/images/IMG-20201227-WA0000.jpg"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-img">
                  <img src="/images/IMG-20201227-WA0001.jpg"/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-img">
                  <img src="/images/IMG-20201227-WA0002.jpg"/>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          </section>
          <section className="banner-skill-wapper mt-5 pb-5">
          <Row className="justify-content-center">
            <Col lg={12}>
                <div class="start-about text-center mt-lg-5 py-lg-5">
                  <h1 class="about-title mb-3">My Skill</h1>
                  <p class="mb-4 text-font">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <div class="about-border-main">
                    <span class="about-border"></span>
                  </div>
                </div>
              </Col>
              <Col className="text-center" sm={6} md={4} lg={4}>
                <div class="">
                  <svg class="my-3" width="80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                  <h1 class="text-font-skill">HTML</h1>
                </div>
              </Col>
              <Col className="text-center" sm={6} md={4} lg={4}>
                <div>
                  <svg class="my-3" width="80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                  <h1 class="text-font-skill">CSS</h1>
                </div>
              </Col>
              <Col className="text-center" sm={6} md={4} lg={4}>
                <div>
                  <svg class="my-3" width="80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M301.8 378.9c-.3 .6-.6 1.1 0 0zm249.1-87a131.2 131.2 0 0 0 -58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9a122.8 122.8 0 0 0 -5.3 19.1c-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.9 77.3-42.1 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4 .8-.7 1.3-.9 1.7 .3-.5 .5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4 .3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.8-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8 61.8-23.8 109.9-90.1 95.8-145.6C386.5 18.3 293-.2 204.6 31.2c-52.7 18.7-109.7 48.1-150.7 86.4-48.7 45.6-56.5 85.3-53.3 101.9 11.4 58.9 92.6 97.3 125.1 125.7-1.6 .9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4 .7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5a201.2 201.2 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.3 .3 0 0 0 .1 .2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.2-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.7 450.1 270 450.1 270a201.2 201.2 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zm-429.2 144.7c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9 .8-.5 1.2-.7 1.2-.7 .9-.6 1.9-1.1 2.9-1.7 8.3 30.4 .3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5 .1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.9 34.4z"/></svg>
                  <h1 class="text-font-skill">SCSS</h1>
                </div>
              </Col>
              <Col className="text-center"sm={6} md={4} lg={4}>
                <div>
                  <svg class="my-3" width="80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"/></svg>
                  <h1 class="text-font-skill">BOOTSTRAP</h1>
                </div>
              </Col>
              <Col className="text-center" sm={6} md={4} lg={4}>
                <div>
                  <svg class="my-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="80px" height="80px"><path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"/></svg>
                  <h1 class="text-font-skill">NEXT.JS</h1>
                </div>
              </Col>
          </Row>
          </section>
        </Container>
        <footer class="banner-footer-wapper bg-dark pt-5">
          <div class="container">
            <div class="row pb-lg-5">
              <div class="col-lg-4">
                <div class="footer-nav">
                  <img src="/images/Group 1.png" alt=""/>
                </div>
                  <h1 class="text-light">Contact Me</h1>
                  <p class="h2 text-light">So I Can Create Creative Project <Typewriter
                      options={{
                        strings: ['With Design','With UX','With UI'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
              </div>
              <div class="col-lg-4 d-flex flex-column align-items-center">
                <h4 class="text-light mt-3">nav link</h4>
                <ul class="footer-link">
                  <li class="mt-2 mb-3"><a class="text-light" href="#home" >Home</a></li>
                  <li class="mb-3"><a class="text-light" href="#About-Me" >About</a></li>
                  <li class="mb-3"><a class="text-light" href="#education" >education</a></li>
                  <li class="mb-3"><a class="text-light" href="#experience" >Experience</a></li>
                  <li class="mb-3"><a class="text-light" href="#certificate" >Certificate</a></li>
                  <li class="mb-3"><a class="text-light" href="#skill">My Skill</a></li>
                </ul>
              </div>
              <div class="col-lg-4 d-flex flex-column align-items-center">
                <div class="mt-3">
                  <a class="text-light " href="mailto:sagarchachapara1997@gmail.com">sagarchachapara1997@gmail.com</a>
                </div>
                <div class="divider my-4">
                </div>
                <div class="">
                  <a class="text-light " href="tel:7203864773">7203864773</a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-copy-right text-center py-lg-3">
            <span class="text-light ">© 2024 by sagar chachapara.</span>
          </div>
          <div className="cover bg-dark"></div>
        </footer>
        <a href="#" id="scrollUp" class="scroll-up">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" fill="#fff"/></svg>
        </a>
      </main>
  )
}
