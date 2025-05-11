// src/Components/LocationPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationPage = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userLocation', JSON.stringify({ address }));
    navigate('/payment');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '60px' }}>
      <h2 className="text-center text-success mb-4">Shipping Location</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Shipping Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default LocationPage;
