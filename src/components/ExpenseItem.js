import React, { useContext } from 'react';

import { TiDelete } from 'react-icons/ti';
import { BsPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch, currencyCode } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'SUB_EXPENSE',
      payload: expense,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currencyCode}
        {props.cost}
      </td>
      <td>
        <BsPlusCircleFill
          color='green'
          size='1.5em'
          onClick={(event) => increaseAllocation(props.name)}
        ></BsPlusCircleFill>
      </td>
      <td>
        <BsFillDashCircleFill
          color='#C41E3A'
          size='1.5em'
          onClick={(event) => decreaseAllocation(props.name)}
        ></BsFillDashCircleFill>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
