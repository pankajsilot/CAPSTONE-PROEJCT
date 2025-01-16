import React, { useEffect, useState } from 'react';
import './FrontPage.css';
import Search from './Search/Search';
import BookingMenu from './BookingMenu/BookingMenu';
import UserInfo from './UserInfo/UserInfo';
import { Information } from './information/information';
import { Footer } from '../Footer/Footer';

const FrontPage = () => {

    const [currentFeature, setCurrentFeature] = useState("Flights");

    const backgroundImage = {
        "Flights": {
            img: "https://i.pinimg.com/originals/3f/00/4f/3f004fbd0825ffbd4b9b11656a38f451.gif",
            text: "Flight image"
        },
        "Hotels": {
            img: "https://media.cntraveler.com/photos/66e9ce22b3baa65ddc194107/16:9/w_3488,h_1962,c_limit/Top%20Hotels%20in%20New%20York%20City-RCA%202024_00-Lede.gif",
            test: "Hotel image"
        },
        "Cabs": {
            img: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?cs=srgb&dl=pexels-asadphoto-1268855.jpg&fm=jpg",
            text: "Cabs image"
        },
        "Buses": {
            img: "https://media.tenor.com/VSAiRiVOhGwAAAAM/udaariyaan-fatejo.gif",
            text: "Buses image"
        },
        "Trains": {
            img: "https://i.pinimg.com/originals/41/f2/25/41f225cba1e300d86f89ab1377efc65a.gif",
            text: "trains image"
        }
    }

    console.log(currentFeature);

    return (
        <div className="front-page">
            {/* <div className="front-page-user-info"><UserInfo/></div> */}
            <div style={{backgroundImage: `url(${backgroundImage[currentFeature]?.img})`}} className="front-page-content">
                <div className='booking-menu-section'>
                    <BookingMenu setSelectedItemProp={setCurrentFeature} />
                </div>
                <div className='front-page-search-section'>
                    <Search currentFeature={currentFeature} />
                </div>
            </div>

            <Information/>

            <Footer/>

        </div>
    );
};

export default FrontPage;