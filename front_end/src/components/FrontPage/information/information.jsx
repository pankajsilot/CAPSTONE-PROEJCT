import React from 'react'
import './information.css'

export const Information = () => {

    const informationImage = [{
        img: "https://cdn-icons-png.flaticon.com/512/1169/1169918.png",
        heading: "Gurantee of best price",
        text: "We offer the best price for your travel. We are the best in the market."
    },{
        img: "https://cdn-icons-png.flaticon.com/512/2345/2345470.png",
        heading: "Safe and secure",
        text: "Book your travels with our app, which prioritizes your safety and security. We ensure a secure booking experience, protecting your personal information and providing peace of mind throughout your journey."
    },{
        img: "https://cdn-icons-png.flaticon.com/512/3106/3106367.png",
        heading: "Easy and fast",
        text: "Our app is designed for convenience, allowing you to book your travel in just a few clicks. We provide a seamless booking process, ensuring a hassle-free experience from start to finish."
    },{
        img: "https://iconomator.com/wp-content/uploads/2020/03/Support-24-7.png",
        heading: "24/7 support",
        text: "Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter. We ensure a seamless booking experience, protecting your personal information and providing peace of mind throughout your journey."
    },{
        img: "https://cdn-icons-png.flaticon.com/512/11743/11743352.png",
        heading: "Flexible booking options",
        text: "We offer flexible booking options, allowing you to choose the best travel dates and times. We provide a seamless booking process, ensuring a hassle-free experience from start to finish."
    },{
        img: "https://png.pngtree.com/png-clipart/20231220/original/pngtree-refund-icon-from-business-bicolor-set-return-photo-png-image_13887778.png",
        heading: "Refund and cancellation",
        text: "Refund and cancellation is available for your travel. Cancel your booking anytime and get your money back."
    }]

    return (
        <div className='front-page-information-container'>
            {   informationImage?.map((item, index) => (
                <div key={index} className='front-page-information-contents'>
                    <img style={{width: "100px", height: "100px"}} src={item?.img} alt={item?.heading}/>
                    <p style={{fontSize: "20px", fontWeight: "bold"}}>{item?.heading}</p>
                    <p style={{fontSize: "16px", fontWeight: "normal", textAlign: "center"}}>{item?.text}</p>
                </div>
            ))}
        </div>
    )
}
