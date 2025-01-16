import React, { useEffect, useState } from "react";
import "./trainBooking.css";
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import { Payment } from "../Payment/Payment";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TrainBooking = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    const [fromNew, setFromNew] = useState(from);
    const [toNew, setToNew] = useState(to);
    const [dateNew, setDateNew] = useState(date);
    const [trainClass, setTrainClass] = useState('AC');
    const [trainDetails, setTrainDetails] = useState([]);

    useEffect(() => {
        setTrainDetails(generateRandomTrainDetails());
    }, []);

    const handleSearch = () => {
        setTrainDetails(generateRandomTrainDetails());
        navigate(`/train-booking?from=${fromNew}&to=${toNew}&date=${dateNew}&class=${trainClass}`);
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

    // Function to generate random train details
    const generateRandomTrainDetails = () => {
        const trainNames = ["Train A", "Train B", "Train C", "Train D", "Train E", "Train F", "Train G"];
        const trainTypes = ["Sleeper", "Non AC", "AC", "Sleeper", "Non AC", "AC", "Non AC"];
        const durations = ["2h 30m", "3h 15m", "1h 45m", "4h 0m", "2h 50m", "3h 30m", "1h 30m"];
        const prices = [200, 300, 150, 400, 250, 350, 450];
        const trainAvailability = [{
            trainAvailability: "Available",
            trainSeatsAvailable: "10",
            trainType: "Sleeper",
            price: 220,
        },{
            trainAvailability: "Not Available",
            trainSeatsAvailable: "Not Available",
            trainType: "2A",
            price: 340,
        },{
            trainAvailability: "Available",
            trainSeatsAvailable: "5",
            trainType: "3A",
            price: 560,
        },];

        const randomIndex = Math.floor(Math.random() * trainNames.length);
        return Array.from({ length: 7 }, (_, index) => ({
            name: trainNames[(randomIndex + index) % trainNames.length],
            type: trainTypes[(randomIndex + index) % trainTypes.length],
            duration: durations[(randomIndex + index) % durations.length],
            price: prices[(randomIndex + index) % prices.length],
            startPlace: from,
            endPlace: to,
            trainAvailability
        }));
    };

    return (
        <div className="train-booking">

            <SecondaryHeader />

            <div className="train-booking-container">
                {/* Form for departure details */}
                <div className="train-departure-form">
                    {/* <div className="form-group">
                        <label>Type</label>
                        <select>
                        <option>One way</option>
                        <option>Round trip</option>
                        </select>
                    </div> */}
                    <div className="train-form-group">
                        <label className="train-form-label">From</label>
                        <input value={fromNew} onChange={handleFromChange} type="text" placeholder={from} />
                    </div>
                    <div className="train-form-group">
                        <label className="train-form-label">To</label>
                        <input value={toNew} onChange={handleToChange} type="text" placeholder={to} />
                    </div>
                    <div className="train-form-group">
                        <label className="train-form-label">Date</label>
                        <input value={dateNew} onChange={handleDateChange} type="text" placeholder={date} />
                    </div>
                    <button onClick={handleSearch} type="submit" className="train-search-button">
                        Search Trains
                    </button>
                </div>

                {/* Bus details section */}
                <div className="train-details">
                    <div className="train-title">
                        Trains from {from} to {to}
                    </div>
                    {trainDetails.map((train, index) => (
                        <div key={index} className="train-item">
                            
<div className="train-item-container">


                            <div className="train-logo-container">
                                {/* <img
                                    className="train-logo"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtccsh-outJ3fT8Y2um0kU9jNgOEzWgkGccA&s"
                                    alt="Bus Logo"
                                /> */}
                                <div className="train-info-container">
                                    <p className="train-name">{train.name}</p>
                                    <p className="train-number">{train.type}</p>
                                </div>
                            </div>
                            <div className="train-start-time-container">
                                <p className="train-start-time">{train.duration}</p>
                                <p className="train-start-place">{from}</p>
                            </div>
                            <div className="train-duration-container">
                                <p className="train-duration-title">Duration</p>
                                <p className="train-duration">{train.duration}</p>
                            </div>
                            <div className="train-end-time-container">
                                <p className="train-end-time">{train.duration}</p>
                                <p className="train-end-place">{to}</p>
                            </div>
                            <div className="train-price-container">
                                <p className="train-price-title">Price</p>
                                <p className="train-price-data">₹{train.price}</p>
                            </div>
                            <div className="train-pay-button-container">
                                <Payment type={"train"} bookingDetails={train} price={train.price}/>
                            </div>
</div>

<div className="train-item-divider-container">
                    {train.trainAvailability.map((trainAvailability, index) => (
                        <div key={index} style={{ border: trainAvailability.trainAvailability == "Available" ? '2px solid green' : ''}} className="train-item-divider">
                            <div className="train-item-type">Train Type: {trainAvailability.trainType}</div>
                            <div className="train-availability">Train Availability: {trainAvailability.trainAvailability}</div>
                            <div className="train-additional-info">Seats Available: {trainAvailability.trainSeatsAvailable}</div>
                        </div>
                    ))}
                </div>


                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default TrainBooking;
