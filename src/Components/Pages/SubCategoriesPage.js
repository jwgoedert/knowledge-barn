import React from 'react';
import SubCategoryCard from '../Layout/SubCategoryCard';

export default function SubCategoriesPage(props) {
  // let category = props.subCategoryProps.category;
  // console.log('props', props.location.subCategoryProps.category.category );
  let linkProps = props.location.subCategoryProps;
  let category = linkProps.category.categoryName;
  let subCategories = linkProps.category.subCategories;
  console.log('cat', category);
  console.log('subcats', linkProps.category.subCategories);
  let subCatList = subCategories.map((subcat) =>
    <SubCategoryCard key={subcat.subCategory} subCategory={subcat.subCategory} subjects={subcat.subjects}></SubCategoryCard>);

  return (
    <div className="container page-block">
      <h1 className="page-header-text">Category: {category}</h1>
      <div className="wrapper">
        {subCatList}
      </div>
    </div>
  )
}