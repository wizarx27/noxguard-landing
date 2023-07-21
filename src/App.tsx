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
import ContactModal from './component/ContactModal/ContactModal';

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [pentestOpen,setPentestOpen] = useState(false)
  const [employeeTraining,setemployeeTraining] = useState(false)
  const [isoOpen,setIsoOpen] = useState(false)
  const [academy,setAcademy] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false)

  const handleToggleModal = ()=>{
    setIsModalOpen(!isModalOpen)
  }


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    document.title = "Nox Guard"

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" style={{width:"100%"}}>
        {/* {windowSize[0]}
        <br />
        {windowSize[1]} */}
        <div className={'m-0 d-flex flex-grow-1 px-3' + (windowSize[0] < 992 ? " justify-content-between" : "")}>
          <Navbar.Brand href="/"><Image src={logoNavbar} height={40}/></Navbar.Brand>
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
      </Navbar>
      <div className='section' style={
          {
            height:
            windowSize[0] <= 400  ? windowSize[1] * 2
            : windowSize[0] < 1320 ? windowSize[1] * 2 -100 
            : windowSize[1]-100,
            width:"100%"
          }
        }
      >
        <Image src={banner1} className='banner-bg'/>
        <div className='header-gap mb-3'></div>
        <Row className='w-100 h-100 m-0 align-items-center'>
          <Col xxl="6" xl="6" lg="12" md="12" sm="12" xs="12" className='p-0'>
            <Image src={logoAboutUs} className={`img-about-us my-5 ${windowSize[0] <= 400 ? "img-about-us-sm" : ""}`}/>
          </Col>
          <Col xxl="6" xl="6" lg="12" md="12" sm="12" xs="12" className='p-0 h-100'>
            <div className={`d-flex flex-column ${windowSize[0] <= 400 ? "" : "banner-text"}`}>
              <h2 className={`banner-title ${windowSize[0] < 1320 ? "banner-title-sm" : ""}`}>
                RAISING THE BAR 
                <br />
                FOR CYBER SECURITY,
                <br />
                <span className='green-text'> ONE AUDIT AT A TIME.</span>
              </h2>
              {/* <p></p> */}
              <div className={`pt-5 ${windowSize[0] < 1320 ? "mx-auto" : ""}`} onClick={()=>{handleToggleModal()}}>
                <Image src={startNowButton} className='start-now-btn'/>
              </div>
            </div>
          </Col>
        </Row>
        <div className='header-gap-bot mb-3'></div>
        <ContactModal isOpenModal={isModalOpen} setIsOpenModal={handleToggleModal} />
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
                <h2 className='text-align-center our-values-title'>OUR VALUES</h2>
                <div className='d-flex section-3-content-content justify-content-center flex-wrap'>
                  <div className='d-flex flex-column align-items-center mb-5'>
                    <Image src={IcnPrice} width={305} height={305}/>
                    <h3>AFFORDABLE PRICING</h3>
                    <p>
                      We offer a cheaper price than our competitors for our services.
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={IcnFast} width={305} height={305}/>
                    <h3>FAST AND ACCURATE</h3>
                    <p>
                      Our service is characterized by a speedy and precise performance. 
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center'>
                    <Image src={IcnQuality} width={305} height={305}/>
                    <h3>QUALITY</h3>
                    <p>
                      Our clients guarantee and praise the quality of our service.
                    </p>
                  </div>
                </div>
                <div className='separator tiny'></div>
                <div className='text-align-center about-us-below'>
                  PENETRATION TESTING AND AUDIT HELPS TO IDENTIFYING <br />
                  SECURITY VULNERABILITIES BEFORE MALICIOUS ATTACKS CAN OCCUR
                </div>
                <div className='separator tiny'></div>
              </div>
          </Col>
        </Row>
      </div>
      <div className='section section-4' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100'>
              <Image src={logoAboutUs} className={`img-about-us my-5 ${windowSize[0] <= 400 ? "img-about-us-sm" : ""}`}/>
          </Col>
          <Col xxl="12" xl="12" className='h-100'>
              <div className={`${windowSize[0] < 992 ? "section-4-content-sm" : "section-4-content"}`}>
                <h2 className='about-us-title text-align-center'>ABOUT US</h2>
                <p className='about-us-content'>
                  Nox Guard is a highly skilled and motivated team focused on cybersecurity audit services such as ISO 27001 compliance and penetration testing, as well as education. We aim to identify vulnerabilities and address them before they can be exploited, and we're committed to sharing knowledge through training and consultation to promote a secure environment that inspires confidence in your business operations. With an ever-evolving nature of cyber threats, we stay up-to-date with the latest techniques and technologies to deliver innovative and effective solutions to our clients. Trust us to be your cybersecurity partner and help you secure your digital assets, educate your team, and ensure your peace of mind. Contact us today to learn more.
                </p>
              </div>
          </Col>
        </Row>
        
      </div>
      <div className='separator tiny'></div>
      <div className='section section-5' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 my-5 mx-0'>
          <h2 className='text-align-center our-service-title'>OUR SERVICES</h2>
          </Col>
        </Row>
        <Row className={`w-100 h-100 m-0 ${windowSize[0] < 1200 ? "mt-5" : "my-5"} `}>
          <Col xxl="6" xl="6" className='h-100 mb-5'>
              <div onMouseEnter={()=>{setPentestOpen(true)}} onMouseLeave={()=>{setPentestOpen(false)}} className='d-flex align-items-center justify-content-center'>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Penetration Testing</span>
              </div>
              <p className={`margin-offset text-align-center service-description ${pentestOpen ? "active" : ""} `}>
                Penetration testing is a thorough examination of your web and mobile applications,databases, infrastructure, and networks to assess their security posture
              </p>              
          </Col>
          <Col xxl="6" xl="6" className='h-100 mb-5'>
              <div onMouseEnter={()=>{setemployeeTraining(true)}} onMouseLeave={()=>{setemployeeTraining(false)}} className='d-flex align-items-center justify-content-center'>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Employee Training</span>
              </div>
              <p className={`margin-offset text-align-center service-description ${employeeTraining ? "active" : ""} `}> 
                Our training program is designed to increase your employees security awareness through social engineering, briefings, and phishing simulations. This is crucial because humans are often the weakest link in cybersecurity.
              </p>  
          </Col>
        </Row>
        <Row className={`w-100 h-100 m-0 ${windowSize[0] < 1200 ? "mb-5" : "my-5"} `}>
          <Col xxl="6" xl="6" className='h-100 mb-5'>
              <div onMouseEnter={()=>{setIsoOpen(true)}} onMouseLeave={()=>{setIsoOpen(false)}} className='d-flex align-items-center justify-content-center'>
                <Image src={decor3} width={20} height={20}/>
                <span className={'ms-2 our-service-content-title' + (windowSize[0] < 1200 ? " our-service-content-title-sm" : "")}>ISO 27001 and NIST Assessment</span>
              </div>
              <p className={`margin-offset text-align-center service-description ${isoOpen ? "active" : ""} `}>
                ISO 27001 and NIST assessment ensures that your organization compiles with the iso 27001 and NIST standards
              </p>              
          </Col>
          <Col xxl="6" xl="6" className='h-100 mb-5'>
              <div onMouseEnter={()=>{setAcademy(true)}} onMouseLeave={()=>{setAcademy(false)}} className='d-flex align-items-center justify-content-center'>
                <Image src={decor3} width={20} height={20}/>
                <span className='ms-2 our-service-content-title'>Academy</span>
              </div>
              <p className={`margin-offset text-align-center service-description ${academy ? "active" : ""} `}>
                Our Academy offers a comprehensize range of technical classes, from beginner to advanced levels, designed to enhance your knowledge and expertise in cybersecurity
              </p>  
          </Col>
        </Row>
      </div>
      <div className='separator tiny'></div>
      {/* <div className='section section-6' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 my-5 mx-0'>
              <h2 className='text-align-center the-team-title'>THE TEAM</h2>
          </Col>
        </Row>
        <Row className='w-100 h-100 m-0 my-5'>
          <Col xxl="12" xl="12" className='h-100 d-flex justify-content-center team-row flex-wrap'>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam1} width={250}/>
                <h3 className='text-align-center team-name' onClick={()=>{window.open("https://www.linkedin.com/in/ardiandanny/","_blank")}}>Ardian Danny</h3>
                <p className='text-align-center mb-1'>CEO & Penetration Tester</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam2} width={250}/>
                <h3 className='text-align-center team-name' onClick={()=>{window.open("https://www.linkedin.com/in/felix-alexander-603b9b184/","_blank")}}>Felix Alexander</h3>
                <p className='text-align-center m-0'>Lead Penetration Tester & Researcher</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam3} width={250}/>
                <h3 className='text-align-center team-name' onClick={()=>{window.open("https://www.linkedin.com/in/maskirovka/","_blank")}}>Delbert Giovanni Lie</h3>
                <p className='text-align-center m-0'>Penetration Tester</p>
              </div>

          </Col>
        </Row>
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 d-flex justify-content-center team-row flex-wrap'>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam4} width={250}/>
                <h3 className='text-align-center team-name' onClick={()=>{window.open("https://www.linkedin.com/in/stanley-halim/","_blank")}}>Stanley Halim</h3>
                <p className='text-align-center m-0'>Penetration Tester</p>
              </div>
              <div className='d-flex flex-column align-items-center img-team'>
                <Image src={imageTeam5} width={250}/>
                <h3 className='text-align-center team-name' onClick={()=>{window.open("https://www.linkedin.com/in/crisdeonuelsiahaan/","_blank")}}>Crisdeo Nuel Siahaan</h3>
                <p className='text-align-center m-0'>Penetration Tester</p>
              </div>
          </Col>
        </Row>
      </div> */}

      <div className='section footer' >
        <Row className='w-100 h-100 m-0'>
          <div className='d-flex justify-content-between px-5'>
            <Image src={logoFooter} width={150} height={150}/>
            <div className='footer-media d-flex align-self-center'>
              <Image src={LinkedinIcon} width={30} height={30} className='social-media-img' onClick={()=>{window.open("https://www.linkedin.com/company/nox-guard-security/","_blank")}}/>
              <Image src={gmailIcon} width={30} height={30} className='social-media-img' onClick={()=>{window.open("mailto:noxguardprotection@gmail.com","_blank")}}/>
              <Image src={waIcon} width={30} height={30} className='social-media-img'/>
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
