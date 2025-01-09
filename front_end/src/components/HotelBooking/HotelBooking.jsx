import React, { useEffect, useState } from "react";
import "./HotelBooking.css";
import SecondaryHeader from "../SecondaryHeader/secondaryHeader";
import { Payment } from "../Payment/Payment";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HotelBooking = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const city = searchParams.get("city");
    const checkIn = searchParams.get("checkIn");
    const checkOut = searchParams.get("checkOut");
    const adults = searchParams.get("adults");
    const children = searchParams.get("children");
    const rooms = searchParams.get("rooms");

    const [cityNew, setCityNew] = useState(city);
    const [checkInNew, setCheckInNew] = useState(checkIn);
    const [checkOutNew, setCheckOutNew] = useState(checkOut);
    const [adultsNew, setAdultsNew] = useState(adults);
    const [childrenNew, setChildrenNew] = useState(children);
    const [roomsNew, setRoomsNew] = useState(rooms);
    const [hotelDetails, setHotelDetails] = useState([]);

    useEffect(() => {
        setHotelDetails(generateRandomHotelDetails());
    }, []);

    const handleSearch = () => {
        setHotelDetails(generateRandomHotelDetails());
        navigate(`/hotel-booking?city=${cityNew}&checkIn=${checkInNew}&checkOut=${checkOutNew}&adults=${adultsNew}&children=${childrenNew}&rooms=${roomsNew}`);
    }

    const handleCityChange = (e) => {
        setCityNew(e.target.value);
    }

    const handleCheckInChange = (e) => {
        setCheckInNew(e.target.value);
    }

    const handleCheckOutChange = (e) => {
        setCheckOutNew(e.target.value);
    }

    // Function to generate random flight details
    const generateRandomHotelDetails = () => {
        const hotelNames = ["Hotel A", "Hotel B", "Hotel C", "Hotel D", "Hotel E", "Hotel F", "Hotel G"];
        const hotelNumbers = ["AA123", "BB456", "CC789", "DD012", "EE345", "FF678", "GG901"];
        const prices = [2000, 3000, 1500, 4000, 2500, 3500, 4500];
        const ratings = [4.5, 4.2, 4.8, 4.3, 4.7, 4.1, 4.9];
        const specialities = ["Free Wifi, Free Parking", "Free Wifi, Free Parking, Free Breakfast", "Free Wifi, Free Breakfast", "Free Wifi", "Free Wifi, Free Parking", "Free Wifi, Free Breakfast", "Free Parking, Free Breakfast"];
        const breakfast = ["Yes", "No", "Yes", "No", "Yes", "No", "Yes"];
        const image = ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/620719916.webp","https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg","https://instatravelstyle.com/wp-content/uploads/2023/09/blog-pst.jpg","https://www.ihcltata.com/content/dam/luxury/hotels/Taj_Lands_End_Mumbai/images/4x3/R&S_WOGLI_Exterior-Master.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oJr8oZY0uNl5esuMyJSXHOLlFXaNeL5fw&s","https://www.princehotels.com/tokyo/wp-content/uploads/sites/9/2024/12/%E3%82%A2%E3%83%83%E3%83%91%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%83%84%E3%82%A4%E3%83%B3%E3%83%AB%E3%83%BC%E3%83%A0%E2%9E%81_0702-1920x900-1.jpg","https://www.orient-express.com/wp-content/uploads/2024/12/JUNIOR-SUITE_209_-Bedroom-scaled.jpg","https://wallpapers.com/images/featured/hotel-background-sdr508awonqxixqe.jpg"]

        const randomIndex = Math.floor(Math.random() * hotelNames.length);
        return Array.from({ length: 7 }, (_, index) => ({
            name: hotelNames[(randomIndex + index) % hotelNames.length],
            number: hotelNumbers[(randomIndex + index) % hotelNumbers.length],
            price: prices[(randomIndex + index) % prices.length],
            rating: ratings[(randomIndex + index) % ratings.length],
            speciality: specialities[(randomIndex + index) % specialities.length],
            breakfast: breakfast[(randomIndex + index) % breakfast.length],
            image: image[(randomIndex + index) % image.length],
        }));
    };

    return (
        <div className="hotel-booking">

            <SecondaryHeader />

            <div className="hotel-booking-container">
                {/* Form for departure details */}
                <div className="hotel-form">
                    {/* <div className="form-group">
                        <label>Type</label>
                        <select>
                        <option>One way</option>
                        <option>Round trip</option>
                        </select>
                    </div> */}
                    <div className="hotel-form-group">
                        <label className="hotel-form-label">Location</label>
                        <input className="hotel-form-input" value={cityNew} onChange={handleCityChange} type="text" placeholder={city} />
                    </div>
                    <div className="hotel-form-group">
                        <label className="hotel-form-label">Check In</label>
                        <input className="hotel-form-input" value={checkInNew} onChange={handleCheckInChange} type="text" placeholder={checkIn} />
                    </div>

                    <div className="hotel-form-group">
                        <label className="hotel-form-label">Check Out</label>
                        <input className="hotel-form-input" value={checkOutNew} onChange={handleCheckOutChange} type="text" placeholder={checkOut} />
                    </div>
                    <button onClick={handleSearch} type="submit" className="hotel-search-button">
                        Search Hotel
                    </button>
                </div>

                {/* Flight details section */}
                <div className="hotel-details">
                    <div className="hotel-title">
                        Hotels in {city}
                    </div>
                    {hotelDetails.map((hotel, index) => (
                        <div key={index} className="hotel-item">

                            <div className="hotel-logo-container">
                                <img src={hotel.image} alt="Hotel room logo" />
                            </div>

                            <div className="hotel-info-container">
                                <p className="hotel-name">{hotel.name}</p>
                                <p className="hotel-rating">Rating: {hotel.rating ?? "4.5"}</p>
                                <p className="hotel-speciality">
                                    <span className="hotel-speciality-title">Speciality: </span>
                                    <span className="hotel-speciality-data">{hotel.speciality ?? "Free Wifi, Free Parking, Free Breakfast"}</span>
                                </p>
                                <p className="hotel-breakfast">Breakfast: {hotel.breakfast ?? "Yes"}</p>
                                <p className="hotel-location">Location: {city ?? cityNew}</p>
                            </div>

                            <div className="hotel-price-container">
                                <p className="hotel-price-title">Price: ₹{hotel.price}</p>
                                {/* <p className="hotel-price-data">₹.{hotel.price}</p> */}
                                <button className="hotel-pay-button"><Payment price={hotel.price} /></button>
                            </div>
{/* 

                            <div className="hotel-logo-container">
                                <img
                                    className="hotel-logo"
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/620719916.webp?k=616cefe723433fd501f4fe89c7f415ce49822b10d769c7a725f8e35b39be66af&o="
                                    alt="Hotel room logo"
                                />
                            </div>
                            <div className="hotel-info-container">
                                    <p className="hotel-name">{hotel.name}</p>
                                    <p className="hotel-number">{hotel.number}</p>
                                </div>
                            <div className="hotel-start-time-container">
                                <p className="hotel-start-time">{hotel.duration}</p>
                                <p className="hotel-start-place">{city}</p>
                            </div>
                            <div className="hotel-duration-container">
                                <p className="hotel-duration-title">Duration</p>
                                <p className="flight-duration">{hotel.duration}</p>
                            </div>
                            <div className="hotel-price-container">
                                <p className="hotel-price-title">Price</p>
                                <p className="hotel-price-data">₹.{hotel.price}</p>
                            </div>
                            <div className="hotel-pay-button-container">
                                <Payment price={hotel.price}/>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default HotelBooking;