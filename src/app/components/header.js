'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../public/sass/pages/header.scss';
import logo from '../../../public/images/logo.png';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import Banner from './banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <section className="header">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_header">
                                <div className="left">
                                    <div className="logo">
                                        <Image src={logo} alt='logo' title='...' priority={true} />
                                    </div>
                                </div>
                                <div className="right ">
                                    <div className="menu_switch d-md-none d-flex" onClick={()=> setToggle(true)}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                    <ul className='d-none d-md-flex'>
                                        <li><Link href='/'>Home</Link></li>
                                        <li><Link href='/'><Dropdown>
                                            <Dropdown.Toggle >
                                                Programmes
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></Link></li>
                                        <li><Link href='/'><Dropdown>
                                            <Dropdown.Toggle >
                                                Universities
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown></Link></li>
                                        <li><Link href='/'>Find Study Center</Link></li>
                                        <li><Link href='/form_page'>Partner with us</Link></li>
                                        <li><Link href='/'>About Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {
                    toggle &&
                    <div className="mobile_nav d-block d-md-none" >
                        <div className="mobile_nav_top">
                            <div className="logo">
                                <Image src={logo} alt='logo' title='...' priority={true} />
                            </div>
                            <div className="close" onClick={() => setToggle(false)}><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/'><Dropdown>
                                <Dropdown.Toggle >
                                    Programmes
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></Link></li>
                            <li><Link href='/'><Dropdown>
                                <Dropdown.Toggle >
                                    Universities
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></Link></li>
                            <li><Link href='/'>Find Study Center</Link></li>
                            <li><Link href='/form_page'>Partner with us</Link></li>
                            <li><Link href='/'>About Us</Link></li>
                        </ul>
                    </div>
                }
            </section>
        </>
    )
}

export default Header