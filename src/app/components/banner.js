import React from 'react';
import '../../../public/sass/pages/banner.scss';
import Image from 'next/image';
import globe from '../../../public/images/globe.png';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
    <section className="banner">
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="parent_banner">
                        <div className="main_title">
                            <h3>Browse All Courses
                            </h3>
                            <div className="globe_image">
                                <Image src={globe} alt='globe' title='...' priority={false} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Banner