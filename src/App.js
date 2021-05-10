import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import FoodCategoryNav from './components/FoodCategoryNav/FoodCategoryNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchField from './components/SearchField/SearchField';
import FoodsBox from './components/FoodsBox/FoodsBox';
import FoodDetails from './components/FoodDetails/FoodDetails';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <SearchField></SearchField>
          <FoodCategoryNav></FoodCategoryNav>
          <FoodsBox></FoodsBox>
        </Route>
        <Route exact path='/foods/:category'>
          <FoodCategoryNav></FoodCategoryNav>
          <FoodsBox></FoodsBox>
        </Route>
        <Route exact path='/foods/:category/:id'>
          <FoodCategoryNav></FoodCategoryNav>
          <FoodDetails></FoodDetails>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
