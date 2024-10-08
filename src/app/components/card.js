import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/images/imag1.png';
import flag1 from '../../../public/images/flag1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHistory } from '@fortawesome/free-solid-svg-icons';
import '../../../public/sass/pages/card.scss';
import Link from 'next/link';

const Card = (props) => {

   

    return (
        <>
            <div className="card_parent">
                <div className="left">
                    <div className="card_image">
                        <Image src={image1} alt='image1' title='...' priority={false} />
                    </div>
                </div>
                <div className="right">
                    <div className="inner_left">
                        <div className="title">
                            <div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
                            <h3>{props.title}</h3>
                        </div>
                        <p className="course_name">
                            {props.desc}
                        </p>
                        <div className="date_time">
                            <div className="inner_inner_left">
                                <div className="time_icon"><FontAwesomeIcon icon={faHistory} /></div>
                                <div className="time">{props.duration}</div>
                            </div>
                            <div className="inner_inner_right inner_inner_left">
                                <div className="time_icon"><FontAwesomeIcon icon={faHistory} /></div>
                                <div className="time">24 Months</div>
                            </div>
                        </div>
                    </div>
                    <div className="inner_right">
                        <div className="inner_right_inner">
                            <div className="flag">
                                <Image src={flag1} alt='flag1' title='...' priority={false} loading='lazy' />
                            </div>
                            <p className="desc">{props.institute}</p>
                        </div>
                        <div className='read_more'><Link href='#'>Read More</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card