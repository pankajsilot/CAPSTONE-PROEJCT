import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotel.css';

export const Hotel = () => {
    const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    if(city == "" || checkIn == "" || checkOut == "" ) {
        alert("Please fill all the fields");
        return;
    }
    navigate(`/hotel-booking?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`);
  };

  return (
    <div className="search">
            
    <div className="search-form">

        <div className="search-field">
            <label className="search-label">City Name</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} className="search-input" type="text" placeholder="Mumbai" />
        </div>

        <div className="search-field">
            <label className="search-label">Check-in</label>
            <input value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="search-input" type="date" />
        </div>

        <div className="search-field">
            <label className="search-label">Check-out</label>
            <input value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="search-input" type="date" />
        </div>

        <div className="search-field">
            <label className="search-label">Adults</label>
            <select value={adults} onChange={(e) => setAdults(e.target.value)} className="search-select">
                <option className="search-option">1</option>
                <option className="search-option">2</option>
                <option className="search-option">3</option>
                <option className="search-option">4</option>
            </select>
        </div>

        <div className="search-field">
            <label className="search-label">Children</label>
            <input value={children} onChange={(e) => setChildren(e.target.value)} className="search-input" type="number" min="0" />
        </div>

        <div className="search-field">
            <label className="search-label">Rooms</label>
            <input value={rooms} onChange={(e) => setRooms(e.target.value)} className="search-input" type="number" min="1" />
        </div>
    </div>

    <div className="search-button-container">
        <button onClick={handleSearch} className="search-button" type="submit">Search Hotel</button>
    </div>

</div>
  )
}