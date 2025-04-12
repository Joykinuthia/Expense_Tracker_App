import { useState } from 'react';
import { format } from 'date-fns';

function ExpenseTable({ expenses, onDelete }) {
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortConfig.key === 'date') {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
    }

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? 'Invalid date' : format(date, 'MMM dd, yyyy');
  };

  const renderSortArrow = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const sortableHeader = (label, key) => (
    <th
      onClick={() => requestSort(key)}
      onKeyPress={(e) => e.key === 'Enter' && requestSort(key)}
      tabIndex="0"
      role="button"
      className={sortConfig.key === key ? 'sorted-column' : ''}
    >
      {label} {renderSortArrow(key)}
    </th>
  );

  return (
    <table className="expense-table">
      <thead>
        <tr>
          {sortableHeader('Date', 'date')}
          {sortableHeader('Category', 'category')}
          {sortableHeader('Description', 'description')}
          {sortableHeader('Amount', 'amount')}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.length > 0 ? (
          sortedExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{formatDate(expense.date)}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{formatCurrency(expense.amount)}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="no-expenses">
              No expenses found. Add one to get started!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;