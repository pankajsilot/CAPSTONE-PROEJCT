import React, { useState } from "react";
import "./secondaryHeader.css";
import { useNavigate } from "react-router-dom";

const SecondaryHeader = () => {
    
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState("Flights");

    const items = [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHFSAPb2UpNuRtsUfe56-jSeQHuWwINdD2rxVlbzWd1BGRmU1oNc3-Ng-WxcymSrWzo0&usqp=CAU', text: 'Flights' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNucOMyVS0Q2ikZNqVOygUMTmlBYZfmhCXfQ&s', text: 'Hotels' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__xeS3qtf6xkFrpoqO0_b2P7sIY8g88DNkA&s', text: 'Buses' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSscoUPvM4WMuc9L8aPf7lYYyJFoVHM3WKVA&s', text: 'Taxi' },
        { image: 'https://www.svgrepo.com/show/341210/train-profile.svg', text: 'Trains' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ51Sn6PkEoKduxgqPvXLTWhXQFsnXobitDA&s', text: 'Insurance' },
    ];

  return (
    <div className="secondary-header">
       
        <div className="secondary-header-header">
            <h2 className="secondary-header-header-title" onClick={() => navigate('/services')}>{'⬅ Back'}</h2>
            {/* Navbar with buttons */}
            <div className="secondary-header-navbar">
                {items.map((item, index) => (
                    <div className="secondary-header-navbar-item" key={index} onClick={() => navigate(`/services`)}>
                        <img className="secondary-header-navbar-item-image" src={item.image} alt={item.text} />
                        <span className="secondary-header-navbar-item-text">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SecondaryHeader;