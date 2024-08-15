// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import AddTransactionForm from './components/AddTransactionForm';
import SearchBar from './components/SearchBar'; // Correct import

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8001/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;

