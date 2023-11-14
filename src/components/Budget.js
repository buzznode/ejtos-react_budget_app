import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, expenses, currencyCode } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (event.target.value < totalExpenses) {
      alert('You cannot reduce the budget value lower than the spending');
      return;
    }

    setNewBudget(event.target.value);
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currencyCode}</span>
      <input
        type='number'
        step='10'
        value={newBudget}
        onChange={handleBudgetChange}
        style={{ marginLeft: '.5rem' }}
      ></input>
    </div>
  );
};

export default Budget;
