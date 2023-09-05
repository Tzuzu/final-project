import React from 'react';

const CategoryItem = ({ category, imageSrc }) => {
  return (
    <div className="category-item">
      <img src={imageSrc} alt={category} />
      <p>{category}</p>
    </div>
  );
};

export default CategoryItem;