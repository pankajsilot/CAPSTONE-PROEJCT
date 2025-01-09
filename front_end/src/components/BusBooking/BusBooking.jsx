import React, { useEffect, useState } from "react";
import "./BusBooking.css";
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import { Payment } from "../Payment/Payment";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BusBooking = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    const [fromNew, setFromNew] = useState(from);
    const [toNew, setToNew] = useState(to);
    const [dateNew, setDateNew] = useState(date);
    const [busDetails, setBusDetails] = useState([]);

    useEffect(() => {
        setBusDetails(generateRandomBusDetails());
    }, []);

    const handleSearch = () => {
        setBusDetails(generateRandomBusDetails());
        navigate(`/bus-booking?from=${fromNew}&to=${toNew}&date=${dateNew}`);
    }


    const handleFromChange = (e) => {
        setFromNew(e.target.value);
    }

    const handleToChange = (e) => {
        setToNew(e.target.value);
    }

    const handleDateChange = (e) => {
        setDateNew(e.target.value);
    }

    // Function to generate random bus details
    const generateRandomBusDetails = () => {
        const busNames = ["Bus A", "Bus B", "Bus C", "Bus D", "Bus E", "Bus F", "Bus G"];
        const busNumbers = ["A/C Sleeper (2+1)", "Bharat Benz A/C Seater /Sleeper (2+1)", "Non A/C Seater / Sleeper (2+1)", "A/C Sleeper (2+1)", "Non A/C Seater / Sleeper (2+1)", "A/C Sleeper (2+1)", "Non A/C Sleeper (2+1)"];
        const durations = ["2h 30m", "3h 15m", "1h 45m", "4h 0m", "2h 50m", "3h 30m", "1h 30m"];
        const prices = [200, 300, 150, 400, 250, 350, 450];

        const randomIndex = Math.floor(Math.random() * busNames.length);
        return Array.from({ length: 7 }, (_, index) => ({
            name: busNames[(randomIndex + index) % busNames.length],
            number: busNumbers[(randomIndex + index) % busNumbers.length],
            duration: durations[(randomIndex + index) % durations.length],
            price: prices[(randomIndex + index) % prices.length],
            startPlace: from,
            endPlace: to,
        }));
    };

    return (
        <div className="bus-booking">

            <SecondaryHeader />

            <div className="bus-booking-container">
                {/* Form for departure details */}
                <div className="bus-departure-form">
                    {/* <div className="form-group">
                        <label>Type</label>
                        <select>
                        <option>One way</option>
                        <option>Round trip</option>
                        </select>
                    </div> */}
                    <div className="bus-form-group">
                        <label>From</label>
                        <input value={fromNew} onChange={handleFromChange} type="text" placeholder={from} />
                    </div>
                    <div className="bus-form-group">
                        <label>To</label>
                        <input value={toNew} onChange={handleToChange} type="text" placeholder={to} />
                    </div>
                    <div className="bus-form-group">
                        <label>Date</label>
                        <input value={dateNew} onChange={handleDateChange} type="text" placeholder={date} />
                    </div>
                    <button onClick={handleSearch} type="submit" className="bus-search-button">
                        Search Buses
                    </button>
                </div>

                {/* Bus details section */}
                <div className="bus-details">
                    <div className="bus-title">
                        Buses from {from} to {to}
                    </div>
                    {busDetails.map((bus, index) => (
                        <div key={index} className="bus-item">
                            <div className="bus-logo-container">
                                {/* <img
                                    className="bus-logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtccsh-outJ3fT8Y2um0kU9jNgOEzWgkGccA&s"
                                    alt="Bus Logo"
                                /> */}
                                <div className="bus-info-container">
                                    <p className="bus-name">{bus.name}</p>
                                    <p className="bus-number">{bus.number}</p>
                                </div>
                            </div>
                            <div className="bus-start-time-container">
                                <p className="bus-start-time">{bus.duration}</p>
                                <p className="bus-start-place">{from}</p>
                            </div>
                            <div className="bus-duration-container">
                                <p className="bus-duration-title">Duration</p>
                                <p className="bus-duration">{bus.duration}</p>
                            </div>
                            <div className="bus-end-time-container">
                                <p className="bus-end-time">{bus.duration}</p>
                                <p className="bus-end-place">{to}</p>
                            </div>
                            <div className="bus-price-container">
                                <p className="bus-price-title">Price</p>
                                <p className="bus-price-data">₹{bus.price}</p>
                            </div>
                            <div className="bus-pay-button-container">
                                <Payment price={bus.price}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default BusBooking;
