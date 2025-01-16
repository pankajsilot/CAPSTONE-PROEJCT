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
    // const [hotelDetails, setHotelDetails] = useState([]);

    // useEffect(() => {
    //     setHotelDetails(generateRandomHotelDetails());
    // }, []);

    const handleSearch = () => {
        // setHotelDetails(generateRandomHotelDetails());
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

    const hotelDetailsNew = [
        {
            name: "Hotel A",
            number: "AA123",
            price: 2000,
            rating: 4.5,
            speciality: "Free Wifi, Free Parking",
            breakfast: "Yes",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ0PtoyHW261-DEvmltJ2ugE27zgOS9y5YQ&s",
        },
        {
            name: "Hotel B",
            number: "BB456",
            price: 3000,
            rating: 4.2,
            speciality: "Free Wifi, Free Parking, Free Breakfast",
            breakfast: "Yes",
            image: "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        },
        {
            name: "Hotel C",
            number: "CC789",
            price: 1500,
            rating: 4.8,
            speciality: "Free Wifi, Free Breakfast",
            breakfast: "No",
            image: "https://instatravelstyle.com/wp-content/uploads/2023/09/blog-pst.jpg",
        },
        {
            name: "Hotel D",
            number: "DD012",
            price: 3500,
            rating: 4.6,
            speciality: "Free Wifi, Free Parking",
            breakfast: "Yes",
            image: "https://www.ihcltata.com/content/dam/luxury/hotels/Taj_Lands_End_Mumbai/images/4x3/R&S_WOGLI_Exterior-Master.jpg",
        },
        {
            name: "Hotel E",
            number: "EE345",
            price: 2500,
            rating: 4.4,
            speciality: "Free Wifi, Free Parking",
            breakfast: "No",
            image: "https://www.princehotels.com/tokyo/wp-content/uploads/sites/9/2024/12/%E3%82%A2%E3%83%83%E3%83%91%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%83%84%E3%82%A4%E3%83%B3%E3%83%AB%E3%83%BC%E3%83%A0%E2%9E%81_0702-1920x900-1.jpg",
        },
        {
            name: "Hotel F",
            number: "FF678",
            price: 4000,
            rating: 4.3,
            speciality: "Free Wifi",
            breakfast: "Yes",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oJr8oZY0uNl5esuMyJSXHOLlFXaNeL5fw&s",
        },
        {
            name: "Hotel G",
            number: "GG901",
            price: 4500,
            rating: 4.9,
            speciality: "Free Parking, Free Breakfast",
            breakfast: "Yes",
            image: "https://wallpapers.com/images/featured/hotel-background-sdr508awonqxixqe.jpg",
        }
    ]

    // Function to generate random flight details
    // const generateRandomHotelDetails = () => {
    //     const hotelNames = ["Hotel A", "Hotel B", "Hotel C", "Hotel D", "Hotel E", "Hotel F", "Hotel G"];
    //     const hotelNumbers = ["AA123", "BB456", "CC789", "DD012", "EE345", "FF678", "GG901"];
    //     const prices = [2000, 3000, 1500, 4000, 2500, 3500, 4500];
    //     const ratings = [4.5, 4.2, 4.8, 4.3, 4.7, 4.1, 4.9];
    //     const specialities = ["Free Wifi, Free Parking", "Free Wifi, Free Parking, Free Breakfast", "Free Wifi, Free Breakfast", "Free Wifi", "Free Wifi, Free Parking", "Free Wifi, Free Breakfast", "Free Parking, Free Breakfast"];
    //     const breakfast = ["Yes", "No", "Yes", "No", "Yes", "No", "Yes"];
    //     const image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ0PtoyHW261-DEvmltJ2ugE27zgOS9y5YQ&s","https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg","https://instatravelstyle.com/wp-content/uploads/2023/09/blog-pst.jpg","https://www.ihcltata.com/content/dam/luxury/hotels/Taj_Lands_End_Mumbai/images/4x3/R&S_WOGLI_Exterior-Master.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2oJr8oZY0uNl5esuMyJSXHOLlFXaNeL5fw&s","https://www.princehotels.com/tokyo/wp-content/uploads/sites/9/2024/12/%E3%82%A2%E3%83%83%E3%83%91%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%83%84%E3%82%A4%E3%83%B3%E3%83%AB%E3%83%BC%E3%83%A0%E2%9E%81_0702-1920x900-1.jpg","https://www.orient-express.com/wp-content/uploads/2024/12/JUNIOR-SUITE_209_-Bedroom-scaled.jpg","https://wallpapers.com/images/featured/hotel-background-sdr508awonqxixqe.jpg"]

    //     const randomIndex = Math.floor(Math.random() * hotelNames.length);
    //     return Array.from({ length: 7 }, (_, index) => ({
    //         name: hotelNames[(randomIndex + index) % hotelNames.length],
    //         number: hotelNumbers[(randomIndex + index) % hotelNumbers.length],
    //         price: prices[(randomIndex + index) % prices.length],
    //         rating: ratings[(randomIndex + index) % ratings.length],
    //         speciality: specialities[(randomIndex + index) % specialities.length],
    //         breakfast: breakfast[(randomIndex + index) % breakfast.length],
    //         image: image[(randomIndex + index) % image.length],
    //     }));
    // };

    return (
        <div className="hotel-booking">

            <SecondaryHeader />

            <div className="hotel-booking-container">
                <div className="hotel-form">
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
                    {hotelDetailsNew.map((hotel, index) => (
                        <div key={index} className="hotel-item">

                            <div className="hotel-logo-container">
                                <img className="hotel-logo" src={hotel.image} alt="Hotel room logo" />
                            </div>

                            <div className="hotel-info-container">
                                <div className="hotel-name">{hotel.name}</div>
                                <div className="hotel-rating">
                                    <span className="hotel-span-title">Rating: </span>
                                    <span className="hotel-rating-data">{hotel.rating ?? "4.5"}⭐</span>
                                </div>
                                <div className="hotel-speciality">
                                    <span className="hotel-span-title">Speciality: </span>
                                    <span className="hotel-speciality-data">{hotel.speciality ?? "Free Wifi, Free Parking, Free Breakfast"}</span>
                                </div>
                                <div className="hotel-breakfast">
                                    <span className="hotel-span-title">Breakfast: </span>
                                    {hotel.breakfast === "Yes" ? <span className="hotel-breakfast-yes">😋🍽️ {hotel.breakfast}</span> : <span className="hotel-breakfast-no">No</span>}
                                </div>
                                <div className="hotel-location">
                                    <span className="hotel-span-title">Location: </span>
                                    <span className="hotel-location-data">{city ?? cityNew}</span>
                                </div>
                            </div>

                            <div className="hotel-price-container">
                                <p className="hotel-price-title">Price: ₹{hotel.price}</p>
                                {/* <p className="hotel-price-data">₹.{hotel.price}</p> */}
                                <Payment type={"hotel"} bookingDetails={hotel} price={hotel.price} />
                            </div>
                        
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default HotelBooking;