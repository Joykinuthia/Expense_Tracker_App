import './App.css';

import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
// State management
const [expenses, setExpenses] = useState([
  { id: 1, description: 'Shopping', amount: 15000, category: 'Utilities' },
  { id: 2, description: 'Fuel', amount: 10000, category: 'Transport' },
  { id: 3, description: 'Rent', amount: 30000, category: 'Essentials' },
  { id: 4, description: 'Savings', amount: 50000, category: 'Investments' }
]);
const [searchTerm, setSearchTerm] = useState('');
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

 // Adding new expense
 const addExpense = (newExpense) => {
  setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
};

// Deleting expense
const deleteExpense = (id) => {
  setExpenses(expenses.filter(expense => expense.id !== id));
};

 // Filtering expenses
 const filteredExpenses = expenses.filter(expense =>
  expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  expense.category.toLowerCase().includes(searchTerm.toLowerCase())
);

 // Sorting expenses
 const sortedExpenses = [...filteredExpenses].sort((a, b) => {
  if (!sortConfig.key) return 0;
  if (a[sortConfig.key] < b[sortConfig.key]) {
    return sortConfig.direction === 'asc' ? -1 : 1;
  }
  if (a[sortConfig.key] > b[sortConfig.key]) {
    return sortConfig.direction === 'asc' ? 1 : -1;
  }
  return 0;
});

// Request sorting
const requestSort = (key) => {
  let direction = 'asc';
  if (sortConfig.key === key && sortConfig.direction === 'asc') {
    direction = 'desc';
  }
  setSortConfig({ key, direction });
};

return (
  <div className="expense-tracker">
    <h1>Expense Tracker</h1>
    <ExpenseForm onSubmit={addExpense} />
    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    <ExpenseTable 
      expenses={sortedExpenses} 
      onDelete={deleteExpense}
      onSort={requestSort}
      sortConfig={sortConfig}
    />
  </div>
);
}

export default App
