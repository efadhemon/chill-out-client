import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FoodDetails.css'

const FoodDetails = (props) => {

    const cart = props.cart;
    const setCart = props.setCart;

    const { id } = useParams();
    const [food, setFood] = useState({});


    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`https://chill-out-server.herokuapp.com/food/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [id])

    const { food_name, food_price, food_details, food_img } = food;

    const handleAddToCart = () => {
        const remainItems = cart.find(item => item._id === food._id);
        if (!food.quantity && !remainItems) {
            food.quantity = quantity;
            const newCart = [...cart, food]
            sessionStorage.setItem('cart', JSON.stringify(newCart))
            setCart(newCart);
        }
    }


    return (
        <div className="container">
            {
                food.food_name === undefined &&
                <div style={{ height: '80vh' }} className="d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-center" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            <div className="row py-5">

                <div className="col-md-6 order-md-6">
                    <img className="img-fluid" src={food_img} alt="" />
                </div>
                
                <div className="col-md-6">
                    <h3>{food_name}</h3>
                    <p>{food_details}</p>
                    <div className="quantity-price-box">
                        <div className="price-box">
                            <h4>{(food_price * quantity).toFixed(2)}</h4>
                        </div>
                        <div className="quantity-box">
                            <span className="decrement-quantity" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</span>
                            <span>{quantity}</span>
                            <span className="increment-quantity" onClick={() => setQuantity(quantity + 1)}>+</span>
                        </div>
                    </div>
                    <div className="add-food-btn">
                        <button onClick={handleAddToCart} ><FontAwesomeIcon icon={faCartPlus} /> Add</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;