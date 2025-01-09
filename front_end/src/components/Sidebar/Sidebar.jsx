import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <div >
            <aside>
                <h2>Bookler</h2>
                <ul>
                    <li>Home</li>
                    <li>Wallet</li>
                    <li>Booking</li>
                    <li>Business</li>
                    <li>Explore</li>
                    <li>Support</li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;