import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotel.css';

export const Buses = () => {
    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = () => {
        if(from == "" || to == "" || date == "") {
            alert("Please fill all the fields");
            return;
        }
        navigate(`/bus-booking?from=${from}&to=${to}&date=${date}`);
    };

  return (
    <div className="search">
            
    <div className="search-form">

        <div className="search-field">
            <label className="search-label">From</label>
            <input value={from} onChange={(e) => setFrom(e.target.value)} className="search-input" type="text" placeholder="Mumbai" />
        </div>

        <div className="search-field">
            <label className="search-label">To</label>
            <input value={to} onChange={(e) => setTo(e.target.value)} className="search-input" type="text" placeholder="Delhi" />
        </div>

        <div className="search-field">
            <label className="search-label">Date</label>
            <input value={date} onChange={(e) => setDate(e.target.value)} className="search-input" type="date" />
        </div>

    </div>

    <div className="search-button-container">
        <button onClick={handleSearch} className="search-button" type="submit">Search Buses</button>
    </div>

</div>
  )
}