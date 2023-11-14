import React, { useContext } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { AppContext } from '../context/AppContext';

import '../App.css';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value,
    });
  };

  const title = `Currency (${currency})`;

  return (
    <DropdownButton id='dropdown-item-button' title={title} size='lg'>
      <Dropdown.Item
        as='button'
        onClick={(event) => handleCurrencyChange(event)}
        value='$ Dollar'
      >
        $ Dollar
      </Dropdown.Item>
      <Dropdown.Item
        as='button'
        onClick={(event) => handleCurrencyChange(event)}
        value='£ Pound'
      >
        £ Pound
      </Dropdown.Item>
      <Dropdown.Item
        as='button'
        onClick={(event) => handleCurrencyChange(event)}
        value='€ Euro'
      >
        € Euro
      </Dropdown.Item>
      <Dropdown.Item
        as='button'
        onClick={(event) => handleCurrencyChange(event)}
        value='₹ Ruppee'
      >
        ₹ Ruppee
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default Currency;
