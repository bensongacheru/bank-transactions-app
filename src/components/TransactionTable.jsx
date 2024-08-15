// src/components/TransactionTable.jsx
import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Description</th>
          <th className="border border-gray-300 p-2">Amount</th>
          <th className="border border-gray-300 p-2">Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td className="border border-gray-300 p-2">{transaction.description}</td>
            <td className="border border-gray-300 p-2">{transaction.amount}</td>
            <td className="border border-gray-300 p-2">{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
