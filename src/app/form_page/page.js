'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import image1 from '../../../public/images/flag2.png';
import image2 from '../../../public/images/flag1.png';
import image3 from '../../../public/images/flag3.png';
import image4 from '../../../public/images/flag4.png';
import image5 from '../../../public/images/flag5.png';
import image6 from '../../../public/images/flag6.png';
import image7 from '../../../public/images/flag7.png';
import '../../../public/sass/pages/form_page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter()
    
    const top_list_data = [
        { src: image1, name: 'UAE' },
        { src: image2, name: 'Australia' },
        { src: image3, name: 'India' },
        { src: image4, name: 'France' },
        { src: image5, name: 'UK' },
        { src: image6, name: 'USA' },
        { src: image7, name: 'Canada' }
    ]

    const bottom_list_data = [
        { icon: <FontAwesomeIcon icon={faEnvelope} />, title: 'E-mail address', desc: 'example@gmail.com' },
        { icon: <FontAwesomeIcon icon={faPhone} />, title: 'Contact Number ', desc: '+971 55 298 5569' },
        { icon: <FontAwesomeIcon icon={faMapMarkerAlt} />, title: 'Location', desc: 'Box No. 236847, Salahuddin Rd Deira Dubai,Emirates' }
    ]

    const main_form_data = [
        {
            title: 'Contact for Partner',
            inner_list: [
                {
                    icon: <FontAwesomeIcon icon={faPhone} />,
                    desc: '+971 55 298 5569'
                },
                {
                    icon: <FontAwesomeIcon icon={faEnvelope} />,
                    desc: '+971 55 298 5569'
                }
            ]
        },
        {
            title: 'Contact for Enquiries',
            inner_list: [
                {
                    icon: <FontAwesomeIcon icon={faPhone} />,
                    desc: '+971 55 298 5569'
                },
                {
                    icon: <FontAwesomeIcon icon={faEnvelope} />,
                    desc: '+971 55 298 5569'
                }
            ]
        },
        {
            title: 'Helpline: Current Students',
            inner_list: [
                {
                    icon: <FontAwesomeIcon icon={faPhone} />,
                    desc: '+971 55 298 5569'
                },
                {
                    icon: <FontAwesomeIcon icon={faEnvelope} />,
                    desc: '+971 55 298 5569'
                }
            ]
        },
    ]

    const social_media = [
        { icon: <FontAwesomeIcon icon={faInstagram} /> },
        { icon: <FontAwesomeIcon icon={faTwitter} /> },
        { icon: <FontAwesomeIcon icon={faFacebookF} /> },
        { icon: <FontAwesomeIcon icon={faLinkedinIn} /> }
    ]

    const [user_data, setUser_Data] = useState({
        Name: '',
        Email: '',
        Contact: '',
        Subject: '',
        Message: ''
    });

    const [active, setActive] = useState(0);

    function handleActive(index) {
        setActive(index)
    }

    async function handleSubmit(e) {
        console.log(user_data)
        e.preventDefault();
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                user_data
            })
            console.log(res)
            console.log(res.status)
            const result = res.data
            console.log(result)
            if (res.status == 201) {
                setUser_Data({
                    Name: '',
                    Email: '',
                    Contact: '',
                    Subject: '',
                    Message: ''
                })

                router.push(`/home?${JSON.stringify(result)}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="main_form">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="parent_form">
                            <div className="form_top">
                                <div className="inner_form_top" >
                                    <h3> Head Office Details</h3>
                                    <div className="list">
                                        <ul>
                                            {
                                                top_list_data.map((item, index) => (
                                                    <li className={active === index ? 'active' : 'unactive'} key={index} onClick={() => handleActive(index)}>
                                                        <div className="image">
                                                            <Image src={item.src} alt='image1' title='...' priority={false} />
                                                        </div>
                                                        <p>{item.name}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="inner_form_bottom">
                                    <ul className='bottom_list'>
                                        {
                                            bottom_list_data.map((item, index) => (
                                                <li key={index}>
                                                    <div className="left">
                                                        <div className="icon">{item.icon}</div>
                                                    </div>
                                                    <div className="right">
                                                        <p className="email_title">{item.title}</p>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="form_bottom">
                                <div className="form_bottom_inner">
                                    <div className="form_left">
                                        <ul className="form_left_list" >
                                            {
                                                main_form_data.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="list_item">
                                                            <h3>{item.title}</h3>
                                                            <ul className="inner_list">
                                                                {
                                                                    item.inner_list.map((ele, i) => (
                                                                        <li key={i}>
                                                                            <div className="list_item_left">
                                                                                <div className="icon">{ele.icon}</div>
                                                                            </div>
                                                                            <div className="list_item_right">
                                                                                <p>{ele.desc}</p>
                                                                            </div>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="form_left_bottom">
                                            <p>Follow Us</p>
                                            <ul className="social_media">
                                                {
                                                    social_media.map((item, index) => (
                                                        <li key={index}>
                                                            <Link href='/' className="icon">{item.icon}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="form_right">
                                        <div className="main_inner_form_right">
                                            <div className="form_title">
                                                <h3>Get in Touch with us</h3>
                                                <p>Submit your queries to us for more Information</p>
                                            </div>
                                            <Form className='form' onSubmit={handleSubmit} action='/home'>
                                                <div className="form_field">
                                                    {
                                                        Object.entries(user_data).map(([key, value], index) => {
                                                            return <Form.Group className='form-group' key={index}>
                                                                <Form.Label>{key} <span>*</span></Form.Label>
                                                                <Form.Control
                                                                    type={key === 'Email' ? 'email' : 'text'}
                                                                    placeholder={`Enter ${key}`}
                                                                    name={key}
                                                                    value={value}
                                                                    onChange={(e) => setUser_Data({ ...user_data, [key]: e.target.value })}
                                                                    as={key === 'Message' ? 'textarea' : 'input'}
                                                                    className='textarea'
                                                                />
                                                            </Form.Group>
                                                        })
                                                    }
                                                </div>
                                                <Button className='btn-primary' type='submit'>Send Message</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Page;  // Updated to export "Page" instead of "page"
