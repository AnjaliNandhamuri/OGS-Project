import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './OrderConfirmation.css'; // for styling

const OrderConfirmation = () => {
  const [trackingStatus, setTrackingStatus] = useState(""); // Track status
  const trackingNumber = "123456789"; // Example tracking number

  const handleTrackOrder = async () => {
    try {
      const response = await fetch('https://api.example.com/track', {
        method: 'POST',
        body: JSON.stringify({ trackingNumber }), // Send tracking number
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      setTrackingStatus(data.status); // Set status from the response
    } catch (error) {
      setTrackingStatus('Error fetching tracking information'); // Error message
    }
  };

  const handleLeaveFeedback = () => {
    console.log("Leaving feedback...");
    // Implement feedback functionality here
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-header">
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been successfully processed.</p>
        <img 
          src="https://via.placeholder.com/300x150?text=Order+Confirmed" 
          alt="Order Confirmation" 
          className="confirmation-image"
        />
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          <li>Item 1: 2 x $5.00</li>
          <li>Item 2: 1 x $10.00</li>
          <li>Shipping: $2.50</li>
          <li><strong>Total: $17.50</strong></li>
        </ul>
      </div>

      <div className="delivery-info">
        <h3>Estimated Delivery: 2-3 Days</h3>
        <p>Your items will be delivered to the following address:</p>
        <p>1234 Fresh St, Your City, Your Country</p>
        <img 
          src="https://via.placeholder.com/150x100?text=Delivery+Truck" 
          alt="Delivery Truck" 
          className="delivery-image"
        />
      </div>

      <div className="next-steps">
        <h3>What's Next?</h3>
        <p>We'll send you an email with your tracking information once your order is dispatched.</p>
        <button className="track-button" onClick={handleTrackOrder}>Track My Order</button>

        {/* Display the tracking status after the button click */}
        {trackingStatus && <p>{trackingStatus}</p>}
      </div>

      <div className="feedback">
        <h3>We'd love to hear from you!</h3>
        <p>Share your experience with us so we can improve.</p>
        <button className="feedback-button" onClick={handleLeaveFeedback}>Leave Feedback</button>
      </div>

      <div className="thank-you-footer">
        <Link to="/" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
