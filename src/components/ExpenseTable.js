import React from 'react'

function ExpenseTable({ expenses, onDelete, onSort, sortConfig }) {
    const getSortIndicator = (key) => {
      if (sortConfig.key !== key) return null;
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    };

    return (
        <table className="expense-table">
          <thead>
            <tr>
              <th onClick={() => onSort('description')}>
                Description{getSortIndicator('description')}
              </th>
              <th>Amount</th>
              <th onClick={() => onSort('category')}>
                Category{getSortIndicator('category')}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount.toFixed(2)}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button 
                      onClick={() => onDelete(expense.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                    </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No expenses found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}


export default ExpenseTable;
