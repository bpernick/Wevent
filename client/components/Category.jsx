import React from 'react';

const Category = ({
  handleFilterCategoryChange,
  filterCategoryValue,
}) => (
  <div>
    <span>A way to save the categories...</span>

    <form>
      <label htmlFor="category">
        Category:
        <select value={filterCategoryValue} onChange={(e) => handleFilterCategoryChange(e.target.value)}>
          <option>TX</option>
          <option>AZ</option>
          <option>TN</option>
          <option>NY</option>
          <option>HI</option>
          <option>MA</option>
        </select>
      </label>
    </form>
  </div>
);

export default Category;
