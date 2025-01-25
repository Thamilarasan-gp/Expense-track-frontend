import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import History from './History/History';
import Expense from './Header/Expense';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from the backend

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  // Add a new transaction
  
  const onAddTransaction = (transaction) => {
    fetch("http://localhost:8000/add-transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions((prevTransactions) => [...prevTransactions, data]))
      .catch((error) => console.error("Error adding transaction:", error));
  };

  
  const onDeleteTransaction = (id) => {
    fetch(`http://localhost:8000/delete-transaction/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setTransactions((prevTransactions) =>
            prevTransactions.filter((transaction) => transaction._id !== id)
          );
        } else {
          console.error("Failed to delete transaction");
        }
      })
      .catch((error) => console.error("Error deleting transaction:", error));
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
