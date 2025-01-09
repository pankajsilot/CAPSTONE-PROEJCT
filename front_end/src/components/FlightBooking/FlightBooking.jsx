import React, { useEffect, useState } from "react";
import "./FlightBooking.css";
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import { Payment } from "../Payment/Payment";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FlightBooking = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const departure = searchParams.get("departure");
    const flightClass = searchParams.get("flightClass");

    const [flightClassNew, setFlightClassNew] = useState(flightClass);
    const [fromNew, setFromNew] = useState(from);
    const [toNew, setToNew] = useState(to);
    const [departureNew, setDepartureNew] = useState(departure);
    const [flightDetails, setFlightDetails] = useState([]);

    useEffect(() => {
        setFlightDetails(generateRandomFlightDetails());
    }, []);

    const handleSearch = () => {
        setFlightDetails(generateRandomFlightDetails());
        navigate(`/flight-booking?from=${fromNew}&to=${toNew}&departure=${departureNew}&flightClass=${flightClassNew}`);
    }

    const handleFlightClassChange = (e) => {
        setFlightClassNew(e.target.value);
    }

    const handleFromChange = (e) => {
        setFromNew(e.target.value);
    }

    const handleToChange = (e) => {
        setToNew(e.target.value);
    }

    const handleDepartureChange = (e) => {
        setDepartureNew(e.target.value);
    }

    // Function to generate random flight details
    const generateRandomFlightDetails = () => {
        const flightNames = ["Flight A", "Flight B", "Flight C", "Flight D", "Flight E", "Flight F", "Flight G"];
        const flightNumbers = ["AA123", "BB456", "CC789", "DD012", "EE345", "FF678", "GG901"];
        const durations = ["2h 30m", "3h 15m", "1h 45m", "4h 0m", "2h 50m", "3h 30m", "1h 30m"];
        const prices = [200, 300, 150, 400, 250, 350, 450];

        const randomIndex = Math.floor(Math.random() * flightNames.length);
        return Array.from({ length: 7 }, (_, index) => ({
            name: flightNames[(randomIndex + index) % flightNames.length],
            number: flightNumbers[(randomIndex + index) % flightNumbers.length],
            duration: durations[(randomIndex + index) % durations.length],
            price: prices[(randomIndex + index) % prices.length],
            startPlace: from,
            endPlace: to,
        }));
    };

    return (
        <div className="flight-booking">

            <SecondaryHeader />

            <div className="flight-booking-container">
                {/* Form for departure details */}
                <div className="departure-form">
                    {/* <div className="form-group">
                        <label>Type</label>
                        <select>
                        <option>One way</option>
                        <option>Round trip</option>
                        </select>
                    </div> */}
                    <div className="form-group">
                        <label>From</label>
                        <input value={fromNew} onChange={handleFromChange} type="text" placeholder={from} />
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <input value={toNew} onChange={handleToChange} type="text" placeholder={to} />
                    </div>
                    <div className="form-group">
                        <label>Class</label>
                        <select value={flightClassNew} onChange={handleFlightClassChange}>
                        <option>{flightClass}</option>
                        <option>Economy</option>
                        <option>Business</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Departure</label>
                        <input value={departureNew} onChange={handleDepartureChange} type="text" placeholder={departure} />
                    </div>
                    <button onClick={handleSearch} type="submit" className="search-button">
                        Search Flight
                    </button>
                </div>

                {/* Flight details section */}
                <div className="flight-details">
                    <div className="flight-title">
                        Flights from {from} to {to}
                    </div>
                    {flightDetails.map((flight, index) => (
                        <div key={index} className="flight-item">
                            <div className="flight-logo-container">
                                <img
                                    className="flight-logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtccsh-outJ3fT8Y2um0kU9jNgOEzWgkGccA&s"
                                    alt="Flight Logo"
                                />
                                <div className="flight-info-container">
                                    <p className="flight-name">{flight.name}</p>
                                    <p className="flight-number">{flight.number}</p>
                                </div>
                            </div>
                            <div className="flight-start-time-container">
                                <p className="flight-start-time">{flight.duration}</p>
                                <p className="flight-start-place">{from}</p>
                            </div>
                            <div className="flight-duration-container">
                                <p className="flight-duration-title">Duration</p>
                                <p className="flight-duration">{flight.duration}</p>
                            </div>
                            <div className="flight-end-time-container">
                                <p className="flight-end-time">{flight.duration}</p>
                                <p className="flight-end-place">{to}</p>
                            </div>
                            <div className="flight-price-container">
                                <p className="flight-price-title">Price</p>
                                <p className="flight-price-data">₹.{flight.price}</p>
                            </div>
                            <div className="flight-pay-button-container">
                                <Payment price={flight.price}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default FlightBooking;
