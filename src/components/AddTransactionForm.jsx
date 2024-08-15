// src/components/AddTransactionForm.jsx
import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="p-2 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
