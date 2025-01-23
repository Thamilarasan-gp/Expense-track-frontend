import React, { useState } from 'react';
import './Form.css';
function Form({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAmountChange = (e) => setAmount(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title && amount) {

      onAdd({id: Date.now(), title, amount:amount});
      setTitle("");
      setAmount("");
     
    } else {
      alert('Please enter valid title and amount.');
    }
  };

  return (
    <div className="add-expense">
      <h2>Add Expense</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the Title"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter the Amount"
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Form;
