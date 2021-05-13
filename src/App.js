import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import SearchField from './components/SearchField/SearchField';
import FoodsBox from './components/FoodsBox/FoodsBox';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import OrderComplete from './components/OrderComplete/OrderComplete';



const App = () => {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

  return (
    <Router>
      <Header cart={cart}></Header>
      <Switch>
        <Route exact path='/'>
          <SearchField></SearchField>
          <FoodsBox></FoodsBox>
          <Features></Features>
          <Footer></Footer>
        </Route>
        <Route path='/food/:category/:id'>
          <FoodDetails cart={cart} setCart={setCart}></FoodDetails>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/checkout'>
          <Shipment cart={cart} setCart={setCart}></Shipment>
        </PrivateRoute>
        <PrivateRoute path='/complete-order/paymentId=:paymentId'>
          <OrderComplete></OrderComplete>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
