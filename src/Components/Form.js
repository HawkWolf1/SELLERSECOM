import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [Id, setId] = useState('');
  const [Price, setPrice] = useState('');
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState('');

  const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'food', label: 'Food' },
    { value: 'skincare', label: 'Skincare' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ Id, Price, Name, Category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label>
          ID:
          <input type="number" value={Id} onChange={(event) => setId(event.target.value)} />
        </label>

        <label>
          CHOOSE PRICE:
          <input type="number" value={Price} onChange={(event) => setPrice(event.target.value)} />
        </label>

        <label>
          CHOOSE DISH:
          <input type="text" value={Name} onChange={(event) => setName(event.target.value)} />
        </label>

        <label>
          CHOOSE CATEGORY:
          <select value={Category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">SELECT CATEGORY</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </div>

    </form>
  );
}

export default Form;
