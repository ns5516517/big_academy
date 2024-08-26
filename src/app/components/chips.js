import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../../public/sass/pages/chips.scss';

const Chips = (props) => {
    return (
        <>
            {
                props.chips.length !== 0  &&
                <div className="chips">
                    <ul>
                        {
                            props.chips.map((item, index) => (
                                <li key={index}>
                                    {item}<span onClick={() => props.removeChip(index) }><FontAwesomeIcon icon={faTimes} /></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </>
    )
}

export default Chips