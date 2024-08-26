'use client'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/footer.scss';
import Accordion from 'react-bootstrap/Accordion';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import footer_logo from '../../../public/images/footer_logo.png';
import Image from 'next/image';

const Footer = () => {
  const footerData = [
    { title: 'Pages', link1: 'Home', link2: 'Program', link3: 'Accreditations', link4: 'Study with Big Academy', link5: 'Partner with Big Academy' },
    { title: 'Useful Links', link1: 'Intellectual Property Rights', link2: 'Privacy Policy', link3: 'Terms & Condition', link4: 'Disclaimer', link5: 'About Us ' },
    { title: 'Quick Links', link1: 'Careers', link2: 'Our Partners', link3: 'Media', link4: 'Blogs', link5: 'Whitepapers' }
  ]
  const accordionData = [
    { title: 'Partner Contact', iconPhone: <FontAwesomeIcon icon={faPhone} />, phone: '+971 55 101 7305', iconMail: <FontAwesomeIcon icon={faEnvelope} />, mail: 'anymail@example.com' },
    { title: 'Enquiry  Contact', iconPhone: <FontAwesomeIcon icon={faPhone} />, phone: '+971 55 101 7305', iconMail: <FontAwesomeIcon icon={faEnvelope} />, mail: 'anymail@example.com' },
    { title: 'Present Student ', iconPhone: <FontAwesomeIcon icon={faPhone} />, phone: '+971 55 101 7305', iconMail: <FontAwesomeIcon icon={faEnvelope} />, mail: 'anymail@example.com' },
  ]
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent_footer">
              <div className="inner_footer">
                <Row className='row-gap-3'>
                  <Col xxl={7} xl={7} lg={12} md={12} sm={12} xs={12}>
                    <div className="inner_left_parent_footer">
                      <Row className='row-gap-3'>
                        {
                          footerData.map((item, index) => {
                            return <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6} key={index}>
                              <div className="inner_left_inner_parent_footer">
                                <h3>{item.title}</h3>
                                <ul>
                                  <li>
                                    <Link href='/'>{item.link1}</Link>
                                  </li>
                                  <li>
                                    <Link href='/'>{item.link2}</Link>
                                  </li>
                                  <li>
                                    <Link href='/'>{item.link3}</Link>
                                  </li>
                                  <li>
                                    <Link href='/'>{item.link4}</Link>
                                  </li>
                                  <li>
                                    <Link href='/'>{item.link5}</Link>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          })
                        }
                        <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={6}>
                          <div className="inner_left_inner_parent_footer">
                            <h3>Social Media</h3>
                            <ul>
                              <li>
                                <Link href='/'><div className="list"><span className='icon'><FontAwesomeIcon icon={faInstagram} /></span><span>Instagram</span></div></Link>
                              </li>
                              <li>
                                <Link href='/'><div className="list"><span className='icon'><FontAwesomeIcon icon={faLinkedinIn} /></span><span>LinkedIn</span></div></Link>
                              </li>
                              <li>
                                <Link href='/'><div className="list"><span className='icon'><FontAwesomeIcon icon={faFacebookF} /></span><span>Facebook</span></div></Link>
                              </li>
                              <li>
                                <Link href='/'><div className="list"><span className='icon'><FontAwesomeIcon icon={faXTwitter} /></span><span>Twitter</span></div></Link>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xxl={5} xl={5} lg={12} md={12} sm={12} xs={12}>
                    <div className="inner_right_parent_footer">
                      <Row className='row-gap-3'>
                        <Col xxl={5} xl={5} lg={5} md={5} sm={6} xs={12}>
                          <div className="accordian_parent">
                            <h3>Get In Touch</h3>
                            <div className="accordian_inner_parent">
                              <Accordion defaultActiveKey="0">
                                {
                                  accordionData.map((item, index) => {
                                    return <Accordion.Item eventKey={index} key={index}>
                                      <Accordion.Header>{item.title}</Accordion.Header>
                                      <Accordion.Body>
                                        <ul>
                                          <li><Link href='/'><div className="list"><span className='icon'>{item.iconPhone}</span><span>{item.phone}</span></div></Link></li>
                                          <li><Link href='/'><div className="list"><span className='icon'>{item.iconMail}</span><span>{item.mail}</span></div></Link></li>
                                        </ul>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  })
                                }

                              </Accordion>
                            </div>
                          </div>
                        </Col>
                        <Col xxl={7} xl={7} lg={7} md={7} sm={6} xs={12}>
                          <div className="map_parent">
                            <div className="map">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6847.959290632199!2d75.85750194148264!3d30.88723040533628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8352bec9fe53%3A0xa08ccd1cd646bcd8!2sGlobiz%20Technology%20Inc.!5e0!3m2!1sen!2sin!4v1724235567070!5m2!1sen!2sin" allowFullScreen={true} loading='lazy' ></iframe>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="left">
                <div className="footer_logo">
                  <Image src={footer_logo} alt='footer_logo' title='...' priority={false} />
                </div>
              </div>
              <div className="right">
                <ul>
                  <li>Copyright 2023</li>
                  <li>All Right Reserved</li>
                  <li>Powered By<Link href='/'> Globiz Technology Inc</Link></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;