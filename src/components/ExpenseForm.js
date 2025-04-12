import { useState } from 'react';

function ExpenseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    category: 'Utilities',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0] 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
    // Reset form but keep category and date
    setFormData(prev => ({
      ...prev,
      description: '',
      amount: ''
    }));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Utilities">Utilities</option>
            <option value="Transport">Transport</option>
            <option value="Essentials">Essentials</option>
            <option value="Investment">Investment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Description *</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter expense description"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount *</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            step="0.01"
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;