import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-logo-section'>
            <img className='footer-logo-fb' src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"} alt='logo' />
            <img className='footer-logo' src={"https://static-00.iconduck.com/assets.00/whatsapp-icon-1020x1024-iykox85t.png"} alt='logo' />
            <img className='footer-logo' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"} alt='logo' />
            <img className='footer-logo' src={"https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"} alt='logo' />
            <img className='footer-logo' src={"https://cdn-icons-png.flaticon.com/512/1384/1384060.png"} alt='logo' />
        </div>
        <div className='footer-section'> 
            <p className='footer-section-text right-align'>Contact Us</p>
            <p className='footer-section-text right-align'>FAQ</p>
            <p className='footer-section-text right-align'>Support</p>
            <p className='footer-section-text right-align'>About Us</p>
            <p className='footer-section-text'>Blog</p>
        </div>
        <div className='footer-section'> 
            <p className='footer-section-text right-align'>Privacy Policy</p>
            <p className='footer-section-text right-align'>Terms and Conditions</p>
            <p className='footer-section-text'>© 2025 Travel Cart. All rights reserved.</p>
        </div>
    </div>
    // <div className='footer-container'>
    //     <div className='footer-section'>
    //         <h2 className='footer-links-title'>About</h2>
    //         <ul className='footer-links-list'>
    //             <li>About Us</li>
    //             <li>Features</li>
    //             <li>News and Blogs</li>
    //         </ul>
    //     </div>
    //     <div className='footer-section'>
    //         <h2 className='footer-links-title'>Company</h2>
    //         <ul className='footer-links-list'>
    //             <li>Why Travel Cart</li>
    //             <li>Capital</li>
    //             <li>Security</li>
    //         </ul>
    //     </div>
    //     <div className='footer-section'>
    //         <h2 className='footer-links-title'>Support</h2>
    //         <ul className='footer-links-list'>
    //             <li>FAQs</li>
    //             <li>Support Center</li>
    //             <li>Contact Us</li>
    //         </ul>
    //     </div>
    //     <div className='footer-section'>
    //         <h2 className='footer-links-title'>Terms and Agreements</h2>
    //     </div>
    //     <div className='footer-section'>
    //         <h2 className='footer-links-title'>Privacy Policy</h2>
    //     </div>
    // </div>
  )
}
