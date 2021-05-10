import React from 'react';
import './SearchField.css'

const SearchField = () => {
    return (
        <div className="search-field">
            <div className="search-field-tittle">
                <h1>Best Food Waiting For Your Belly</h1>
            </div>
            <div className="search-area">
                <input type="text" name="" placeholder="Search food items"/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchField;