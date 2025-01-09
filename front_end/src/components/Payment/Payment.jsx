import React from 'react';
import './Payment.css';

export const Payment = ({price}) => {

  const handlePayment = async () => {
    const options = {
      key: 'rzp_test_ite7J9HVf2Ewhl',
      amount: price * 100, // Amount in paise (50000 paise = ₹500)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
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
