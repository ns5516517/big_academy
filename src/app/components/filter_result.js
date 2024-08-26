import React from 'react';
import { Form } from 'react-bootstrap';
import '../../../public/sass/pages/filter_result.scss';

const Filter_Result = (props) => {
    return (
        <div className="filter_result">
            <div className="left_area">
                <h3>Explore by Course Types <span>(50)</span> </h3>
            </div>
            <div className="right_area">
                <div className="select_wrapper">
                    <Form.Select aria-label="Default select example" defaultValue={'09'} onChange={(e)=> props.setLimit(e.target.value)} >
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                    </Form.Select>
                </div>
            </div>
        </div>
    )
}

export default Filter_Result;