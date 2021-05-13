import React, { useEffect, useState } from 'react';
import Rider from '../../images/rider.png';
import RiderHalmet from '../../images/helmet.png';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useParams } from 'react-router';
const OrderComplete = () => {

    const { paymentId } = useParams();

    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() => {
        fetch(`https://chill-out-server.herokuapp.com/order/${paymentId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [paymentId])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img className="w-25 ml-5" src={Rider} alt="" />
                        <div className="bg-white  rounded p-3 my-3">

                            <div>
                                <div>
                                    <h6>Order Id :</h6>
                                    <p>{orderDetails.paymentId}</p>
                                </div>
                                <h5>Your Location</h5>
                                <p>{orderDetails.shipmentData?.flat}, {orderDetails.shipmentData?.road}</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Chill Out Restaurant</p>
                            </div>
                        </div>
                        <h1>{new Date().getHours() + 1 + ':00'}</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={RiderHalmet} alt="" />
                            <div>
                                <h6>Jamil</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;