import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import CategoryList from './Components/CategoryList';

function App() {
  const [categories, setCategories] = useState([
    { value: 'electronics', label: 'Electronics', data: [] },
    { value: 'food', label: 'Food', data: [] },
    { value: 'skincare', label: 'Skincare', data: [] },
  ]);

  const handleSubmit = (data) => {
    const isDuplicateOrder = categories.some((category) =>
      category.data.some((order) => order.Id === data.Id)
    );

    if (isDuplicateOrder) {
      alert('Error: OrderID already exists. Please choose a different OrderID.');
      return;
    }

    const updatedCategories = categories.map((category) => {
      if (category.value === data.Category) {
        const updatedData = [...category.data, data];
        localStorage.setItem(String(data.Id), JSON.stringify(updatedData));
        return { ...category, data: updatedData };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  return (
    <div className="App">
      <h1>SELLER's PAGE</h1>

      <Form onSubmit={handleSubmit} categories={categories} />
      <CategoryList categories={categories} />
    </div>
  );
}

export default App
