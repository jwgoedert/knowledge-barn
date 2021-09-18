import React from 'react';
// import { Link } from 'react-router-dom';
import CategoryItemLink from './CategoryItemLink';
// const categories = ['Tech', 'Art','Mechanics','Writing'];
let categories = require('../../Data/categories.json');
// let color = "black";
// console.log(cats);
const CategoryList = () => {
  const listItems = categories.map((category) => <CategoryItemLink key={category.category} color={{color:"deeppink"}} category={category.category}></CategoryItemLink>);
  return (
    <div className="wrapper">
        {/* <ul> */}
          {listItems}
        {/* </ul> */}
    </div>
  )
}

export default CategoryList;