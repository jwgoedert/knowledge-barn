import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SubCategoriesPage from '../Pages/SubCategoriesPage';
import '../../Styles/Layout.css';
// import { Link } from 'react-router-dom';


const CategoryItemLink = (props) => {
  console.log('catlinkprops', props);
  return (
    <div className="container">
      <div className="category-link-outer">
        <div className="category-link-inner">
          <div className="category-link-text" style={props.color}>
          {/* <Route path="/SubCategoryPage" component={SubCategoriesPage} ></Route> */}
          <Link to={{
            pathname:"/SubCategories",
            subCategoryProps:{
              category:props.category, 
              subCategories:props.subCategories,
          }}}>
          <h2>{props.category.categoryName}</h2>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItemLink;