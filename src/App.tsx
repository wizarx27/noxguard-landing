import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';



import logoNavbar from "./logos/logos-08.png"
import logoAboutUs from "./logos/logos-05.png"
import logoFooter from "./logos/logos-07.png"
import banner1 from "./assets/Banner-1.png"
import signInButton from "./assets/sign-in-btn.png"
import startNowButton from "./assets/start-now.png"
import IcnFast from "./assets/Icon-Fast.png"
import IcnPrice from "./assets/Icon-price.png"
import IcnQuality from "./assets/Icon-quality.png"
import decor3 from "./assets/decor-3.png"
import imageTeam1 from "./assets/Anggota-1.png"
import imageTeam2 from "./assets/Anggota-2.png"
import imageTeam3 from "./assets/Anggota-3.png"
import imageTeam4 from "./assets/Anggota-4.png"
import imageTeam5 from "./assets/Anggota-5.png"
import waIcon from "./assets/WA-icon.png"
import gmailIcon from "./assets/GMAIL-icon.png"
import LinkedinIcon from "./assets/LinkedIn-icon.png"

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" style={{width:windowSize[0]-15}}>
        {/* {windowSize[0]}
        <br />
        {windowSize[1]} */}
        <Container>
          <Navbar.Brand href="#home"><Image src={logoNavbar} width={50} height={50}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-container">
              <Nav.Link href="#COMPANY">COMPANY</Nav.Link>
              <Nav.Link href="#ACADEMY">ACADEMY</Nav.Link>
              <Nav.Link href="#SERVICE">SERVICE</Nav.Link>
              <Nav.Link href="#PARTNERS">PARTNERS</Nav.Link>
              <Nav.Link href="#PORTOFOLIO">PORTOFOLIO</Nav.Link>
              <Nav.Link href="#CAREER">CAREER</Nav.Link>
              <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
            </Nav>
            <Nav className={windowSize[0] < 992 ? 'sign-in-btn-small' : 'sign-in-btn'}>
              <Image src={signInButton} height={30} width={80}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='section' style={{height:windowSize[1]-100,width:windowSize[0]-15}}>
        <Image src={banner1} className='banner-bg'/>
        <Row className='w-100 h-100 m-0'>
          <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className='p-0'>
          </Col>
          <Col xxl="6" xl="6" lg="6" md="6" sm="6" xs="6" className='p-0 h-100'>
            <div className='d-flex flex-column banner-text'>
              <h2 className='banner-title'>
                RAISING THE BAR FOR CYBER SECURITY,
                <br />
                <span className='green-text'> ONE AUDIT AT A TIME.</span>
              </h2>
              {/* <p></p> */}
              <div>
                <Image src={startNowButton}/>
                <Button className='ms-2 started-btn'>Getting Started</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='separator'></div>
      <div className='section section-2' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className=''>
              <div className='section-2-content'>
                <h2 className='text-align-center'>WHY NOX GUARD?</h2>
                <p className='text-align-center'>
                  At Nox Guard, we specialize in security audit (ISO 27001) and penetration testing, and our highly skilled team is passionate about educating clients on the best cybersecurity practices. Trust us to secure your digital assets with expertise and dedication.
                </p>
              </div>
          </Col>
        </Row>
      </div>
      <div className='separator tiny'></div>
      <div className='section section-3' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='p-0'>
              <div className='section-3-content'>
                <h2 className='text-align-center my-3'>OUR VALUES</h2>
                <div className='d-flex section-3-content-content justify-content-center flex-wrap'>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={IcnFast} width={305} height={305}/>
                    <h3>AFFORDABLE PRICING</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={IcnPrice} width={305} height={305}/>
                    <h3>FAST AND ACCURATE</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={IcnQuality} width={305} height={305} style={{padding:"45px"}}/>
                    <h3>QUALITY</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                  </div>
                </div>
                <div className='text-align-center my-5 about-us-below'>
                  PENETRATION TESTING AND AUDIT HELPS TO IDENTIFYING <br />
                  SECURITY VULNERABILITIES BEFORE MALICIOUS ATTACKS CAN OCCUR
                </div>
              </div>
          </Col>
        </Row>
      </div>
      <div className='section section-4 pb-5' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100'>
              <Image src={logoAboutUs} className='img-about-us'/>
          </Col>
        </Row>

        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100'>
              <div className='ms-5 section-4-content'>
                <h2>About us</h2>
                <p>
                  Nox Guard is a highly skilled and motivated team focused on cybersecurity audit services such as ISO 27001 compliance and penetration testing, as well as education. We aim to identify vulnerabilities and address them before they can be exploited, and we're committed to sharing knowledge through training and consultation to promote a secure environment that inspires confidence in your business operations. With an ever-evolving nature of cyber threats, we stay up-to-date with the latest techniques and technologies to deliver innovative and effective solutions to our clients. Trust us to be your cybersecurity partner and help you secure your digital assets, educate your team, and ensure your peace of mind. Contact us today to learn more.
                </p>
              </div>
          </Col>
        </Row>
        
      </div>
      <div className='section section-5' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 my-5 mx-0'>
          <h2 className='text-align-center'>OUR SERVICES</h2>
          </Col>
        </Row>
        <Row className='w-100 h-100 m-0 my-5'>
          <Col xxl="6" xl="6" className='h-100'>
              <div>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Penetration Testing</span>
              </div>
              <p className='margin-offset'>
                Penetration testing is a thorough examination of your web and mobile applications,databases, infrastructure, and networks to assess their security posture
              </p>              
          </Col>
          <Col xxl="6" xl="6" className='h-100'>
              <div>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Employee Training</span>
              </div>
              <p className='margin-offset'> 
                Our training program is designed to increase your employees security awareness through social engineering, briefings, and phishing simulations. This is crucial because humans are often the weakest link in cybersecurity.
              </p>  
          </Col>
        </Row>
        <Row className='w-100 h-100 m-0 my-5'>
          <Col xxl="6" xl="6" className='h-100'>
              <div>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>ISO 27001</span>
              </div>
              <p className='margin-offset'>
                ISO 27001 and NIST assessment ensures that your organization compiles with the iso 27001 and NIST standards
              </p>              
          </Col>
          <Col xxl="6" xl="6" className='h-100'>
              <div>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Penetration Testing</span>
              </div>
              <p className='margin-offset'>
                Our Academy offers a comprehensize range of technical classes, from beginner to advanced levels, designed to enhance your knowledge and expertise in cybersecurity
              </p>  
          </Col>
        </Row>
      </div>

      <div className='section section-6' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 my-5 mx-0'>
              <h2 className='text-align-center'>THE TEAM</h2>
          </Col>
        </Row>
        <Row className='w-100 h-100 m-0 my-5'>
          <Col xxl="12" xl="12" className='h-100 d-flex justify-content-center team-row'>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam1} height={150} width={150}/>
                <h3 className='text-align-center team-name'>Ardian Danny</h3>
                <p className='text-align-center'>CEO & Penetration Tester</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam2} height={150} width={150}/>
                <h3 className='text-align-center team-name'>Felix Alexander</h3>
                <p className='text-align-center'>Lead Penetration Tester & Researcher</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam3} height={150} width={150}/>
                <h3 className='text-align-center team-name'>Delbert Gioavanni Lie</h3>
                <p className='text-align-center'>Penetration Tester</p>
              </div>

          </Col>
        </Row>
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 d-flex justify-content-center team-row'>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam4} height={150} width={150}/>
                <h3 className='text-align-center team-name'>Stanley Halim</h3>
                <p className='text-align-center'>Penetration Tester</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam5} height={150} width={150}/>
                <h3 className='text-align-center team-name'>Crisdeo Nuel Silahan</h3>
                <p className='text-align-center'>Penetration Tester</p>
              </div>
          </Col>
        </Row>
      </div>

      <div className='section footer' >
        <Row className='w-100 h-100 m-0'>
          <div className='d-flex justify-content-between px-5'>
            <Image src={logoFooter} width={100} height={100}/>
            <div className='footer-media d-flex align-self-center'>
              <Image src={LinkedinIcon} width={30} height={30}/>
              <Image src={gmailIcon} width={30} height={30}/>
              <Image src={waIcon} width={30} height={30}/>
            </div>
          </div>
          <div className='footer-gap mb-3'></div>
          <div className='copyright-footer text-align-center mb-3'>
              Copyright &#169; 2023 Nox Guard. All Rights Reserved
          </div>
        </Row>
        
      </div>

    </div>
  );
}

export default App;
