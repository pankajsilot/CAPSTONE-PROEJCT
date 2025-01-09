import React, { useEffect, useState } from 'react';
import './BookingMenu.css';

function BookingMenu({setSelectedItemProp}) {
    const [selectedItem, setSelectedItem] = useState("Flights");

    useEffect(() => {
        setSelectedItemProp(selectedItem);
    }, [selectedItem]);

    const items = [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHFSAPb2UpNuRtsUfe56-jSeQHuWwINdD2rxVlbzWd1BGRmU1oNc3-Ng-WxcymSrWzo0&usqp=CAU', text: 'Flights' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNucOMyVS0Q2ikZNqVOygUMTmlBYZfmhCXfQ&s', text: 'Hotels' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__xeS3qtf6xkFrpoqO0_b2P7sIY8g88DNkA&s', text: 'Buses' },
        // { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSscoUPvM4WMuc9L8aPf7lYYyJFoVHM3WKVA&s', text: 'Taxi' },
        { image: 'https://www.svgrepo.com/show/341210/train-profile.svg', text: 'Trains' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ51Sn6PkEoKduxgqPvXLTWhXQFsnXobitDA&s', text: 'Insurance' },
    ];
    return (
    <div className="booking-menu">
            {items.map((item, index) => (
                <div className={`menu-item`} key={index} onClick={() => setSelectedItem(item.text)}>
                    <img style={{scale: selectedItem === item.text ? '1.2' : '1', outline: selectedItem === item.text ? '1px solid white' : 'none',outlineOffset: '2px'}} className="menu-item-image" src={item.image} alt={item.text} />
                    <span style={{fontSize: selectedItem === item.text ? '1.1rem' : '1rem', textDecoration: selectedItem === item.text ? 'underline' : 'none'}} className="menu-item-text">{item.text}</span>
                </div>
            ))}
        </div>
    );
}

export default BookingMenu;
