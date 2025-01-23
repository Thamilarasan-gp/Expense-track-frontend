import './App.css';
import React, { useState } from 'react';
import Form from './Form/Form';
import History from './History/History';
import Expense from './Header/Expense';

function App() {
  const [transactions, setTransactions] = useState([]);

  const onAddTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const onDeleteTransaction = (id) => {
    setTransactions((prevTransactions) => 
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Expense expenses={transactions} />
      <History expenses={transactions} onDeleteTransaction={onDeleteTransaction} />
      <Form onAdd={onAddTransaction} />
    </div>
  );
}

export default App;
