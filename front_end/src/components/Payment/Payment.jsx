import React, { useEffect } from 'react';
import './Payment.css';

export const Payment = ({bookingDetails, price, type}) => {

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    const options = {
      key: 'rzp_test_ite7J9HVf2Ewhl',
      amount: price * 100, // Amount in paise (50000 paise = ₹500)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: async function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        const userId = localStorage.getItem('userId');
          const saveBookings = await fetch(`http://localhost:9000/booking/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': `${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
              userId: userId,
              bookingId: response.razorpay_payment_id,
              bookingDetails,
              type
            }),
          });
          console.log({saveBookings})
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <button className="pay-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
