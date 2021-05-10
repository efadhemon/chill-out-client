import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FoodDetails.css'

const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState({});

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:4000/food/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])

    const { _id, food_name, food_price, food_category, food_details, food_img } = food;
    return (
        <div className="food-details container">
            <div className="food-details-info">
                <h3>{food_name}</h3>
                <p>{food_details}</p>
                <div className="quantity-price-box">
                    <div className="price-box">
                        <h4>{food_price * quantity}</h4>
                    </div>
                    <div className="quantity-box"> 
                        <span className="decrement-quantity" onClick={()=> setQuantity(quantity > 1 ? quantity-1 : quantity)}>-</span>
                            <span>{quantity}</span>
                        <span className="increment-quantity" onClick={()=> setQuantity(quantity+1)}>+</span>
                    </div>
                </div>
            </div>
            <div className="food-image">
                <img src={food_img} alt="" />
            </div>
        </div>
    );
};

export default FoodDetails;