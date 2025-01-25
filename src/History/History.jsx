import React from 'react';
import './History.css';
function History({ expenses, onDeleteTransaction }) {
  return (
    <div className="history">
      <h3>Expense History</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.title}</strong>: ₹{expense.amount}
          
            <button className="delete" onClick={() => onDeleteTransaction(expense._id)}> x</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
