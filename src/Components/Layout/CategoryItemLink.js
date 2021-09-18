import React from 'react';
import '../../Styles/Layout.css';
// import { Link } from 'react-router-dom';


const CategoryItemLink = (props) => {
  return (
    <div className="container">
      <div className="category-link-outer">
        <div className="category-link-inner">
          <div className="category-link-text" style={props.color}>
          <h2>{props.category}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItemLink;