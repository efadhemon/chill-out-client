import React from 'react';
import { useHistory } from 'react-router';
import './SingleFood.css'

const SingleFood = (props) => {

    const {_id, food_name, food_price, food_category, food_img} = props.food;
    const history = useHistory();
    
    return (
        <div onClick={()=>history.push(`/food/${food_category}/${_id}`)} className="SingleFood">
            <img src={food_img} alt=""/>
            <h4>{food_name}</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <h4>${food_price}</h4>
        </div>
    );
};

export default SingleFood;