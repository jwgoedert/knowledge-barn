import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import SubCategoriesPage from '../Pages/SubCategoriesPage';
import '../../Styles/Layout.css';
import imageTest from '../../Assets/Images/aaaGraphicTest1.png';
// import { Link } from 'react-router-dom';


const SubCategoryCard = (props) => {
  const subjects = props.subjects.map((subject) => <h5>{subject.subject}</h5>)
  console.log('subcatprops', props);
  return (
    <div className="container card-block">
      <img className="card-image" src={imageTest} alt="test"></img>
      <div className="subcategory-lower-content" style={props.color}>
        {/* <Route path="/SubCategoryPage" component={SubCategoriesPage} ></Route> */}
        <h2 className="subcategory-link-text">{props.subCategory}({props.subjects.length})</h2>
        <div className="subject-list">
          {subjects}
        </div>
        <Link to={{
          pathname: "/SubjectsPage",
          subjectProps: {
            category: props.category,
            subCategory: props.subCategory,
            subjects: props.subjects
          }
        }}>
      <div className="subject-button">
        <h4>explore</h4>
      </div>
        </Link>
      </div>
    </div>
  )
}

export default SubCategoryCard;