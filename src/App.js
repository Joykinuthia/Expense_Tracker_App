import './App.css';

import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Utilities', description: 'Electricity Bill', amount: 1000, date: '2023-03-19' },
    { id: 2, category: 'Transport', description: 'Fuel', amount: 1500, date: '2023-03-16' },
    { id: 3, category: 'Essentials', description: 'Rent', amount: 2500, date: '2023-03-14' },
    { id: 4, category: 'Investment', description: 'Savings', amount: 5000, date: '2023-03-10' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;