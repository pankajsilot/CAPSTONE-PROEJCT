import { Footer } from "../Footer/Footer";
import "./home.css";

export const Home = () => {

  return (
    <div className="home-front">
        
        <div className="home-container">
            
            <div className="home-welcome-container animated-text">
                <div className="home-welcome">Welcome to our website</div>
                <div className="home-welcome-description">
                    <p className="home-welcome-description-item">Seamless travel planning at your fingertips. Book flights, trains, buses, taxis, and hotels all in one convenient app. Your journey starts here.</p>
                    <p className="home-welcome-description-item">Stop juggling multiple apps for your travel needs. Our all-in-one booking platform simplifies your travel experience, allowing you to easily book flights, trains, buses, taxis, and hotels from a single, intuitive interface. Find the best deals, manage your bookings, and travel with peace of mind.</p>
                </div>
            </div>

            <div className="home-image-container animated-text">
                <div className="home-image-content first"> 
                    Planning your next trip just got easier. Our comprehensive booking app brings together all your travel essentials in one place. Whether you're flying across the country, taking a scenic train journey, hopping on a bus, needing a quick taxi ride, or booking the perfect hotel stay, we've got you covered.
                </div>
                <img className="home-image-img" src="https://img.freepik.com/premium-photo/illustration-famous-monument-world_117023-16.jpg?semt=ais_hybrid" alt="" />
            </div>

            <div className="home-image-container animated-text">
                <img className="home-image-img" src="https://img.freepik.com/free-photo/top-view-frame-with-plane-sweets_23-2148487071.jpg" alt="" />
                <div className="home-image-content second"> 
                Search, compare, and book flights from major airlines worldwide to find the best deals for your trip, Secure your train tickets for seamless and relaxing rail journeys, avoiding long queues at the station.
                </div>
            </div>

            <div className="home-image-container animated-text">
                <div className="home-image-content second"> 
                Order a taxi in seconds and get picked up quickly for reliable local transportation, Find the ideal hotel for your stay, with options ranging from budget-friendly to luxurious accommodations.
                </div>
                <img className="home-image-img" src="https://img.freepik.com/premium-vector/banner-with-machine-yellow-cab-city-public-taxi-service-concept-cityscape-hotel-background-flat-vector-illustration_275421-1794.jpg" alt="" />
            </div>

            <div className="home-footer-container">
                <Footer/>
            </div>
        </div>

    </div>
  )
}
