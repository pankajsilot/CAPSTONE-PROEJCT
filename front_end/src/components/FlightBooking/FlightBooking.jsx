import React, { useEffect, useState } from "react";
import "./FlightBooking.css";
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import { Payment } from "../Payment/Payment";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { SearchBox } from "./searchbox";

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

    useEffect(() => {
        handleSelect();
    }, [from,to]);

    const [data, setData ] = useState([]);

    const handleSelect = async () => {
            const data = await fetch(
              `http://api.aviationstack.com/v1/flights?limit=100&dep_iata=${from}&arr_iata=${to}&access_key=89feda8620b7905d1b2836c9d6f1f5b6`);
            let ans = await data.json();
            ans = ans.data;
            console.log(ans,"dfgh")
            if (ans.length === 0) {
            //   alert("No planes are available");
            } else {
              setData(ans);
            }
      };

    // Function to generate random flight details
    const generateRandomFlightDetails = () => {
        const flightNames = ["Flight A", "Flight B", "Flight C", "Flight D", "Flight E", "Flight F", "Flight G"];
        const flightNumbers = ["AA123", "BB456", "CC789", "DD012", "EE345", "FF678", "GG901"];
        const durations = ["2h 30m", "3h 15m", "1h 45m", "4h 0m", "2h 50m", "3h 30m", "1h 30m"];
        const startTime = ["10:00 AM", "11:30 AM", "12:45 PM", "2:00 PM", "3:15 PM", "4:30 PM", "5:45 PM"];

        const prices = [2000, 3000, 1500, 4500, 2500, 3500, 4500];

        const randomIndex = Math.floor(Math.random() * flightNames.length);
        return Array.from({ length: 7 }, (_, index) => ({
            name: flightNames[(randomIndex + index) % flightNames.length],
            number: flightNumbers[(randomIndex + index) % flightNumbers.length],
            startTime: startTime[(randomIndex + index) % startTime.length],
            duration: durations[(randomIndex + index) % durations.length],
            price: prices[(randomIndex + index) % prices.length],
            startPlace: from,
            endPlace: to,
        }));
    };

    const calculateEndTime = (start, duration) => {
        const [startHour, startMinute] = start.split(':').map((time, index) => index === 0 ? parseInt(time) : parseInt(time.split(' ')[0]));
        const isPM = start.includes('PM');
        const totalStartMinutes = (isPM && startHour !== 12 ? startHour + 12 : startHour) * 60 + startMinute;

        const [durationHours, durationMinutes] = duration.split('h').map((time, index) => index === 0 ? parseInt(time) : parseInt(time));
        const totalDurationMinutes = durationHours * 60 + durationMinutes;

        const endMinutes = totalStartMinutes + totalDurationMinutes;
        const endHour = Math.floor(endMinutes / 60) % 24;
        const endMinute = endMinutes % 60;
        const endPeriod = endHour >= 12 ? 'PM' : 'AM';
        const formattedEndHour = endHour % 12 === 0 ? 12 : endHour % 12;

        return `${formattedEndHour}:${endMinute < 10 ? '0' + endMinute : endMinute} ${endPeriod}`;
    };

    return (
        <div className="flight-booking">

            <SecondaryHeader />

            <div className="flight-booking-container">
                {/* Form for departure details */}
                <div className="departure-form">
                    <div className="form-group">
                        <label className="flight-label">From</label>
                        <input value={fromNew} onChange={handleFromChange} type="text" placeholder={from} />
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <input value={toNew} onChange={handleToChange} type="text" placeholder={to} />
                    </div>
                    <div className="form-group">
                        <label className="flight-label">Class</label>
                        <select value={flightClassNew} onChange={handleFlightClassChange}>
                        <option>{flightClass}</option>
                        <option>Economy</option>
                        <option>Business</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="flight-label">Departure</label>
                        <input value={departureNew} onChange={handleDepartureChange} type="text" placeholder={departure} />
                    </div>
                    <button onClick={handleSearch} type="submit" className="search-button">
                        Search Flight
                    </button>
                </div>

                {/* <SearchBox handleSelect={handleSelect}/> */}

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
                            <div className="flight-start-time-container common-container">
                                <p className="flight-start-time">{flight.startTime}</p>
                                <p className="flight-start-place">{from}</p>
                            </div>
                            <div className="flight-line"></div>
                            <div className=" common-container">
                                <p className="flight-duration-title">Duration</p>
                                <p className="flight-duration">{flight.duration}</p>
                            </div>
                            <div className="flight-line"></div>
                            <div className="flight-end-time-container common-container">
                                <p className="flight-end-time">{calculateEndTime(flight.startTime, flight.duration)}</p>
                                <p className="flight-end-place">{to}</p>
                            </div>
                            <div className="flight-price-container common-container">
                                <p className="flight-price-title">Price</p>
                                <p className="flight-price-data">₹.{flight.price}</p>
                            </div>
                            <div className="flight-pay-button-container common-container">
                                <Payment type={"flight"} bookingDetails={flight} price={flight.price}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default FlightBooking;
