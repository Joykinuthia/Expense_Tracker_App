import React, { useState } from 'react'; 

function ExpenseForm() {
  const [formData, setFormData] = useState({
    // Initializing form state 
    category: 'Utilities' // Default selected value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form>
      <div className="form-group">
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="Utilities">Utilities</option>
          <option value="Transport">Transport</option>
          <option value="Essentials">Essentials</option>
          <option value="Investments">Investments</option> 
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;