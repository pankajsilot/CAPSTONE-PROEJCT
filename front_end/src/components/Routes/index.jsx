import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import { PageNotFound } from "../404/404";
import FlightBooking from "../FlightBooking/FlightBooking";
import HotelBooking from "../HotelBooking/HotelBooking";
import BusBooking from "../BusBooking/BusBooking";
import TrainBooking from "../TrainBooking/trainBooking";
    
export const AppRoutes = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/flight-booking" element={<FlightBooking/>} />
      <Route path="/hotel-booking" element={<HotelBooking/>} />
      <Route path="/bus-booking" element={<BusBooking/>} />
      <Route path="/train-booking" element={<TrainBooking/>} />
      {/* <Route path="/login" element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>}/> */}
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>
  );
};