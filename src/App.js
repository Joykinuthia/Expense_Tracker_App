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



// Derived state with useMemo for performance
const filteredExpenses = useMemo(() => {
  const term = searchTerm.toLowerCase();
  return expenses.filter(expense => 
    expense.description.toLowerCase().includes(term) ||
    expense.category.toLowerCase().includes(term)
  );
}, [expenses, searchTerm]);

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
