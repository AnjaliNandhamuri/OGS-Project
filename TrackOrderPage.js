// TrackOrderPage.js
import React, { useState } from 'react';
import './TrackOrderPage.css';

const TrackOrderPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);

  // Simulating a mock API call to track the order
  const handleTrackOrder = () => {
    if (!trackingNumber) {
      alert('Please enter a tracking number');
      return;
    }

    // Simulate API call (replace with actual API later)
    setTimeout(() => {
      setTrackingStatus(`Your order ${trackingNumber} is out for delivery! Estimated arrival: 2-3 hours.`);
    }, 2000);
  };

  return (
    <div>
      <h1>Track Your Order</h1>
      <input
        type="text"
        placeholder="Enter tracking number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button onClick={handleTrackOrder}>Track</button>
      
      {trackingStatus && <p>{trackingStatus}</p>}
    </div>
  );
};

export default TrackOrderPage;
