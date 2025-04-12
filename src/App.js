import './App.css';

import React, { useState } from 'react'

function App() 
// State management
const [expenses, setExpenses] = useState([
  { id: 1, description: 'Shopping', amount: 15000, category: 'Utilities' },
  { id: 2, description: 'Fuel', amount: 10000, category: 'Transport' },
  { id: 3, description: 'Rent', amount: 30000, category: 'Essentials' },
  { id: 4, description: 'Savings', amount: 50000, category: 'Investments' }
]);
const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      
    </div>
  )
}

export default App
