'use client'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../../../public/sass/pages/filter.scss';
import { Accordion, Form } from 'react-bootstrap';


const Filter = (props) => {

    const accData = [
        {
            title: 'Countries', countryData: [
                { country: 'UAE' },
                { country: 'Canada' },
                { country: 'France' },
                { country: 'Australia ' },
                { country: 'USA' },
                { country: 'India' }
            ]
        },
        {
            title: 'Campus', countryData: [{
                country: 'Harvard University (tie)'
            },
            { country: 'Massachusetts Institute of Technology' },
            { country: 'Princeton University' },
            { country: 'American University, United Arab Emirates ' }
            ]
        },
        {
            title: 'Programmes', countryData: [{
                country: 'Supply Chain'
            },
            { country: 'Media and Journalism' },
            { country: 'Business Analytics' },
            { country: 'Data Science ' },
            { country: 'Arts' },
            { country: 'Commerce' },
            { country: 'Information Technology' },
            { country: 'Management' }
            ]
        },
        {
            title: 'Course Duration', countryData: [{
                country: '0 - 3 Months'
            },
            { country: '3- 6 Months' },
            { country: '6 - 12 Months' },
            { country: '12 - 24 Month ' },
            { country: '24 - 36 Month' },
            { country: '36 - 48 Month' },
            { country: '48 Months +' }
            ]
        }
    ]

    const [active, setActive] = useState(accData.map((_, index) => index))
    const handleAccordion = (index) => {
        active.includes(index) ? setActive(active.filter((key) => key !== index)) : setActive([...active, index])
    }
    return (
        <>

            <div className={`${props.show ? 'show' : 'hide'} filter`} id='pb_scroll'  >
                <div className="filter_title">
                    <h3>Filters</h3>
                    <div className="close_icon" onClick={() => props.setFilterShow(false)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </div>
                <div className="filter_checks">
                    <Accordion activeKey={active}>
                        {
                            accData.map((item, index) => (
                                <Accordion.Item eventKey={index} key={index} >
                                    <Accordion.Header onClick={() => handleAccordion(index)}>{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="check_list">
                                            <ul>
                                                {
                                                    item.countryData.map((ele, i) => (
                                                        <li key={i}>
                                                            <Form.Check
                                                                type={'checkbox'}
                                                                id={ele.country}
                                                                label={ele.country}
                                                                value={ele.country}
                                                                onChange={(e) => props.addChip(e)}
                                                                checked={props.chips.includes(ele.country)}
                                                            />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </div>
                <div className="filter_btns">
                    <div className="btn btn_red">Apply</div>
                    <div className="btn">Cancel</div>
                </div>
            </div>

        </>
    )
}

export default Filter