import React from 'react';
import CategoryList from '../Layout/CategoryList';


export default function CategoriesPage() {
    let list = [];
    return(
        <div className="container page-block">
            <h1 className="page-header-text">Categories:</h1>
            <CategoryList list={list}></CategoryList>
        </div>
    )
}