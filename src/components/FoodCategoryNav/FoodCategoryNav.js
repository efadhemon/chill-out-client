import React from 'react';
import './FoodCategoryNav.css'
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData';

const FoodCategoryNav = () => {

    // const handleAddFoods = () => {
    //     fetch('http://localhost:4000/addFoods', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(FakeData)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data) {
    //             alert('product successfully added')
    //         }
    //     })
    // }
    
    const category = sessionStorage.getItem('category');
    console.log(category);

    const categoryStyle = {
        borderBottom: '2px solid red'
    }

    return (
        <div className="container">
            <div className="food-category-nav">
                <Link style={category === 'breakfast' ? categoryStyle : {}} to='/foods/breakfast' className="nav-link" >Breakfast</Link>
                <Link style={category === 'lunch' ? categoryStyle : {}} to='/foods/lunch' className="nav-link" >Lunch</Link>
                <Link style={category === 'dinner' ? categoryStyle : {}} to='/foods/dinner' className="nav-link" >Dinner</Link>
            </div>
        </div>
    );
};

export default FoodCategoryNav;