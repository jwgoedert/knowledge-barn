import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SubCategoriesPage from '../Pages/SubCategoriesPage';
import '../../Styles/Layout.css';
// import { Link } from 'react-router-dom';


const SubCategoryCard = (props) => {
  const subjects = props.subjects.map((subject) => <h5>{subject.subject}</h5>)
  return (
    <div className="container">
      <div className="category-link-outer">
        <div className="category-link-inner">
          <div className="category-link-text" style={props.color}>
            {/* <Route path="/SubCategoryPage" component={SubCategoriesPage} ></Route> */}
            <Link to={{
              pathname: "/SubCategories",
              subCategoryProps: {
                category: props.category,
                subCategories: props.subCategories,
              }
            }}>
              <h4>{props.subCategory}</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {subjects}
      </div>
    </div>
  )
}

export default SubCategoryCard;