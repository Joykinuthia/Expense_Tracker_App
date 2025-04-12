import React from 'react'

function ExpenseTable({ expenses, onDelete, onSort, sortConfig }) {
    const getSortIndicator = (key) => {
      if (sortConfig.key !== key) return null;
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    };

export default ExpenseTable;
