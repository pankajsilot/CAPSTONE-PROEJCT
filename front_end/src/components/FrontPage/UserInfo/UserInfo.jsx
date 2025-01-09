import React, { useState } from 'react';
// import Sidebar from '../../Sidebar/Sidebar';
import './UserInfo.css';

const UserInfo = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="user-info-container">
            <div className="user-info">
                {/* <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>side</button> */}
                <h2 className="user-info-title">Travel Kart</h2>
                <div className="user-info-content">
                    {/* <button>Become a Partner</button> */}
                    <span>Hi, Welcome user</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;