import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Shipment.css';


const Shipment = (props) => {

    const cart = props.cart;
    const setCart = props.setCart;

    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};

    const [shipmentData, setShipmentData] = useState(null)
    const [paid, setPaid] = useState(null);
    const handlePayment = paymentId => {
        setPaid(paymentId)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setShipmentData(data)
    };

    const history = useHistory();
    const handleOrder = () => {
        const orderedItems = cart.map(cartItem => {
            return { food_id: cartItem._id, food_name: cartItem.food_name, quantity: cartItem.quantity  }
        })

        const orderDetailsData = { customerInfo: loggedInUser, orderedItems, shipmentData, paymentId: paid }
        fetch('https://chill-out-server.herokuapp.com/submitOrder', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(orderDetailsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Thanks for your order');
                    history.push(`/complete-order/paymentId=${paid}`);
                    setCart([]);
                    sessionStorage.removeItem('cart')
                }
            })

    };

    const checkOutItemHandler = (productId, productQuantity) => {
        const newCart = cart.map(item => {
            if (item._id === productId) {
                item.quantity = productQuantity;
            }
            return item;
        })

        const filteredCart = newCart.filter(item => item.quantity > 0)
        sessionStorage.setItem('cart', JSON.stringify(filteredCart))
        setCart(filteredCart)
    }

    const subTotal = cart.reduce((total, item) => total + Number(item.food_price * item.quantity), 0)
    const totalQuantity = cart.reduce((total, item) => total + Number(item.quantity), 0)
    const tax = (subTotal / 100) * 5;
    const deliveryFee = totalQuantity && 2;
    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div className="shipment container py-5">
            <div className="row">
                <div style={{ display: shipmentData ? "none" : "block" }} className="col-md-5">
                    <h4 className="text-center">Put here Delivery Details</h4>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">

                        <div className="form-group">
                            <input className="form-control" {...register("toDoor", { required: true })} placeholder="Delivery To Door" />
                            {errors.toDoor && <span className="error">This Option is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" {...register("road", { required: true })} placeholder="Road No" />
                            {errors.road && <span className="error">Road No is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" {...register("flat", { required: true })} placeholder="Flat, Suite or Floor" />
                            {errors.flat && <span className="error">Flat, Suite or Floor is required</span>}
                        </div>
                        <div className="form-group">
                            <input className="form-control" {...register("businessName", { required: true })} placeholder="Business name" />
                            {errors.businessName && <span className="error">Business name is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea {...register("address", { required: true })} placeholder="Address" className="form-control" cols="30" rows="2"></textarea>
                            {errors.address && <span className="error">Password is required</span>}
                        </div>

                        <div className="form-group">
                            <button className="btn btn-danger btn-block" type="submit">Save & Continue</button>
                        </div>
                    </form>
                </div>
                <div style={{ display: shipmentData ? "block" : "none" }} className="col-md-5">
                    <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                </div>
                <div className="offset-md-2 col-md-5">
                    <div className="restaurant-info mb-5">
                        <h4>Form <strong>Chill Out Restaurant</strong></h4>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>119 Rd No 15</h5>
                    </div>

                    {
                        cart.map(item =>
                            <div key={item._id} className="mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                                <img width="100px" src={item.food_img} alt="" />
                                <div>
                                    <h6>{item.food_name}</h6>
                                    <h4 className="text-danger">${item.food_price}</h4>
                                    <p>Delivery free</p>
                                </div>
                                <div className="ml-3">

                                    <button onClick={() => checkOutItemHandler(item._id, (item.quantity + 1))} className="btn font-weight-bolder">+</button>
                                    <button className="btn bg-white rounded">{item.quantity}</button>
                                    <button onClick={() => checkOutItemHandler(item._id, (item.quantity - 1))} className="btn font-weight-bolder">-</button>

                                </div>
                            </div>
                        )
                    }

                    <div className="cart-calculation">
                        <p className="d-flex justify-content-between"><span>Sub Total . {totalQuantity} Item</span> <span>${subTotal.toFixed(2)}</span></p>
                        <p className="d-flex justify-content-between"><span>Tax</span> <span>${tax.toFixed(2)}</span></p>
                        <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>${deliveryFee}</span></p>
                        <p className="h5 d-flex justify-content-between"><span>Total</span> <span>${grandTotal.toFixed(2)}</span></p>
                        {
                            totalQuantity ?
                                paid ?
                                    <button onClick={handleOrder} className="btn btn-block btn-danger btn-secondary">Check Out Your Food</button>
                                    :
                                    <button disabled className="btn btn-block btn-secondary">Check Out Your Food</button>
                                :
                                <button disabled className="btn btn-block btn-secondary">Nothing to Checkout</button>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;