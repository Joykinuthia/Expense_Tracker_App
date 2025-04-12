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

// Derived state with useMemo for performance
const filteredExpenses = useMemo(() => {
  const term = searchTerm.toLowerCase();
  return expenses.filter(expense => 
    expense.description.toLowerCase().includes(term) ||
    expense.category.toLowerCase().includes(term)
  );
}, [expenses, searchTerm]);

 // Event handlers
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
    <div>
      
    </div>
  )
}

export default App
