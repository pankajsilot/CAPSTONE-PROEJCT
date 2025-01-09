import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotel.css';

export const Trains = () => {
    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [trainClass, setTrainClass] = useState('AC');
    
    const handleSearch = () => {
        if(from == "" || to == "" || date == "" || trainClass == "") {
            alert("Please fill all the fields");
            return;
        }
        navigate(`/train-booking?from=${from}&to=${to}&date=${date}&class=${trainClass}`);
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

        <div className="search-field">
            <label className="search-label">Class</label>
            <select className="search-input" value={trainClass} onChange={(e) => setTrainClass(e.target.value)}>
                <option value="AC">AC</option>
                <option value="Sleeper">Sleeper</option>
                <option value="Second Sitting">Second Sitting</option>
            </select>
        </div>

    </div>

    <div className="search-button-container">
        <button onClick={handleSearch} className="search-button" type="submit">Search Trains</button>
    </div>

</div>
  )
}