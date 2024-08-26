'use client'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import '../../../public/sass/pages/cataegory_selector.scss';

const Category_selector = () => {
    const categories = [
        'All',
        "Bachelor's Degree",
        'Professional Certification',
        "Master's Degree",
        'Doctorate programme',
        'Professional Certification',
        'Diploma',
    ];
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    function handleActive(index) {
        setActive(index)
    }

    function leftScroll() {
        ref.current.scrollLeft -= 210
    }
    function rightScroll() {
        ref.current.scrollLeft += 210
    }
    return (
        <>
            <div className="category_selector">
                <div className="left_icon" id='left_scroll' onClick={() => leftScroll()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="category" ref={ref}>
                    <ul>
                        {categories.map((item, index) => (
                            <li key={index} onClick={() => handleActive(index)} className={active === index ? 'item_active' : 'item'}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="left_icon " id='right_scroll' onClick={() => rightScroll()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </>
    )
}

export default Category_selector