import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
// import Sidebar from '../../Sidebar/Sidebar';
import './UserInfo.css';

const UserInfo = () => {

    const navigate = useNavigate();
    const [isOpenLogout, setIsOpenLogout] = useState(false);
    const [userName, setUserName] = useState("");


    // useEffect(()=>{
    //     setUserName(localStorage?.getItem('userName') ?? "");
    //     console.log(localStorage?.getItem('userName'))
    // },[])

    // setInterval(()=> {
    //     if(userName !== "") {
    //         clearInterval()
    //     }
    //     setUserName(localStorage?.getItem('userName') ?? "");
    //     console.log(localStorage?.getItem('userName'))
    // },2000)

    const intervalId = setInterval(() => {
      
        if (userName !== "") {
          clearInterval(intervalId);
        }
        setUserName(localStorage?.getItem('userName') ?? "");
        // console.log(localStorage?.getItem('userName'))

      }, 5000);

    const pathname = window.location.pathname;

    function handleSignOut () {
        localStorage.removeItem("userName");
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        localStorage.removeItem("userId");
        setIsOpenLogout(false);
        setUserName("");
    }

    return (
        <div className="user-info-container">
            <div className="user-info">
                {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>side</button> */}
                <h2 className="user-info-title">Travel Kart</h2>
                <div className="user-info-nav">
                    <div onClick={() => navigate("/")} style={{textDecoration: pathname === "/" ? "underline" : "none"}} className="user-info-nav-item">Home</div>
                    <div onClick={() => navigate("/services")} style={{textDecoration: pathname === "/services" || pathname === "/hotel-booking" || pathname === '/flight-booking' || pathname === '/train-booking' || pathname === '/bus-booking' || pathname === '/taxi-booking' ? "underline" : "none"}} className="user-info-nav-item">Services</div>
                    {/* <div onClick={() => navigate("/your-bookings")} style={{textDecoration: pathname === "/your-bookings" ? "underline" : "none"}} className="user-info-nav-item">Your Bookings</div> */}
                </div>
                <div className="user-info-content">
                    {
                    localStorage?.getItem('userName') ? 
                    <div  onClick={()=>setIsOpenLogout(!isOpenLogout)}>{`Hi, ${userName}`}</div>
                    : 
                    <button onClick={() => navigate("/login")}>Login</button>
                    }
                </div>
            </div>


            {isOpenLogout && (
                <div className="dropdown-content">
                {/* <button className="dropdown-btn" onClick={() => window.location.href="/login?userType=user"}>User Login</button> */}
                {/* <button className="dropdown-btn" onClick={() => window.location.href="/login?userType=doctor"}>Doctor Login</button> */}
                <button onClick={handleSignOut}>Logout</button>
                </div>
            )}

        </div>
    );
};

export default UserInfo;