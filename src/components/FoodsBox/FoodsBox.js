import React, { useEffect, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './FoodsBox.css'

const FoodsBox = () => {

    let [category, setCategory] = useState('breakfast')

    const time = new Date().toTimeString().split(' ')[0];
    const date = new Date().toLocaleDateString();

    useEffect(() => {

        if (Date.parse(`${date} ${time}`) > Date.parse(`${date} 5:00:00`) && Date.parse(`${date} ${time}`) < Date.parse(`${date} 12:00:00`)) {
            setCategory('breakfast');

        } else if (Date.parse(`${date} ${time}`) > Date.parse(`${date} 12:00:00`) && Date.parse(`${date} ${time}`) < Date.parse(`${date} 19:00:00`)) {
            setCategory('lunch');

        } else if (Date.parse(`${date} ${time}`) > Date.parse(`${date} 19:00:00`)) {
            setCategory('dinner');
        } else {
            setCategory('lunch');
        }

    }, [])

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`https://chill-out-server.herokuapp.com/foods/${category}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [category])


    return (
        <section className="food-box">
            <div className="container">

                <div className="food-category-nav">
                    <span onClick={() => setCategory('breakfast')} className={category === 'breakfast' ? 'nav-link active' : 'nav-link'} >Breakfast</span>
                    <span onClick={() => setCategory('lunch')} className={category === 'lunch' ? 'nav-link active' : 'nav-link'} >Lunch</span>
                    <span onClick={() => setCategory('dinner')} className={category === 'dinner' ? 'nav-link active' : 'nav-link'} >Dinner</span>
                </div>

                {
                    foods.length === 0 &&
                    <div className="text-center">
                        <div className="spinner-grow text-center" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                }

                <div className="food-container">
                    {
                        foods.map(food => <SingleFood food={food} key={food._id}></SingleFood>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FoodsBox;