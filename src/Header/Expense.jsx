import React from 'react';
import './Expense.css';
function Expense({ expenses }) {
  let total1 = 0;
  let total2 = 0;

  expenses.forEach((expense) => {
    if (expense.amount > 0) {
      total1 += +expense.amount;
    } else {
      total2 += +expense.amount;
    }


  });

  return (
    <div className='expense'>
    
      <h2>Total Expense</h2>
      <p className='Bal'>Your Balance:{total1+total2}</p>
      <p className='Inc'>Income:{total1}</p>
      <p className='Exp'>Expense:{total2}</p>
     
    </div>
  );
}

export default Expense;

