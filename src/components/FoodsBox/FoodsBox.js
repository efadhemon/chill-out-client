import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleFood from '../SingleFood/SingleFood';
import './FoodsBox.css'

const FoodsBox = () => {

    let {category} = useParams();

    const time = new Date().toTimeString().split(' ')[0]

    const getTime = time => new Date(2019, 9, 2, time.substring(0, 2), time.substring(3, 5), 0, 0);

    if (!category) {
        if (getTime(time) < getTime('12:00')) {
            category = 'breakfast';
            sessionStorage.setItem('category', category);
        }
        else if (getTime(time) > getTime('12:00') && getTime(time) < getTime('07:00')) {
            category = 'lunch';
            sessionStorage.setItem('category', category);
        }
        else if (getTime(time) > getTime('07:00')) {
            category = 'dinner';
            sessionStorage.setItem('category', category);
        }
    }

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/foods/${category}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [category])

    return (
        <div className="container FoodsBox">
            {
                foods.map(food => <SingleFood food={food} key={food._id}></SingleFood>)
            }
        </div>
    );
};

export default FoodsBox;