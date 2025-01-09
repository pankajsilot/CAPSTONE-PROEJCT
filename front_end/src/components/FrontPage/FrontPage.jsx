import React, { useState } from 'react';
import './FrontPage.css';
import Search from './Search/Search';
import BookingMenu from './BookingMenu/BookingMenu';
import UserInfo from './UserInfo/UserInfo';

const FrontPage = () => {

    const [currentFeature, setCurrentFeature] = useState("Flights");

    return (
        <div className="front-page">
            <div className="front-page-user-info"><UserInfo/></div>
            <div className="front-page-content">
                <BookingMenu setSelectedItemProp={setCurrentFeature} />
                <Search currentFeature={currentFeature} />
            </div>
        </div>
    );
};

export default FrontPage;