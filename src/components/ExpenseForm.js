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


  return (
    <div>
      
    </div>
  )
}

export default ExpenseForm
