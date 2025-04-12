import './App.css';

import React, { useState } from 'react'

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






 // Event handling
 const handleAddExpense = (newExpense) => {
  setExpenses(prev => [
    ...prev,
    {
      ...newExpense,
      id: Date.now(),
      amount: parseFloat(newExpense.amount)
    }
  ]);
};

const handleDeleteExpense = (id) => {
  setExpenses(prev => prev.filter(expense => expense.id !== id));
};

return (
  <div className="app-container">
    <header className="app-header">
      <h1>Expense Tracker</h1>
    </header>

    <main className="app-main">
        <ExpenseForm onSubmit={handleAddExpense} />
        
        <div className="expense-controls">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>

        <ExpenseTable 
          expenses={filteredExpenses} 
          onDelete={handleDeleteExpense}
        />
      </main>

      <footer className="app-footer">
        <p>Total Expenses: $
          {expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)}
        </p>
      </footer>
    </div>
  );
}

export default App
