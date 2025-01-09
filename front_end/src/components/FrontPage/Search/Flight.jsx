import React, { useState } from 'react';
import './Flight.css';
import { useNavigate } from 'react-router-dom';

const Flight = () => {

    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departure, setDeparture] = useState('');
    const [flightClass, setFlightClass] = useState('Economy');

    const handleFromChange = (e) => {
        setFrom(e.target.value);
    }

    const handleToChange = (e) => {
        setTo(e.target.value);
    }

    const handleDepartureChange = (e) => {
        setDeparture(e.target.value);
    }

    const handleFlightClassChange = (e) => {
        setFlightClass(e.target.value);
    }

    const handleSearch = () => {
        if(from == "" || to == "" || departure == "" || flightClass == "") {
            alert("Please fill all the fields");
            return;
        }
        console.log(from, to, departure, flightClass);
        navigate(`/flight-booking?from=${from}&to=${to}&departure=${departure}&flightClass=${flightClass}`);
    }

    return (
        <div className="search">
            
            <form className="search-form">

                <div className="search-field">
                    <label className="search-label">From</label>
                    <input value={from} onChange={handleFromChange} className="search-input" type="text" placeholder="Mumbai" />
                </div>

                <div className="search-field">
                    <label className="search-label">To</label>
                    <input value={to} onChange={handleToChange} className="search-input" type="text" placeholder="New Delhi" />
                </div>

                <div className="search-field">
                    <label className="search-label">Departure</label>
                    <input value={departure} onChange={handleDepartureChange} className="search-input" type="date" />
                </div>

                <div className="search-field">
                    <label className="search-label">Class</label>
                    <select value={flightClass} onChange={handleFlightClassChange} className="search-select">
                        <option className="search-option">Economy</option>
                        <option className="search-option">Business</option>
                    </select>
                </div>
            </form>

            <div className="search-button-container">
                <button onClick={handleSearch} className="search-button" type="submit">Search Flight</button>
            </div>

        </div>
    );
};

export default Flight;