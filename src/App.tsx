import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';



import logoNavbar from "./logos/logos-08.png"
import logoAboutUs from "./assets/Logo_Banner_1.png"
import logoFooter from "./logos/logos-07.png"
import banner1 from "./assets/bg_1.jpg"
import signInButton from "./assets/sign-in-btn.png"
import startNowButton from "./assets/start-now.png"
import IcnFast from "./assets/Value_2.png"
import IcnPrice from "./assets/Value_1.png"
import IcnQuality from "./assets/Value_3.png"
import decor3 from "./assets/decor-3.png"
import servicePen from "./assets/Service_1.png"
import serviceEmploye from "./assets/Service_3.png"
import serviceIso from "./assets/Service_2.png"
import serviceAcademy from "./assets/Service_4.png"
import imageTeam1 from "./assets/Anggota-1.png"
import imageTeam2 from "./assets/Anggota-2.png"
import imageTeam3 from "./assets/Anggota-3.png"
import imageTeam4 from "./assets/Anggota-4.png"
import imageTeam5 from "./assets/Anggota-5.png"
import waIcon from "./assets/WA-icon.png"
import gmailIcon from "./assets/GMAIL-icon.png"
import LinkedinIcon from "./assets/LinkedIn-icon.png"
import ContactModal from './component/ContactModal/ContactModal';
import frameService from './assets/frame_service.png'
import frameValue from './assets/frame_value.png'
import mottoBg from './assets/Motto.png'
import SigninModal from './component/SignInModal/SignInModal';

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
  const [isModalSignInOpen,setIsModalSignInOpen] = useState(false)

  
  const handleToggleModal = ()=>{
    
    setIsModalOpen(!isModalOpen)
  }

  const handleToggleModalSignIn = ()=>{
    
    setIsModalSignInOpen(!isModalSignInOpen)
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

  useEffect(() => {
    if (isModalOpen){
      document.firstElementChild?.classList.add("bruh")
    }else{
      document.firstElementChild?.classList.remove("bruh")
    }
  },[isModalOpen]);

  return (
    <div className="App">
      <Navbar expand="lg" style={{width:"100%"}} className='custom-navbar-class'>
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
            <Nav className={windowSize[0] < 992 ? 'sign-in-btn-small' : 'sign-in-btn'} onClick={()=>{handleToggleModalSignIn()}}>
              SIGN IN
              {/* <Image src={signInButton} height={30} width={80}/> */}
              {/* <div ></div> */}
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
              <div className={`${windowSize[0] < 1320 ? "mx-auto pt-5 " : ""}`} onClick={()=>{handleToggleModal()}}>
                <div className={`start-now-btn ${windowSize[0] < 1320 ? "start-now-btn-sm" : ""}`}>START NOW</div>
                {/* <Image src={startNowButton} className='start-now-btn'/> */}
              </div>
            </div>
          </Col>
        </Row>
        <ContactModal isOpenModal={isModalOpen} setIsOpenModal={handleToggleModal} />
        <SigninModal isOpenModal={isModalSignInOpen} setIsOpenModal={handleToggleModalSignIn} />
      </div>
      {/* <div className='separator'></div> */}
      <div className='section section-2' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='p-0'>
              <div className='section-2-content'>
                <h2 className='text-align-center why-text-head'>WHY NOXGUARD?</h2>
                <p className={`text-align-center ${windowSize[0] < 1320 ? "more-pad" : ""}`}>
                  At Nox Guard, we specialize in security audit (ISO 27001) and penetration testing, and our highly skilled team is passionate about educating clients on the best cybersecurity practices. Trust us to secure your digital assets with expertise and dedication.
                </p>
              </div>
          </Col>
        </Row>
      </div>
      {/* <div className='separator tiny'></div> */}
      <div className='section section-3' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='p-0'>
              <div className='section-3-content'>
                <h2 className='text-align-center our-values-title'>OUR VALUES</h2>
                <div className='d-flex section-3-content-content justify-content-center flex-wrap'>
                  <div className='d-flex flex-column align-items-center section-3-content-border'>
                    <Image src={IcnPrice} width={305} height={305}/>
                    <h3 className='values-exp-title'>AFFORDABLE PRICING</h3>
                    <p className='values-exp'>
                      We offer a cheaper price than our competitors for our services.
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center section-3-content-border'>
                    <Image src={IcnFast} width={305} height={305}/>
                    <h3 className='values-exp-title'>FAST AND ACCURATE</h3>
                    <p className='values-exp'>
                      Our service is characterized by a speedy and precise performance. 
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-center section-3-content-border'>
                    <Image src={IcnQuality} width={305} height={305}/>
                    <h3 className='values-exp-title'>QUALITY</h3>
                    <p className='values-exp'>
                      Our clients guarantee and praise the quality of our service.
                    </p>
                  </div>
                </div>
                {/* <div className='separator tiny'></div> */}
                <div className='text-align-center about-us-below'>
                  <div className='about-us-below-wrapper'>
                    PENETRATION TESTING AND AUDIT HELPS TO IDENTIFYING <br />
                    SECURITY VULNERABILITIES BEFORE MALICIOUS ATTACKS CAN OCCUR
                  </div>
                </div>
                {/* <div className='separator tiny'></div> */}
              </div>
          </Col>
        </Row>
      </div>
      <div className='section section-4' >
        <Row className='w-100 h-100 m-0 align-items-center py-5'>
          <Col xxl="3" xl="4" className='h-25 ps-5'>
              <h2 className='about-us-title'>ABOUT NOXGUARD</h2>
          </Col>
          <Col xxl="9" xl="8" className='h-75'>
              <div className={`${windowSize[0] < 992 ? "section-4-content-sm" : "section-4-content"}`}>
                
                <p className='about-us-content'>
                  Nox Guard is a highly skilled and motivated team focused on cybersecurity audit services such as ISO 27001 compliance and penetration testing, as well as education. We aim to identify vulnerabilities and address them before they can be exploited, and we're committed to sharing knowledge through training and consultation to promote a secure environment that inspires confidence in your business operations. With an ever-evolving nature of cyber threats, we stay up-to-date with the latest techniques and technologies to deliver innovative and effective solutions to our clients. Trust us to be your cybersecurity partner and help you secure your digital assets, educate your team, and ensure your peace of mind. Contact us today to learn more.
                </p>
              </div>
          </Col>
        </Row>
        
      </div>
      {/* <div className='separator tiny'></div> */}
      <div className='section section-5' >
        <Row className='w-100 h-100 m-0'>
          <Col xxl="12" xl="12" className='h-100 my-5 mx-0'>
          <h2 className='text-align-center our-service-title'>OUR SERVICES</h2>
          </Col>
        </Row>
        <Row className={`w-100 h-100 m-0 ${windowSize[0] < 1200 ? "mt-5" : "my-5"} `}>
          <Col xxl="5" xl="5" className='h-100 d-flex section-4-content-border'>
              <Image src={servicePen} width={200} height={200}/>
              <div className='d-flex flex-column ms-5'>
                <span className='our-service-content-title'>Penetration Testing</span>
                <p className={`service-description active `}>
                  Penetration testing is a thorough examination of your web and mobile applications,databases, infrastructure, and networks to assess their security posture
                </p>              
              </div>
          </Col>
          <Col xxl="5" xl="5" className='h-100 d-flex section-4-content-border'>
              <Image src={serviceEmploye} width={200} height={200}/>
              <div className='d-flex flex-column ms-5'>
                <span className='our-service-content-title'>Employee Training</span>
                <p className={`service-description active `}> 
                  Our training program is designed to increase your employees security awareness through social engineering, briefings, and phishing simulations. This is crucial because humans are often the weakest link in cybersecurity.
                </p>  
              </div>
          </Col>
        </Row>
        <Row className={`w-100 h-100 m-0 ${windowSize[0] < 1200 ? "mb-5" : "my-5"} `}>
          <Col xxl="5" xl="5" className='h-100 mb-5 d-flex section-4-content-border'>
              <Image src={serviceIso} width={200} height={200}/>
              <div className='d-flex flex-column ms-5'>
                <span className={'our-service-content-title'}>ISO 27001 and NIST Assessment</span>
                <p className={`service-description active `}>
                  ISO 27001 and NIST assessment ensures that your organization compiles with the iso 27001 and NIST standards
                </p>              
              </div>
          </Col>
          <Col xxl="5" xl="5" className='h-100 mb-5 d-flex section-4-content-border'>
              <Image src={serviceAcademy} width={200} height={200}/>
              <div className='d-flex flex-column ms-5'>
                <span className='our-service-content-title'>Academy</span>
                <p className={`service-description active `}>
                  Our Academy offers a comprehensize range of technical classes, from beginner to advanced levels, designed to enhance your knowledge and expertise in cybersecurity
                </p>  
              </div>
          </Col>
        </Row>
      </div>
      {/* <div className='separator tiny'></div> */}
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
          <div className='d-flex justify-content-between px-5 py-3'>
            <Image src={logoNavbar} width={120} height={55} className='py-2' />
            <div className='footer-media d-flex align-self-center'>
              <Image src={LinkedinIcon} width={25} height={25} className='social-media-img' onClick={()=>{window.open("https://www.linkedin.com/company/nox-guard-security/","_blank")}}/>
              <Image src={waIcon} width={30} height={30} className='social-media-img'/>
              <Image src={gmailIcon} width={30} height={30} className='social-media-img' onClick={()=>{window.open("mailto:noxguardprotection@gmail.com","_blank")}}/>
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
