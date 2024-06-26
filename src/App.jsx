import './App.css';
import './index.css'
import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';

const API_URL = 'https://my-json-server.typicode.com/IVON1010/bank-of-flatiron/transactions';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => {
        
        return response.json();
      })
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const sortTransactions = (key) => {
    setTransactions([...transactions].sort((a, b) => a[key].localeCompare(b[key])));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='bank'>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <TransactionTable
        transactions={filteredTransactions}
        onSort={sortTransactions}
      />
    </div>
  );
};

export default App;