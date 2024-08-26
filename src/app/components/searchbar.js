import { faFilter, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../../public/sass/pages/searchbar.scss';

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <div className="left">
        <Form className='form' >
          <div className="form_group">
            <Form.Control
              type="text"
              placeholder="Search Courses"
              aria-label="Search"
            />
            <Button> Search</Button>
          </div>
        </Form>
      </div>
      <div className="right">
        <div className="inner_right">
          <div className={props.show ? "icon_red " : "icon"} onClick={() => props.setFilterShow(!props.show)}><FontAwesomeIcon icon={faFilter} /></div>
          <div className="icon"><FontAwesomeIcon icon={faSortAmountDown} /></div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar