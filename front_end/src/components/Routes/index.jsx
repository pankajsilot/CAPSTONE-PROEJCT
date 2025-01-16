import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import { PageNotFound } from "../404/404";
import FlightBooking from "../FlightBooking/FlightBooking";
import HotelBooking from "../HotelBooking/HotelBooking";
import BusBooking from "../BusBooking/BusBooking";
import TrainBooking from "../TrainBooking/trainBooking";
import UserInfo from "../FrontPage/UserInfo/UserInfo";
import { Home } from "../Home/home";
import Login from "../login_and_signup/login";
import Signup from "../login_and_signup/signup";
    
export const AppRoutes = () => {
  return (
  <Router>
    <UserInfo/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<FrontPage/>} />
      <Route path="/flight-booking" element={<FlightBooking/>} />
      <Route path="/hotel-booking" element={<HotelBooking/>} />
      <Route path="/bus-booking" element={<BusBooking/>} />
      <Route path="/train-booking" element={<TrainBooking/>} />
      <Route path="/your-bookings" element={<FlightBooking/>} />
      <Route path="/login" element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>}/>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>
  );
};