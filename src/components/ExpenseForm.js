import React from 'react'

function ExpenseForm({ onSubmit }) {
    const [formData, setFormData] = useState({
      description: '',
      amount: '',
      category: 'Utilities'
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.description || !formData.amount) return;

        onSubmit({
            description: formData.description,
            amount: parseFloat(formData.amount),
            category: formData.category
          });

          setFormData({
            description: '',
            amount: '',
            category: 'Food'
          });
        };

        return (
            <form onSubmit={handleSubmit} className="expense-form">
              <div className="form-group">
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
      


     
      

 export default ExpenseForm
