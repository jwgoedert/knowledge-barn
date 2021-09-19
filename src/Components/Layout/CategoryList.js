import React from 'react';
import CategoryItemLink from './CategoryItemLink';
let categories = require('../../Data/categories.json');


const CategoryList = () => {
  const listItems = categories.map((category) => <CategoryItemLink key={category.category} color={{color:"deeppink"}} category={category}></CategoryItemLink>);
  return (
    <div className="wrapper">
          {listItems}
    </div>
  )
}

export default CategoryList;