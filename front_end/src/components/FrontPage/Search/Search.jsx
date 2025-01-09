import React from 'react';
import './Search.css';
import Flight from './Flight';
import { Hotel } from './Hotel';
import { Buses } from './Buses';
import { Trains } from './Train';

const Search = ({currentFeature}) => {
    
    return (
        <>
            {currentFeature === "Flights" ? <Flight/>:
            currentFeature === "Hotels" ? <Hotel/>:
            currentFeature === "Buses" ? <Buses/>:
            // currentFeature === "Taxi" ? <Taxi/>:
            currentFeature === "Trains" ? <Trains/>:
            // currentFeature === "Insurance" ? <Insurance/>:
            ""
            }
        </>
    );
};

export default Search;