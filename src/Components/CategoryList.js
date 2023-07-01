import React from 'react';

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.value}>
          <h3>{category.label}</h3>
          {category.data.length > 0 ? (
            <ul>
              {category.data.map((data) => (
                <li key={data.Id}>
                  <p>ID: {data.Id}</p>
                  <p>Price: {data.Price}</p>
                  <p>Name: {data.Name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data for this category.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
